import {combineReducers} from 'redux';
import sessionsReducer from './sessionsReducer';
import errorsReducer from './errorsReducer';
import requestingReducer from './requestingReducer';


export default combineReducers({
  sessions: sessionsReducer,
  errors: errorsReducer,
  requesting: requestingReducer
});
