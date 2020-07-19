import prisma from '../../lib/prisma'
import admin from '../../lib/firebase-admin'

export default async (req, res) => {
  if (req.method === 'POST') {
    const { statement, description, deadline } = req.body
    const idToken = req.headers.authorization.split(' ')[1]

    let theme
    let uid

    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken)

      uid = decodedToken.uid
      theme = await prisma.theme.create({
        data: {
          themeStatement: statement,
          themeDescription: description,
          deadline,
          user: {
            connect: { id: uid }
          }
        }
      })
    } catch (error) {
      console.error(error)
    }

    res.status(200).json(theme)
  }
}
