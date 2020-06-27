import fetch from 'isomorphic-unfetch'

// eslint-disable-next-line get-off-my-lawn/prefer-arrow-functions
// TBU error handling need to be determined
export default async function (...args) {
  const res = await fetch(...args)

  return res.json()
}
