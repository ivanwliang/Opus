/* eslint-disable import/exports-last */
/* eslint-disable get-off-my-lawn/prefer-arrow-functions */
import React, { useState, useEffect, useContext, createContext } from 'react'
import fetch from 'isomorphic-unfetch'

import firebase from '../lib/firebase'

const authContext = createContext()

/*
 * Provider component that wraps our app and provides the auth object
 * to any child component that calls useAuth()
 */
export function ProvideAuth({ children }) {
  const auth = useProvideAuth()

  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

// Grab user from DB with additional fields instead of using firebase's user object
export const verifyTokenAndGetUser = async (user) => {
  if (!user) return null

  const idToken = await user.getIdToken(true)

  console.log(idToken)
  const dbUser = await fetch('/api/verifyToken', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(idToken)
  })

  return dbUser.json()
}

/*
 * Hook for child components to get the auth object
 * and re-render when it changes
 */
export const useAuth = () => {
  return useContext(authContext)
}

// Provider hook that creates the auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null)

  /**
   * Wrap any Firebase methods we want to use, making sure
   * to save the user to state
   */
  const signIn = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        // const dbUser = await verifyTokenAndGetUser(res.user)

        setUser(res.user)

        return res.user
      })
  }

  const signUp = (email, password, displayName) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (res) => {
        // Create the user profile in our database

        const resUser = res.user

        await fetch('/api/profile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ resUser, displayName })
        })

        // const dbUser = await verifyTokenAndGetUser(resUser)

        setUser(resUser)

        return resUser
      })
  }

  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => setUser(false))
  }

  const sendPasswordResetEmail = (email) => {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return true
      })
  }

  const confirmPasswordReset = (code, newPassword) => {
    return firebase
      .auth()
      .confirmPasswordReset(code, newPassword)
      .then(() => {
        return true
      })
  }

  /**
   * Subscribe to user on mount.
   * Because this sets state in the callback, it will cause
   * any component that utilizes this hook to re-render
   * with the latest auth object.
   */
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((resUser) => {
      if (resUser) {
        // This call to create a new user profile is for oauth providers that
        // don't go through our sign up form
        // const newUser = await fetch('/api/create', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify({ resUser })
        // })

        // const dbUser = await verifyTokenAndGetUser(resUser)

        setUser(resUser)
      } else {
        setUser(false)
      }
    })

    // Clean up subscription on unmount
    return () => unsubscribe()
  }, [])

  // Return the user object and auth methods
  return {
    user,
    signIn,
    signUp,
    signOut,
    sendPasswordResetEmail,
    confirmPasswordReset
  }
}
