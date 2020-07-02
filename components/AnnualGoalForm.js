import React from 'react'

const AnnualGoalForm = () => {
  return (
    <form>
      <div>
        <div>
          <div>
            <h2 className="text-3xl leading-6 font-medium text-gray-900">
              Annual Goals
            </h2>
            <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
              Your top 3 priorities for this year.
            </p>
          </div>

          <div className="mt-6 sm:mt-5">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-700">
                Annual Goal 1
              </h3>
            </div>

            <div className="mt-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="goal-statement"
                className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
              >
                Goal Statement
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="max-w-lg flex rounded-md shadow-sm">
                  <input
                    id="goal-statement"
                    className="flex-1 form-input block w-full min-w-0 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    placeholder="Lose 20 pounds"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="goal-nickname"
                  className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                >
                  Goal Nickname
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="max-w-lg flex rounded-md shadow-sm">
                    <input
                      id="goal-nickname"
                      className="flex-1 form-input block w-full min-w-0 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      placeholder="Weight Loss"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    An identifier for your goal.
                  </p>
                </div>
              </div>

              <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="goal-description"
                  className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                >
                  Goal Description (Optional)
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="max-w-lg flex rounded-md shadow-sm">
                    <textarea
                      id="goal-description"
                      rows="3"
                      className="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Write a few sentences describing your goal in detail.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-700">
                Annual Goal 2
              </h3>
            </div>

            <div className="mt-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="goal-statement"
                className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
              >
                Goal Statement
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="max-w-lg flex rounded-md shadow-sm">
                  <input
                    id="goal-statement"
                    className="flex-1 form-input block w-full min-w-0 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    placeholder="Lose 20 pounds"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="goal-nickname"
                  className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                >
                  Goal Nickname
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="max-w-lg flex rounded-md shadow-sm">
                    <input
                      id="goal-nickname"
                      className="flex-1 form-input block w-full min-w-0 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      placeholder="Weight Loss"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    An identifier for your goal.
                  </p>
                </div>
              </div>

              <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="goal-description"
                  className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                >
                  Goal Description (Optional)
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="max-w-lg flex rounded-md shadow-sm">
                    <textarea
                      id="goal-description"
                      rows="3"
                      className="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Write a few sentences describing your goal in detail.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-16">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-700">
                Annual Goal 3
              </h3>
            </div>

            <div className="mt-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="goal-statement"
                className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
              >
                Goal Statement
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="max-w-lg flex rounded-md shadow-sm">
                  <input
                    id="goal-statement"
                    className="flex-1 form-input block w-full min-w-0 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    placeholder="Lose 20 pounds"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="goal-nickname"
                  className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                >
                  Goal Nickname
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="max-w-lg flex rounded-md shadow-sm">
                    <input
                      id="goal-nickname"
                      className="flex-1 form-input block w-full min-w-0 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      placeholder="Weight Loss"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    An identifier for your goal.
                  </p>
                </div>
              </div>

              <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="goal-description"
                  className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                >
                  Goal Description (Optional)
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="max-w-lg flex rounded-md shadow-sm">
                    <textarea
                      id="goal-description"
                      rows="3"
                      className="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Write a few sentences describing your goal in detail.
                  </p>
                </div>
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
      </div>
    </form>
  )
}

export default AnnualGoalForm
