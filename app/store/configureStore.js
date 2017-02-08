/**
 * Created by ASSOON on 2017/2/8.
 */

import { createStore, applyMiddleware } from 'redux'
// import createSagaMiddleware, { END } from 'redux-saga'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
    // const sagaMiddleware = createSagaMiddleware()
    let store = createStore(
        rootReducer,
        initialState,
        // applyMiddleware(sagaMiddleware)
    );

    // store.runSaga = sagaMiddleware.run;
    // store.close = () => store.dispatch(END);
    return store
}
