import { combineReducers } from 'redux';
import {userReducer} from './user/user.reducer';
import {projectReducer} from './project/project.reducer';
import { themeReducer } from './theme/theme.reducer';
import { valuesReducer } from './values/values.reducer';
import { homeReducer } from './home/home.reducer';

 export const rootReducer = combineReducers({
  user: userReducer,
  project: projectReducer,
  theme: themeReducer,
  values: valuesReducer,
  home: homeReducer
});
