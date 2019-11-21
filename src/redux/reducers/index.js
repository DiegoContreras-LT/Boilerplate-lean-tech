import {combineReducers} from "redux";
import storage from 'redux-persist/lib/storage';
import {persistReducer} from "redux-persist";
import user from "./userReducer";

const persist = {
    key: 'app-root',
    storage,
    whitelist: []
};

const rootReducer = combineReducers({
    user
});

export default persistReducer(persist,rootReducer);
