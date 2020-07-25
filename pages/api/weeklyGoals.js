import moment from 'moment'

import verifyToken from './verifyToken'

import prisma from '../../lib/prisma'

export default async (req, res) => {
  // (2020.07.25) verifyTokenRes is currently a string that's returned from verifyToken.js
  const verifyTokenRes = await verifyToken(req, res);

  if (!verifyTokenRes) {
    res.status(404).json('Something went wrong. Please try again.')
  }

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
  const { week } = req.query
  // convert the week into a DateTime object, to match that of the Prisma database
  const weekStartDate = moment(week).utc().startOf('week').toDate()
  const weekEndDate = moment(week).utc().endOf('week').toDate()

  let weeklyGoals = null

  try {
    weeklyGoals = await prisma.weeklyGoal.findMany({
      // hardcoded userId to test the api functionality
      where: {
        userId: verifyTokenRes,
        // week: {
        //   gte: weekStartDate,
        //   lte: weekEndDate
        // }
      }
    })
  } catch (error) {
    console.error(error)
  }

  res.status(200).json(weeklyGoals)

  return
}
