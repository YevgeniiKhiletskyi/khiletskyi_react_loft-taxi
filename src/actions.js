export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const AUNTHENTICATE = 'AUNTHENTICATE'



export const logIn = () => ({type: LOG_IN})
export const reg = () => ({type: LOG_IN})
export const logOut = () => ({type: LOG_OUT})
export const aunthenticate = (email, password) => ({type: AUNTHENTICATE, payload: {email, password}})
