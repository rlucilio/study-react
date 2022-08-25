import {
  // delay,
  // takeEvery,
  call,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects';

function apiGet(text, length) {
  return new Promise((resolve) => setTimeout(() => resolve(`Response: ${text}, qtd: ${length}`), 2000));
}

function* asyncAddTodo(action) {
  // yield delay(2000);
  try {
    yield put({ type: 'REQUEST_TODO' });
    const todos = yield select((state) => state.todos);
    if (todos.data.length > 3) throw Error('');
    const response = yield call(apiGet, action.text, todos.data.length);
    yield put({ type: 'REQUEST_TODO_SUCCESS', text: response });
  } catch (error) {
    yield put({ type: 'REQUEST_TODO_FAILURE' });
  }
}

export default function* root() {
  yield takeLatest('ASYNC_ADD_TODO', asyncAddTodo);
  // yield takeEvery('ASYNC_ADD_TODO', asyncAddTodo);
}
