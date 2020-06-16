import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req, res) => {
  const post = await prisma.post.update({
    where: { id: 1 },
    data: {
      published: true
    }
  })

  res.statusCode = 200
  res.json(post)
}
