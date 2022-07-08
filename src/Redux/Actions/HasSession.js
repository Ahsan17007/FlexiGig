import { HAS_SESSION, REGISTRATION_DATA, LOGOUT } from '../Types/Index'


const isLoggedIn = (payload) => ({
    type: HAS_SESSION,
    payload
})

const registerUser = (payload) => ({
    type: REGISTRATION_DATA,
    payload
})

const onLogout = (payload) => ({
    type: LOGOUT
})


export { isLoggedIn, registerUser, onLogout }