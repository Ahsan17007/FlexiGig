import { ONGOING_PROJECTS, PAST_PROJECTS, ACTIVE_PROJECTS } from '../Types/Index';

const initialState = {
    onGoing: null,
    past: null,
    active: null,
};

const ProjectsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ONGOING_PROJECTS:
            return {
                ...state,
                onGoing: action.payload,
            };
        case PAST_PROJECTS:
            return {
                ...state,
                past: action.payload,
            };
        case ACTIVE_PROJECTS:
            return {
                ...state,
                active: action.payload,
            };
        default:
            return state;
    }
}

export { ProjectsReducer }