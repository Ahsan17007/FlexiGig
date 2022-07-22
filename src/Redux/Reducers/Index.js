import { combineReducers } from 'redux';

import { AuthReducer } from './AuthReducer';
import { CountriesListReducer } from './CountriesListReducer'
import { LoginNumberReducer } from './LoginNumberReducer';
import { DocFileReducer } from './DocFileReducer'
import { ServicesRoutesSelectionReducer } from './ServicesRoutesSelectionReducer'
import { ProjectsReducer } from './ProjectListReducer';


const rootReducer = combineReducers({
  Auth: AuthReducer,
  CountriesList: CountriesListReducer,
  LoginNumber: LoginNumberReducer,
  DocFileReducer: DocFileReducer,
  SerRouSel: ServicesRoutesSelectionReducer,
  Projects: ProjectsReducer,
});

export default rootReducer;
