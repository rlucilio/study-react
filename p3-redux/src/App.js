import { Provider } from 'react-redux';
import Counter from './Counter';
import store from './store';
import TodoList from './TodoList';

function App() {
  return (
    <Provider store={store}>
      <div>
        <div className='App'>Hey</div>
        <Counter />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
