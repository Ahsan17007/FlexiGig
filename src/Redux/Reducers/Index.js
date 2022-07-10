import { combineReducers } from 'redux';

import { AuthReducer } from './AuthReducer';
import { CountriesListReducer } from './CountriesListReducer'


const rootReducer = combineReducers({
  Auth: AuthReducer,
  CountriesList: CountriesListReducer
});

export default rootReducer;
