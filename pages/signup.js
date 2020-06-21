import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

import { useAuth } from '../hooks/use-auth'
import PublicLayout from '../layouts/PublicLayout'

export default () => {
  const auth = useAuth()
  const router = useRouter()

  const { register, handleSubmit, errors } = useForm()

  const signUp = ({ email, password, name }) => {
    auth
      .signUp(email, password, name)
      .then(() => router.push('/dashboard'))
      .catch((error) => {
        alert(error.message)
      })
  }

  return (
    <PublicLayout>
      <div className="min-h-full bg-gray-50 flex flex-col justify-center py-6 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-3 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Sign up for a new account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit(signUp)}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Name
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    name="name"
                    ref={register({ required: true })}
                    id="name"
                    type="text"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
                {errors.name && (
                  <span className="text-xs text-red-600">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mt-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    name="email"
                    ref={register({ required: true })}
                    id="email"
                    type="email"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
                {errors.email && (
                  <span className="text-xs text-red-600">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mt-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    name="password"
                    ref={register({ required: true, minLength: 6 })}
                    id="password"
                    type="password"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
                {errors.password && errors.password.type === 'required' && (
                  <span className="text-xs text-red-600">
                    This field is required
                  </span>
                )}
                {errors.password && errors.password.type === 'minLength' && (
                  <span className="text-xs text-red-600">
                    The password must be at least 6 characters long
                  </span>
                )}
              </div>

              <div className="mt-10">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  >
                    Sign Up
                  </button>
                </span>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm leading-5">
                  <span className="px-2 bg-white text-gray-500">
                    {'Already have an account?'}
                  </span>
                </div>
              </div>

              <div className="mt-3">
                <Link href="/signin">
                  <div className="flex justify-center text-sm leading-5">
                    <a className="cursor-pointer font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                      Click here to sign in
                    </a>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
