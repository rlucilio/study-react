import { Provider } from 'react-redux';
import store from './store';
import TodoList from './TodoList';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1 className='App'>App</h1>
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
