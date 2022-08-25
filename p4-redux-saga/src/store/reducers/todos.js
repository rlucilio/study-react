const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REQUEST_TODO_SUCCESS':
      return { loading: false, data: [...state.data, { id: Math.random(), text: action.text }], error: false };
    case 'REQUEST_TODO_FAILURE':
      return { loading: false, data: [], error: true };
    case 'REQUEST_TODO':
      return { ...state, loading: true };
    default:
      return state;
  }
}
