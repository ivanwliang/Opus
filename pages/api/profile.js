import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getUser = async (uid) => {
  if (!uid) return null

  let user = null

  try {
    user = await prisma.user.findOne({
      where: {
        id: uid
      }
    })
  } catch (error) {
    console.error(error)
  }

  return user
}

export default async (req, res) => {
  const { resUser: user, displayName: emailAuthDisplayName = null } = req.body

  // This function can get called without a user due to
  // "onAuthStateChanged" when logging out
  if (!user) {
    return res.status(403).json({})
  }

  const userProfile = await getUser(user.uid)

  // Only create new user profile if one does not already exist
  // This can happen when combining email/password + oauth
  let newUser = null

  if (!userProfile) {
    // Display name set when user signs up
    const { uid, email, displayName, photoURL } = user

    try {
      newUser = await prisma.user.create({
        data: {
          id: uid,
          email,
          displayName: emailAuthDisplayName || displayName,
          photoURL
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  res.status(200).json(newUser)
}
