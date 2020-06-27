import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { format, formatISO, getYear, getMonth, startOfWeek } from 'date-fns'

import fetch from '../utils/fetch'
import { useAuth } from '../hooks/use-auth'
import AppLayout from '../layouts/AppLayout'

const CategoryGoals = ({
  category,
  annualGoals,
  monthlyGoals,
  weeklyGoals
}) => {
  return (
    <div>
      <div className="dashboard-tabcontent">
        <h4>Annual {category} Goal:</h4>
        <p>
          {
            annualGoals.filter(
              (goal) => goal.category === category.toLowerCase()
            )[0].goalStatement
          }
        </p>
        <button type="button" className="border border-cool-gray-900">
          Mark Complete
        </button>
      </div>
      <div className="dashboard-tabcontent">
        <h4>Monthly {category} Goal:</h4>
        <p>
          {
            monthlyGoals.filter(
              (goal) => goal.category === category.toLowerCase()
            )[0].goalStatement
          }
        </p>
        <button type="button" className="border border-cool-gray-900">
          Mark Complete
        </button>
      </div>
      <div className="dashboard-tabcontent">
        <h4>Weekly {category} Goal:</h4>
        <p>
          {
            weeklyGoals.filter(
              (goal) => goal.category === category.toLowerCase()
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
  const [category, setCategory] = useState('Finance')
  const [year, setYear] = useState(formatISO(Date.now()))
  const [month, setMonth] = useState(formatISO(Date.now()))
  const [week, setWeek] = useState(startOfWeek(Date.now()))

  const {
    status: annualStatus,
    data: annualData,
    error: annualError
  } = useQuery('annualGoals', () => fetch(`/api/annualGoals?year=${year}`))

  const { status: monthlyStatus, data: monthlyData } = useQuery(
    'monthlyGoals',
    () => fetch(`/api/monthlyGoals`)
  )

  const { status: weeklyStatus, data: weeklyData } = useQuery(
    'weeklyGoals',
    () => fetch(`/api/weeklyGoals`)
  )

  if (
    annualStatus === 'loading' ||
    monthlyStatus === 'loading' ||
    weeklyStatus === 'loading'
  ) {
    return <span>Loading...</span>
  }

  if (annualStatus === 'error') {
    return <span>Error: {annualError.message}</span>
  }

  return (
    <AppLayout>
      {annualData.map((goal) => (
        <p key={goal.id}>{goal.goalStatement}</p>
      ))}
      <p>Year: {year}</p>
      <p>Month: {month}</p>
      <p>Week: {format(week, 'MM/dd/yyyy')}</p>
      <button
        type="button"
        className="border border-cool-gray-900"
        onClick={() => auth.signOut().then(() => router.push('/'))}
      >
        Sign Out
      </button>
      <h1>Week of 6/21/2020</h1>
      <div className="dashboard-container">
        {weeklyData.map((goal) => (
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
          <button
            type="button"
            className="dashboard-tablinks"
            onClick={() => setCategory('Finance')}
          >
            Finance
          </button>
          <button
            type="button"
            className="dashboard-tablinks"
            onClick={() => setCategory('Health')}
          >
            Health
          </button>
          <button
            type="button"
            className="dashboard-tablinks"
            onClick={() => setCategory('Professional')}
          >
            Professional
          </button>
        </div>

        <CategoryGoals
          category={category}
          annualGoals={annualData}
          monthlyGoals={monthlyData}
          weeklyGoals={weeklyData}
        />
      </div>
    </AppLayout>
  )
}

export default Dashboard
