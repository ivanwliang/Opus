import { PrismaClient } from '@prisma/client'

import admin from '../../lib/firebase-admin'

const prisma = new PrismaClient()

export default async (req, res) => {
  const idToken = req.body
  let dbUser = null
  let uid = null

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken)

    uid = decodedToken.uid
  } catch (error) {
    console.error(error)
  }

  try {
    dbUser = await prisma.user.findOne({
      where: {
        id: uid
      }
    })
  } catch (error) {
    console.error(error)
  }

  res.json(dbUser)
}
