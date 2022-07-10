import { COUNTRIES_DATA } from '../Types/Index';

const initialState = {
    countries: null
};

const CountriesListReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case COUNTRIES_DATA:
            return {
                ...state,
                countries: action.payload,
            };
        default:
            return state;
    }
}

export { CountriesListReducer }