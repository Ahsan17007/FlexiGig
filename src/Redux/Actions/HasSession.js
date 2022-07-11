import { HAS_SESSION, LOGGEDIN_USER_DATA, LOGGEDIN_NUMBER, LOGOUT } from '../Types/Index'


const userToken = (payload) => ({
    type: HAS_SESSION,
    payload
})

const loggedInData = (payload) => ({
    type: LOGGEDIN_USER_DATA,
    payload
})
const loggedInNumber = (payload) => ({
    type: LOGGEDIN_NUMBER,
    payload
})
const onLogout = (payload) => ({
    type: LOGOUT
})


export { userToken, loggedInData, onLogout, loggedInNumber }