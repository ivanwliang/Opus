import moment from 'moment'

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
  // convert the month into a DateTime object, to match that of the Prisma database
  const monthStartDate = moment(month).utc().startOf('month').toDate()
  const monthEndDate = moment(month).utc().endOf('month').toDate()

  console.log('month', month)
  console.log('start', monthStartDate)
  console.log('end', monthEndDate)

  let monthlyGoals = null

  try {
    monthlyGoals = await prisma.monthlyGoal.findMany({
      // hardcoded userId to test the api functionality
      where: {
        userId: 'Oa308DyTYrNsKqQnDGKw9aUJhBJ2',
        month: {
          gte: monthStartDate,
          lte: monthEndDate
        }
      }
    })
  } catch (error) {
    console.error(error)
  }

  res.status(200).json(monthlyGoals)

  return
}
