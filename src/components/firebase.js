import {initializeApp} from 'firebase'

const app = initializeApp({
  apiKey: 'AIzaSyCjFxu7Ft4mfHp8ksLYoRkOSWeK4tRmI0w',
  authDomain: 'showdowndata.firebaseapp.com',
  databaseURL: 'https://showdowndata.firebaseio.com',
  projectId: 'showdowndata',
  storageBucket: 'showdowndata.appspot.com',
  messagingSenderId: '811451470025'
})

export const db = app.database()
export const Data = db.ref('db')
