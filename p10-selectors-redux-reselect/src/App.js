import { Provider } from 'react-redux';
import store from './store';
import Cart from './Cart';

const App = () => (
  <Provider store={store}>
    <div>
      <Cart />
    </div>
  </Provider>
);
export default App;
