import prisma from '../../../lib/prisma'
// import admin from '../../../lib/firebase-admin'

export default async (req, res) => {
  const {
    query: { userId }
  } = req
  // const idToken = req.headers.authorization.split(' ')[1]

  let themes

  try {
    // const { uid } = await admin.auth().verifyIdToken(idToken)

    // if (userId === 'WhO8DMS0TpWR5vDo5ohNP4ITQ7v1') {
    themes = await prisma.theme.findMany({
      where: {
        userId
      }
    })
    // }
  } catch (error) {
    console.error(error)
  }

  res.status(200).json(themes)
}
