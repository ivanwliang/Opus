import { parseISO, startOfMonth, endOfMonth } from 'date-fns'

import prisma from '../../lib/prisma'

export default async (req, res) => {
  if (req.method === 'POST') {
    res.status(200).json('to be built later')
  }

  if (req.method === 'DELETE') {
    res.status(200).json('to be built later')
  }

  if (req.method === 'PUT') {
    res.status(200).json('to be built later')
  }

  // if no other req methods, then assumes it is a GET function
  const { month } = req.query
  const formattedDate = parseISO(month)
  let monthlyGoals = null

  try {
    monthlyGoals = await prisma.monthlyGoal.findMany({
      // hardcoded userId to test the api functionality
      where: { 
        userId: 'Oa308DyTYrNsKqQnDGKw9aUJhBJ2',
        month: {
          gte: startOfMonth(formattedDate),
          lt: endOfMonth(formattedDate)
        }
      }
    })
  } catch (error) {
    console.error(error)
  }

  res.status(200).json(monthlyGoals)

  return
}
