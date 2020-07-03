import React from 'react'

import AppLayout from '../layouts/AppLayout'
import AnnualGoalForm from '../components/AnnualGoalForm'
import MonthlyGoalForm from '../components/MonthlyGoalForm'

const Goals = () => {
  return (
    <AppLayout>
      <AnnualGoalForm />
      <MonthlyGoalForm />
    </AppLayout>
  )
}

export default Goals
