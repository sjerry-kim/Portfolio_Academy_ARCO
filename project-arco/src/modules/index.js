import { combineReducers } from 'redux';

import comment from './comment';
import emotionBox from './emotionBox';

const rootReducer = combineReducers({comment,emotionBox});

export default rootReducer;