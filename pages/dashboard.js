import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import moment from 'moment'

import fetch from '../utils/fetch'
import { useAuth } from '../hooks/use-auth'
import AppLayout from '../layouts/AppLayout'

// renders the tabs contents
// TBU potentially break out into a different component
const NicknameGoals = ({
  nickname,
  annualGoals,
  monthlyGoals,
  weeklyGoals
}) => {
  console.log(annualGoals)
  console.log(monthlyGoals)
  console.log(weeklyGoals)

  // TBU remove when this is not needed
  if (
    !nickname ||
    annualGoals.length < 1 ||
    monthlyGoals.length < 1 ||
    weeklyGoals.length < 1
  ) {
    return <span>Loading...</span>
  }

  return (
    <div>
      <div className="dashboard-tabcontent">
        <h4>Annual {nickname} Goal:</h4>
        <p>
          {
            annualGoals.filter(
              (goal) => goal.nickname.toLowerCase() === nickname.toLowerCase()
            )[0].goalStatement
          }
        </p>
        <button type="button" className="border border-cool-gray-900">
          Mark Complete
        </button>
      </div>
      <div className="dashboard-tabcontent">
        <h4>Monthly {nickname} Goal:</h4>
        <p>
          {
            monthlyGoals.filter(
              (goal) => goal.nickname.toLowerCase() === nickname.toLowerCase()
            )[0].goalStatement
          }
        </p>
        <button type="button" className="border border-cool-gray-900">
          Mark Complete
        </button>
      </div>
      <div className="dashboard-tabcontent">
        <h4>Weekly {nickname} Goal:</h4>
        <p>
          {
            weeklyGoals.filter(
              (goal) => goal.nickname.toLowerCase() === nickname.toLowerCase()
            )[0].goalStatement
          }
        </p>
        <button type="button" className="border border-cool-gray-900">
          Mark Complete
        </button>
      </div>
    </div>
  )
}

const Dashboard = () => {
  const auth = useAuth()
  const router = useRouter()

  // state for changing "tabs" in the main dashboard
  const [nickname, setNickname] = useState('')
  // local state to determine the week of period for the app
  // using moment to grab the current time, convert to UTC, identify the start of the week, format it for use
  const [weekOf, setWeekOf] = useState(moment().utc().startOf('week').format())

  // fetching data for annual, monthly, and weekly goals, and updates as weekOf local state updates
  const { status: annualStatus, data: annualData } = useQuery(
    ['annualGoals', { weekOf }],
    () => fetch(`/api/annualGoals?year=${weekOf}`)
  )
  const { status: monthlyStatus, data: monthlyData } = useQuery(
    ['monthlyGoals', { weekOf }],
    () => fetch(`/api/monthlyGoals?month=${weekOf}`)
  )
  const { status: weeklyStatus, data: weeklyData } = useQuery(
    ['weeklyGoals', { weekOf }],
    () => fetch(`/api/weeklyGoals?week=${weekOf}`)
  )

  // once the data is available, set the default nickname for the user
  useEffect(() => {
    if (annualData) {
      setNickname(annualData[0].nickname)
    }
  }, [annualData])

  // when the week change, repull the data with new period parameters

  // logic waiting for data to load before rendering the page
  // TBU for some type of loading animation
  if (
    annualStatus === 'loading' ||
    monthlyStatus === 'loading' ||
    weeklyStatus === 'loading'
  ) {
    return <span>Loading...</span>
  }

  // TBU error page for when there are problem pulling from the database

  return (
    <AppLayout>
      <button
        type="button"
        className="border border-cool-gray-900"
        onClick={() => auth.signOut().then(() => router.push('/'))}
      >
        Sign Out
      </button>
      <h1>Week of {moment(weekOf).utc().format('M/D/YY')}</h1>
      <div>
        <button
          type="button"
          className="border border-cool-gray-900"
          onClick={() => setWeekOf(moment(weekOf).utc().subtract(7, 'days'))}
        >
          Prior Week
        </button>
        <> </>
        <button
          type="button"
          className="border border-cool-gray-900"
          onClick={() => setWeekOf(moment(weekOf).utc().add(7, 'days'))}
        >
          Next Week
        </button>
      </div>

      <div className="dashboard-container">
        {weeklyData &&
          weeklyData.map((goal) => (
            <div key={goal.id} className="dashboard-summary">
              <p className="dashboard-goal">
                Weekly{' '}
                {goal.nickname.charAt(0).toUpperCase() + goal.nickname.slice(1)}{' '}
                goal: {goal.goalStatement}
              </p>
              <button type="button" className="border border-cool-gray-900">
                Mark Complete
              </button>
            </div>
          ))}
      </div>
      <div className="dashboard-container">Some chart showing analytics</div>
      <div className="dashboard-container">
        <div className="dashboard-tab">
          {annualData &&
            annualData.map((goal) => (
              <button
                key={goal.id}
                type="button"
                className="dashboard-tablinks"
                onClick={() => setNickname(goal.nickname)}
              >
                {goal.nickname}
              </button>
            ))}
        </div>

        <NicknameGoals
          nickname={nickname}
          annualGoals={annualData}
          monthlyGoals={monthlyData}
          weeklyGoals={weeklyData}
        />
      </div>
      <span className="relative z-0 inline-flex shadow-sm rounded-md">
        <button
          type="button"
          onClick={() => router.push('/goals')}
          className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
        >
          Add Annual Goals
        </button>
        <button
          type="button"
          disabled
          onClick={() => router.push('/monthlyGoals')}
          className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 cursor-not-allowed opacity-50 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
        >
          Add Monthly Goals
        </button>
        <button
          type="button"
          disabled
          onClick={() => router.push('/weeklyGoals')}
          className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 cursor-not-allowed opacity-50 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
        >
          Add Weekly Goals
        </button>
      </span>
    </AppLayout>
  )
}

export default Dashboard
