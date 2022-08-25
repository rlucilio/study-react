import { connect } from 'react-redux';
import { createSelector } from 'reselect';

const Cart = ({ cart, total, addProduct, setShipping }) => (
  <div>
    <h1>Carrinho</h1>
    <p>
      Items: <strong>{cart.items.length}</strong>
    </p>
    <p>
      Frete: <strong>{cart.shipping_value}</strong>
    </p>
    <p>
      Total: <strong>{total}</strong>
    </p>

    <button onClick={addProduct}>Adicionar produto</button>
    <button onClick={setShipping}>Calcular frete</button>
  </div>
);

const calculateTotal = createSelector(
  (state) => state.items,
  (items) => {
    console.log('Calculou');
    return items?.reduce((subTotal, item) => (subTotal += item.price), 0);
  }
);

const mapStateToProps = (state) => ({
  cart: state,
  total: calculateTotal(state),
});

const mapDispatchToProps = (dispatch) => ({
  addProduct: () => dispatch({ type: 'ADD' }),
  setShipping: () => dispatch({ type: 'SET_SHIPPING' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
