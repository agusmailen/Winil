import { combineReducers } from 'redux';
import user from './user.reducer';
import track from './tracks.reducer';

export default combineReducers({
    user,
    track,
});