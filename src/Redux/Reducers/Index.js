import { combineReducers } from 'redux';

import { AuthReducer } from './AuthReducer';
import { SelectedLangReducer } from './SelectedLangReducer'

const rootReducer = combineReducers({
  Auth: AuthReducer,
  SelectedLanguage: SelectedLangReducer,
});

export default rootReducer;
