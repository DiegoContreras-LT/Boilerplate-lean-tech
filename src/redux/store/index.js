import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from 'redux-saga';
import {persistStore} from "redux-persist";
import rootReducer from "../reducers/rootReducer";
import rootSaga from "../saga/rootSaga";

const composeEnhancers = (process.env.NODE_ENV === `development`)
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const sagaMiddleWare = createSagaMiddleware();
const middleware = [sagaMiddleWare];

const store = createStore(() => {
    },
    composeEnhancers(applyMiddleware(...middleware))
);

const persist = persistStore(store);

sagaMiddleWare.run(rootSaga);

export {store, persist};



