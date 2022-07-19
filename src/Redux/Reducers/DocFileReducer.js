import { ID_DOCUMENT_FILE, EDU_DOCUMENT_FILE, REV_DOCUMENT_FILE, LOGOUT } from '../Types/Index';

const initialState = {
    idDoc: null,
    eduDoc: null,
    revDoc: null
};

const DocFileReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        
        case LOGOUT:
            return initialState
        
        case ID_DOCUMENT_FILE:
            return {
                ...state,
                idDoc: action.payload,
            };

        case EDU_DOCUMENT_FILE:
            return {
                ...state,
                eduDoc: action.payload,
            };

        case REV_DOCUMENT_FILE:
            return {
                ...state,
                revDoc: action.payload,
            };

        default:
            return state;
    }
}

export { DocFileReducer }