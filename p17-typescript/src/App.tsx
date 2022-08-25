import { Provider } from 'react-redux';
import RepositoryList from './components/RepositoryList';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <RepositoryList />
      </div>
    </Provider>
  );
}

export default App;
