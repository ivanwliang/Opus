import * as admin from 'firebase-admin'

// eslint-disable-next-line node/no-unpublished-import
import * as serviceAccount from '../firebase-adminsdk'

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://opus-livn.firebaseio.com'
  })
} catch (error) {
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  if (!/already exists/u.test(error.message)) {
    console.error('Firebase admin initialization error', error.stack)
  }
}

export default admin
