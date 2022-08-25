import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';
import TodoList from './TodoList';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} />
      <div className='App'>
        <h1>App</h1>
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
