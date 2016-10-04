import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import sessionsReducer from './sessions';
import newsReducer from './news';

const rootReducer = combineReducers({
  routing: routerReducer,
  sessions: sessionsReducer,
  news: newsReducer
});

export default rootReducer;
