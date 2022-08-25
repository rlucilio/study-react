import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from './store/actions/todos';

const TodoList = ({ todos, addTodo }) => (
  <ul>
    {todos.loading && <p>Carregando...</p>}
    {todos.error && <p>Erro ao carregar</p>}
    {todos.data.map((todo) => (
      <li key={todo.id}>{todo.text}</li>
    ))}
    <button onClick={() => addTodo('Fazer café')}>Novo todo</button>
  </ul>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
