import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { useForm, Controller } from 'react-hook-form'
import { addDays } from 'date-fns'

import fetch from '../utils/fetch'

const ThemeForm = ({ user }) => {
  const { register, handleSubmit, control, errors } = useForm()

  const submitForm = (data) => {
    // user.getIdToken(true).then((token) => {
    console.log(data)
    fetch('/api/themes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    })
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div>
        <div>
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Theme
            </h3>
            <p className="mt-1 text-sm leading-5 text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="statement"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Goal Statement
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  id="statement"
                  name="statement"
                  ref={register({ required: true })}
                  className="flex-1 form-input block w-full min-w-0 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Goal Description (Optional)
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <textarea
                  id="description"
                  name="description"
                  ref={register()}
                  rows="3"
                  className="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Write a few sentences about your goal in detail.
              </p>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="deadline"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Deadline
              </label>
              <div className="mt-1 rounded-md ">
                {/* Must use React-Hook-Form's Controller to wrap React-datepicker.
                  TODO: Set default value to tomorrow's date instead of placeholder.
                  Could do this with native DatePicker using [deadline, setDeadline] hooks
                 */}
                <Controller
                  as={DatePicker}
                  control={control}
                  name="deadline"
                  valueName="selected"
                  onChange={([selected]) => selected}
                  placeholderText="Select date"
                  minDate={addDays(new Date(), 1)}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />

                {/* <DatePicker
                  selected={deadlineDate}
                  onChange={(date) => setDeadlineDate(date)}
                  ref={register({ required: true })}
                  minDate={addDays(new Date(), 1)}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                /> */}
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Clear goals have well-defined end states.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-200 pt-5">
        <div className="flex justify-end">
          <span className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
            >
              Cancel
            </button>
          </span>
          <span className="ml-3 inline-flex rounded-md shadow-sm">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Save
            </button>
          </span>
        </div>
      </div>
    </form>
  )
}

export default ThemeForm
