import { startOfWeek, startOfDay, startOfYear, format, parse } from 'date-fns'
import moment from 'moment'

import prisma from '../../lib/prisma'

export default async (req, res) => {
  const today = new Date()
  const formattedDate = format(today, 'MM/dd/yyyy')

  console.log('right now:', today)
  console.log('start of week:', startOfWeek(today))
  console.log('formatted today (no time):', formattedDate)
  console.log(
    'parsed date (no time):',
    parse(formattedDate, 'MM/dd/yyyy', new Date())
  )

  console.log(
    'moment start of year:',
    moment(today).utc().startOf('year').toDate()
  )
  console.log('date-fns start of year:', startOfYear(today))

  let theme

  try {
    theme = await prisma.theme.create({
      data: {
        deadline: startOfDay(today),
        themeStatement: 'testing date',
        user: {
          connect: { id: 'Oa308DyTYrNsKqQnDGKw9aUJhBJ2' }
        }
      }
    })
  } catch (error) {
    console.error(error)
  }

  res.status(200).json(theme)
}
