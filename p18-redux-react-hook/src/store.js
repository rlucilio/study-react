import { createStore } from 'redux';

const INITIAL_STATE = ['PHP', 'JS'];

function courses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_COURSE':
      return [...state, action.name];

    default:
      return state;
  }
}

const store = createStore(courses);

export default store;
