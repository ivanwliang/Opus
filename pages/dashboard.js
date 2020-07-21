import React from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import fetch from '../utils/fetch'
import { useAuth } from '../hooks/use-auth'
import AppLayout from '../layouts/AppLayout'

const Dashboard = () => {
  const auth = useAuth()
  const router = useRouter()

  const { isLoading, isError, data, error } = useQuery(
    auth.user ? ['themes', { user: auth.user.uid }] : null,
    () => {
      return fetch(`/api/themes/${auth.user.uid}`)
    }
  )

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  // local state to determine the week of period for the app
  // using moment to grab the current time, convert to UTC, identify the start of the week, format it for use
  // const [weekOf, setWeekOf] = useState(moment().utc().startOf('week').format())

  return (
    <AppLayout>
      <button
        type="button"
        className="block border border-cool-gray-900"
        onClick={() => auth.signOut().then(() => router.push('/'))}
      >
        Sign Out
      </button>

      <button
        type="button"
        onClick={() => router.push('/themes')}
        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
      >
        Add Theme
      </button>

      <ul>
        {data &&
          data.map((theme) => (
            <li key={theme.id}>
              {theme.themeStatement} - {theme.themeDescription}. Deadline:{' '}
              {theme.deadline}
            </li>
          ))}
      </ul>

      {/* <h1>Week of {moment(weekOf).utc().format('M/D/YY')}</h1>
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
      </div> */}
      {/* <span className="relative z-0 inline-flex shadow-sm rounded-md">
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
      </span> */}
    </AppLayout>
  )
}

export default Dashboard
