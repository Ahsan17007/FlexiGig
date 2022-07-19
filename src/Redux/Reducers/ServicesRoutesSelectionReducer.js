import { LOGOUT, SERVICES_DATA_SELECTION, ROUTES_DATA_SELECTION } from '../Types/Index';

const initialState = {
    selectedServices: [],
    selectedRoutes: []
};

const ServicesRoutesSelectionReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case LOGOUT:
            return initialState
        case SERVICES_DATA_SELECTION:
            return {
                ...state,
                selectedServices: action.payload,
            };
        case ROUTES_DATA_SELECTION:
            return {
                ...state,
                selectedRoutes: action.payload,
            };
        default:
            return state;
    }
}

export { ServicesRoutesSelectionReducer }