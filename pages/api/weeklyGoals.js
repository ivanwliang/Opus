import { parseISO, startOfWeek, endOfWeek, formatISO, zonedTimeToUTC } from 'date-fns'

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
  const { week } = req.query
  const formattedDate = parseISO(week)
  let weeklyGoals = null

  console.log(formattedDate);
  console.log(startOfWeek(formattedDate));
  // console.log(getTimeZoneValue());
  // console.log(zonedTimeToUTC(startOfWeek(formattedDate), getTimeZoneValue()))

  try {
    weeklyGoals = await prisma.weeklyGoal.findMany({
      // hardcoded userId to test the api functionality
      where: { 
        userId: 'Oa308DyTYrNsKqQnDGKw9aUJhBJ2',
        week: {
          gte: startOfWeek(formattedDate),
          lt: endOfWeek(formattedDate)
        }
      }
    })
  } catch (error) {
    console.error(error)
  }

  res.status(200).json(weeklyGoals)

  return
}
