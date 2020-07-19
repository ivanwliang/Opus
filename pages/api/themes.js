import prisma from '../../lib/prisma'

export default async (req, res) => {
  if (req.method === 'POST') {
    const { statement, description, deadline } = req.body

    let theme

    try {
      theme = await prisma.theme.create({
        data: {
          themeStatement: statement,
          themeDescription: description,
          deadline,
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
}
