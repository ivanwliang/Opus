/* eslint-disable import/exports-last */
/* eslint-disable get-off-my-lawn/prefer-arrow-functions */
import React, { useState, useEffect, useContext, createContext } from 'react'
import * as firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
}

// Prevent firebase duplicate-app error
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const authContext = createContext()

/*
 * Provider component that wraps our app and provides the auth object
 * to any child component that calls useAuth()
 */
export function ProvideAuth({ children }) {
  // eslint-disable-next-line no-use-before-define
  const auth = useProvideAuth()

  return <authContext.Provider value={auth}>{children}</authContext.Provider>
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
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        setUser(res.user)

        return res.user
      })
  }

  const signUp = (email, password) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        setUser(res.user)

        return res.user
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
    // eslint-disable-next-line no-shadow
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
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
