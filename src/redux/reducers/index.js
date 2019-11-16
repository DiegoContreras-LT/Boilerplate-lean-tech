import {combineReducers} from "redux";
import storage from 'redux-persist/lib/storage';
import {persistReducer} from "redux-persist";

const persist = {
    key: 'app-root',
    storage,
    whitelist: []
};

const rootReducer = combineReducers({

});

export default persistReducer(persist,rootReducer);
