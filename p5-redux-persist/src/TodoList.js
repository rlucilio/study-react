import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as TodosActions from './store/actions/todos';

class TodoList extends React.Component {
  state = {
    newTodoText: '',
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>

        <form>
          <input
            type='text'
            value={this.state.newTodoText}
            onChange={(e) => this.setState({ newTodoText: e.target.value })}
          />
          <button
            type='button'
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();

              this.props.addTodo(this.state.newTodoText);
              this.setState({ newTodoText: '' });
            }}
          >
            Criar TO-DO
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  (state) => ({ todos: state.todos }),
  (dispatch) => bindActionCreators(TodosActions, dispatch)
)(TodoList);
