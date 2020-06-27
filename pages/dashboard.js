import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { format, formatISO, getYear, getMonth, startOfWeek } from 'date-fns'

import fetch from '../utils/fetch'
import { useAuth } from '../hooks/use-auth'
import AppLayout from '../layouts/AppLayout'

// renders the tabs contents
// TBU potentially break out into a different component
const CategoryGoals = ({
  nickname,
  annualGoals,
  monthlyGoals,
  weeklyGoals
}) => {
  // TBU remove when this is not needed
  if (!nickname) {
    return (<span>Loading...</span>)
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
  // const [desiredGoal, setDesiredGoal] = useState('')
  const [nickname, setNickname] = useState('')
  const [year, setYear] = useState(formatISO(Date.now()))
  const [month, setMonth] = useState(formatISO(Date.now()))
  const [week, setWeek] = useState(startOfWeek(Date.now()))

  // feteching data for annual, monthly, and weekly goals
  const {status: annualStatus, data: annualData} = useQuery('annualGoals', () => fetch(`/api/annualGoals?year=${year}`));
  const {status: monthlyStatus, data: monthlyData} = useQuery('monthlyGoals', () => fetch(`/api/monthlyGoals`));
  const {status: weeklyStatus, data: weeklyData} = useQuery('weeklyGoals', () => fetch(`/api/weeklyGoals`));

  // once the data is available, set the default nickname for the user
  useEffect(() => {
    if (annualData) {
      setNickname(annualData[0].nickname);
  }}, [annualData])

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
  // 
  return (
    <AppLayout>
      {/* {annualData && annualData.map((goal) => (
        <p key={goal.id}>{goal.goalStatement}</p>
      ))} */}
      
      <button
        type="button"
        className="border border-cool-gray-900"
        onClick={() => auth.signOut().then(() => router.push('/'))}
      >
        Sign Out
      </button>
      <h1>Week of 6/21/2020</h1>
      <div className="dashboard-container">
        {weeklyData && weeklyData.map((goal) => (
          <div key={goal.id} className="dashboard-summary">
            <p className="dashboard-goal">
              Weekly{' '}
              {goal.category.charAt(0).toUpperCase() + goal.category.slice(1)}{' '}
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
          {annualData && annualData.map((goal) => (
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

        <CategoryGoals
          nickname={nickname}
          annualGoals={annualData}
          monthlyGoals={monthlyData}
          weeklyGoals={weeklyData}
        />
      </div>
    </AppLayout>
  )
}

export default Dashboard
