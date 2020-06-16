import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req, res) => {
  const user = await prisma.user.create({
    data: {
      name: 'Ivan',
      email: 'ivan@prisma.io',
      posts: {
        create: {
          title: "Ivan's world"
        }
      },
      profile: {
        create: { bio: 'I like kimi' }
      }
    }
  })

  res.statusCode = 200
  res.json(user)
}
