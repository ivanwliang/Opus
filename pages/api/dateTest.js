import { startOfWeek, format, parse } from 'date-fns'

import prisma from '../../lib/prisma'

export default async (req, res) => {
  const today = new Date()
  const formattedDate = format(today, 'MM/dd/yyyy')

  console.log('start of week:', startOfWeek(today))
  console.log(formattedDate)
  console.log(parse(formattedDate, 'MM/dd/yyyy', new Date()))

  let theme

  try {
    theme = await prisma.theme.create({
      data: {
        deadline: today,
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
