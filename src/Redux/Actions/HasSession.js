import { HAS_SESSION, LOGGEDIN_USER_DATA, LOGOUT } from '../Types/Index'


const userToken = (payload) => ({
    type: HAS_SESSION,
    payload
})

const loggedInData = (payload) => ({
    type: LOGGEDIN_USER_DATA,
    payload
})
const onLogout = (payload) => ({
    type: LOGOUT
})


export { userToken, loggedInData, onLogout }