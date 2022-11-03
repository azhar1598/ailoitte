import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import createSagaMiddleware from "@redux-saga/core";

import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { watcherSaga } from "../saga";


const persistConfig = {
    key: 'persistKey',
    storage,
    whitelist: [
        'members'
    ], 
}
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middleware)))
const persistor = persistStore(store)
sagaMiddleware.run(watcherSaga)

export default store
export { persistor }