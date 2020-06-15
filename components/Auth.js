import React from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

// Actual signin/signup form content
const AuthForm = ({ register, errors, type, onSubmit, header }) => {
  return (
    <div className="min-h-full bg-gray-50 flex flex-col justify-center py-6 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Opus Logo */}
        {/* <img
          className="mx-auto h-12 w-auto"
          src="/img/logos/workflow-mark-on-white.svg"
          alt="Workflow"
        /> */}
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          {header}
        </h2>
        <p className="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
          Or{' '}
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            start your 14-day free trial
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={onSubmit}>
            <div>
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

            <div className="mt-6 flex items-center justify-between">
              {/* <div className="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm leading-5 text-gray-900"
                >
                  Remember me
                </label>
              </div> */}

              <div className="text-sm leading-5">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  {type}
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
                  {"Don't have an account?"}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <Link href="/signup">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="button"
                    className="w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out"
                  >
                    Sign Up
                  </button>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// For use on signin and signup pages
const FullScreenAuth = ({ type, onSubmit, header }) => {
  const { register, handleSubmit, errors } = useForm()

  return (
    <div>
      <AuthForm
        type={type}
        register={register}
        onSubmit={handleSubmit((data) => onSubmit(data))}
        errors={errors}
        header={header}
      />
    </div>
  )
}

export default FullScreenAuth
