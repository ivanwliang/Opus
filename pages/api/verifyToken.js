import admin from '../../lib/firebase-admin'

export default async (req, res) => {
  const idToken = req.headers.authorization.split(' ')[1]

  let uid = null

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken)

    uid = decodedToken.uid
  } catch (error) {
    console.error(error)
  }

  res.status(200).json({ uid })
}
