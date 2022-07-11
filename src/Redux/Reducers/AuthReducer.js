import { HAS_SESSION, LOGGEDIN_USER_DATA, LOGOUT } from '../Types/Index';

const initialState = {
    loginUserData: null,
    token: null,
};

const AuthReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case LOGOUT:
            return initialState
        case HAS_SESSION:
            return {
                ...state,
                token: action.payload,
            };
        case LOGGEDIN_USER_DATA:
            return {
                ...state,
                loginUserData: action.payload,
            };
        default:
            return state;
    }
}

export { AuthReducer }