import { getYear, startOfYear, endOfYear, parseISO, toDate } from 'date-fns'
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
  const { year } = req.query
  // convert the year into a DateTime object, to match that of the Prisma database
  const yearStartDate = moment(year).utc().startOf('year').toDate();
  const yearEndDate = moment(year).utc().endOf('year').toDate();

  let annualGoals = null

  try {
    annualGoals = await prisma.annualGoal.findMany({
      // hardcoded userId to test the api functionality
      where: {
        userId: 'Oa308DyTYrNsKqQnDGKw9aUJhBJ2',
        year: {
          gte: yearStartDate,
          lte: yearEndDate
        }
      }
    })
    // console.log(annualGoals);
  } catch (error) {
    console.error(error)
  }

  res.status(200).json(annualGoals)

  return
}
