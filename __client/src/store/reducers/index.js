import { combineReducers } from 'redux';
import banner from './banner';
import counter from './counter';

export default combineReducers({
  banner,
  counter,
});
