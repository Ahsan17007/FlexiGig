import { combineReducers } from 'redux';

import { AuthReducer } from './AuthReducer';
import { CountriesListReducer } from './CountriesListReducer'
import { LoginNumberReducer } from './LoginNumberReducer';


const rootReducer = combineReducers({
  Auth: AuthReducer,
  CountriesList: CountriesListReducer,
  LoginNumber: LoginNumberReducer,
});

export default rootReducer;
