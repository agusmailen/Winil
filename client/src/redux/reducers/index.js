import { combineReducers } from 'redux';
import user from './user.reducer';
import track from './tracks.reducer';
import cart from './cart.reducer';
import filter from './filters.reducer';

export default combineReducers({
    user,
    track,
    cart,
    filter,
});