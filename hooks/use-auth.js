/* eslint-disable import/exports-last */
/* eslint-disable get-off-my-lawn/prefer-arrow-functions */
import React, { useState, useEffect, useContext, createContext } from 'react'
import Router from 'next/router'
import cookie from 'js-cookie'
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

  // Set cookie with user object to work with serverless architecture
  const handleUser = (user) => {
    if (user) {
      setUser(user)
      cookie.set('nextjs-serverless-auth', true, { expires: 1 })

      return user
    }

    setUser(false)
    cookie.remove('nextjs-serverless-auth')

    return false
  }

  /**
   * Wrap any Firebase methods we want to use, making sure
   * to save the user to state
   */
  const signIn = (email, password) => {
    Router.push('/dashboard')

    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => handleUser(res.user))
  }

  const signUp = (email, password, displayName) => {
    Router.push('/dashboard')

    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (res) => {
        // Create the user profile in our database

        const user = res.user

        await fetch('/api/profile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ user, displayName })
        })

        handleUser(user)
      })
  }

  const signOut = () => {
    Router.push('/')

    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(false))
  }

  /**
   * Subscribe to user on mount.
   * Because this sets state in the callback, it will cause
   * any component that utilizes this hook to re-render
   * with the latest auth object.
   */
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser)

    // Clean up subscription on unmount
    return () => unsubscribe()
  }, [])

  // Return the user object and auth methods
  return {
    user,
    signIn,
    signUp,
    signOut
  }
}
