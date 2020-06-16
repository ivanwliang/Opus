import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req, res) => {
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true
    }
  })

  res.statusCode = 200
  res.json(allUsers)
}
