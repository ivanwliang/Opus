import fetch from 'isomorphic-unfetch'

// TBU error handling need to be determined
// eslint-disable-next-line get-off-my-lawn/prefer-arrow-functions
export default async function (...args) {
  const res = await fetch(...args)

  return res.json()
}
