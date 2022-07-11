import { LOGGEDIN_NUMBER } from '../Types/Index';

const initialState = {
    loginNumber: ''
};

const LoginNumberReducer = (state = initialState, action = {}) => {
    switch (action.type) {

        case LOGGEDIN_NUMBER:
            return {
                ...state,
                loginNumber: action.payload,
            };
        default:
            return state;
    }
}

export { LoginNumberReducer }