import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { useAuth } from '../hooks/use-auth'
import AppLayout from '../layouts/AppLayout'


const Dashboard = () => {
  const auth = useAuth()
  const router = useRouter()
  const [desiredGoal, setDesiredGoal] = useState('Nickname1')

  return (
    <AppLayout>
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9">
        Opus Dashboard
      </h2>
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
          <p className="dashboard-goal">Nickname 1's Week Goal: Goal statement - Build this app</p>
          <button className="border border-cool-gray-900">Mark Complete</button>
        </div>
        <div className="dashboard-summary">
          <p className="dashboard-goal">Nickname 2's Week Goal: Goal statement - Build this app</p>
          <button className="border border-cool-gray-900">Mark Complete</button>
        </div>
        <div className="dashboard-summary">
          <p className="dashboard-goal">Nickname 3's Week Goal: Goal statement - Build this app</p>
          <button className="border border-cool-gray-900">Mark Complete</button>
        </div>
      </div>
      <div className="dashboard-container">
        Some chart showing analytics
      </div>
      <div className="dashboard-container">
          <div className="dashboard-tab">
            <button className="dashboard-tablinks" onClick={() => setDesiredGoal('Nickname1')}>Nickname1</button>
            <button className="dashboard-tablinks" onClick={() => setDesiredGoal('Nickname2')}>Nickname2</button>
            <button className="dashboard-tablinks" onClick={() => setDesiredGoal('Nickname3')}>Nickname3</button>
          </div>
          <div>
            <div className="dashboard-tabcontent">
              <h4>Annual:</h4>
              <p>{desiredGoal}'s annual goal statement</p>
              <button className="border border-cool-gray-900">Mark Complete</button>
            </div>
            <div className="dashboard-tabcontent">
              <h4>Monthly:</h4>
              <p>{desiredGoal}'s monthly goal statement</p>
              <button className="border border-cool-gray-900">Mark Complete</button>
            </div>
            <div className="dashboard-tabcontent">
              <h4>Weekly:</h4>
              <p>{desiredGoal}'s weekly goal statement</p>
              <button className="border border-cool-gray-900">Mark Complete</button>
            </div>
          </div>
      </div>
    </AppLayout>
  )
}

export default Dashboard
