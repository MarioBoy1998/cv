import { combineReducers } from 'redux';

import user from './user';
import background from './background';
import year from './year';
import source from './source';
import id from './id';

export default combineReducers({
  user,
  background,
  year,
  source,
  id
});
