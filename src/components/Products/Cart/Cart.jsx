import { useContext } from 'react';
import { ProductContext } from '../../../context/ProductContext/ProductState';
import { OrderContext } from '../../../context/OrderContext/OrderState';
import { Link } from 'react-router-dom';

import './cart.css';

const Cart = () => {
  const { cart, clearCart, removeFromCart } = useContext(ProductContext);
  const { createOrder } = useContext(OrderContext);

  if (!cart || cart.length === 0) {
    return (
      <>
        <span>Tu carrito está vacío 🛒</span>
        <Link to="/products">
          <button>Volver a productos</button>
        </Link>
      </>
    );
  }

  const createNewOrder = async () => {
    const productIds = cart.map((item) => item._id);
    await createOrder(productIds);
    clearCart();
  };
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-body-container">
      <Link to="/products">
        <button>Volver a productos</button>
      </Link>
      <h1>Estos son tus productos</h1>
      {cart.map((item, i) => (
        <div key={i} className="cart-prod-container">
          <img src={item.image} alt={item.name} className="cart-img-prod" />
          <span>{item.name}</span>
          <span>{item.price.toFixed(2)} €</span>
          <button onClick={() => removeFromCart(item._id)} className="cart-remove-btn">
            X
          </button>
        </div>
      ))}
      <h3>Total compra: {total.toFixed(2)} €</h3>
      <div className="cart-btns-container">
        <button onClick={clearCart}>Vaciar carrito</button>
        <button onClick={createNewOrder}>Confirmar pedido</button>
      </div>
    </div>
  );
};

export default Cart;
