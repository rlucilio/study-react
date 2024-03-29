import { applyMiddleware, createStore, Store } from 'redux';
import { RepositoriesState } from './ducks/repositories/types';
import rootReducer from './ducks/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  repositories: RepositoriesState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
