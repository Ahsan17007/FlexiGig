import { SELECTED_LANGUAGE } from '../Types/Index';

const initialState = {
    languageSelected: 'en'
};

const SelectedLangReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        // case LOGOUT:
        //     return initialState
        case SELECTED_LANGUAGE:
            return {
                ...state,
                languageSelected: action.payload,
            };
        default:
            return state;
    }
}

export { SelectedLangReducer }