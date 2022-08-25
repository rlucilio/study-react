const initialState = {
  modules: [
    {
      id: 1,
      title: 'Iniciando React',
      lessons: [
        { id: 1, title: 'Primeira aula' },
        { id: 2, title: 'Segunda aula' },
      ],
    },
    {
      id: 2,
      title: 'Aprendendo Redux',
      lessons: [
        { id: 3, title: 'Terceira aula' },
        { id: 4, title: 'Quarta aula' },
      ],
    },
  ],
  activeLesson: {},
  activeModule: {},
};

function courseReducer(state = initialState, action) {
  console.log(action);

  if (action.type === 'TOGGLE_LESSON') {
    return { ...state, activeLesson: action.lesson, activeModule: action.module };
  }
  return state;
}

export default courseReducer;
