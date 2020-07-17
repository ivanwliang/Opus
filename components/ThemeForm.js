import React from 'react'

const ThemeForm = () => {
  return (
    <form>
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
                  className="flex-1 form-input block w-full min-w-0 rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                  rows="3"
                  className="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Write a few sentences about your goal in detail.
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
