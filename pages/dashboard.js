import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import fetch from '../utils/fetch'
import { useAuth } from '../hooks/use-auth'
import AppLayout from '../layouts/AppLayout'

const AnnualGoals = () => {
  const { status, data, error } = useQuery('annualGoals', () =>
    fetch(`/api/annualGoals`)
  )

  if (status === 'loading') {
    return <span>Loading...</span>
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>
  }

  return (
    <>
      {data.map((goal) => (
        <li key={goal.id}>
          {goal.nickname} - {goal.goalStatement}
        </li>
      ))}
    </>
  )
}

const MonthlyGoals = () => {
  const { status, data, error } = useQuery('monthlyGoals', () =>
    fetch(`/api/monthlyGoals`)
  )

  if (status === 'loading') {
    return <span>Loading...</span>
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>
  }

  return (
    <>
      {data.map((goal) => (
        <li key={goal.id}>{goal.goalStatement}</li>
      ))}
    </>
  )
}

const WeeklyGoals = () => {
  const { status, data, error } = useQuery('WeeklyGoals', () =>
    fetch(`/api/weeklyGoals`)
  )

  if (status === 'loading') {
    return <span>Loading...</span>
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>
  }

  return (
    <>
      {data.map((goal) => (
        <li key={goal.id}>{goal.goalStatement}</li>
      ))}
    </>
  )
}

const Dashboard = () => {
  const auth = useAuth()
  const router = useRouter()

  // state for changing "tabs" in the main dashboard
  // const [desiredGoal, setDesiredGoal] = useState('')
  const [category, setCategory] = useState('finance')

  return (
    <AppLayout>
      <h2 className="text-2xl font-bold leading-7 sm:text-3xl sm:leading-9">
        Annual Goals
      </h2>
      <AnnualGoals category={category} />

      <h2 className="text-2xl font-bold leading-7 sm:text-3xl sm:leading-9">
        Monthly Goals
      </h2>
      <MonthlyGoals />

      <h2 className="text-2xl font-bold leading-7 sm:text-3xl sm:leading-9">
        Weekly Goals
      </h2>
      <WeeklyGoals />

      <button
        type="button"
        className="border border-cool-gray-900"
        onClick={() => auth.signOut().then(() => router.push('/'))}
      >
        Sign Out
      </button>
      <h1>Week of 6/21/2020</h1>
      <div className="dashboard-container">
        <div className="dashboard-summary">
          <p className="dashboard-goal">
            Nickname 1's Week Goal: Goal statement - Build this app
          </p>
          <button type="button" className="border border-cool-gray-900">
            Mark Complete
          </button>
        </div>
        <div className="dashboard-summary">
          <p className="dashboard-goal">
            Nickname 2's Week Goal: Goal statement - Build this app
          </p>
          <button type="button" className="border border-cool-gray-900">
            Mark Complete
          </button>
        </div>
        <div className="dashboard-summary">
          <p className="dashboard-goal">
            Nickname 3's Week Goal: Goal statement - Build this app
          </p>
          <button type="button" className="border border-cool-gray-900">
            Mark Complete
          </button>
        </div>
      </div>
      <div className="dashboard-container">Some chart showing analytics</div>
      <div className="dashboard-container">
        <div className="dashboard-tab">
          <button
            type="button"
            className="dashboard-tablinks"
            onClick={() => setCategory('finance')}
          >
            Finance
          </button>
          <button
            type="button"
            className="dashboard-tablinks"
            onClick={() => setCategory('health')}
          >
            Health
          </button>
          <button
            type="button"
            className="dashboard-tablinks"
            onClick={() => setCategory('professional')}
          >
            Professional
          </button>
        </div>
        <div>
          <div className="dashboard-tabcontent">
            <h4>Annual:</h4>
            <p>{category}'s annual goal statement</p>
            <button type="button" className="border border-cool-gray-900">
              Mark Complete
            </button>
          </div>
          <div className="dashboard-tabcontent">
            <h4>Monthly:</h4>
            <p>{category}'s monthly goal statement</p>
            <button type="button" className="border border-cool-gray-900">
              Mark Complete
            </button>
          </div>
          <div className="dashboard-tabcontent">
            <h4>Weekly:</h4>
            <p>{category}'s weekly goal statement</p>
            <button type="button" className="border border-cool-gray-900">
              Mark Complete
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Dashboard
