import admin from '../../lib/firebase-admin'

// verify token api works
// to do: might need to make the function more complete
export default async (req, res) => {
  const idToken = req.headers.authorization.split(' ')[1]
  let uid = null

  try {
    
    const decodedToken = await admin.auth().verifyIdToken(idToken)

    uid = decodedToken.uid
  } catch (error) {
    console.error(error)
  }
  
  // using a return instead of a res to allow the uid to pass into another API
  // otherwise, this runs into an error where the application tries to set headers AGAIN after they are sent
  // to do: what does verifyToken return when it's a faulty token?
  return uid;
  // res.status(200).json({ uid })
}
