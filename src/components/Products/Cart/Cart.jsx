import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../../context/ProductContext/ProductState";
import { OrderContext } from "../../../context/OrderContext/OrderState";
import { UserContext } from "../../../context/UserContext/UserState";
import { Link, useNavigate } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const { cart, clearCart, removeFromCart } = useContext(ProductContext);
  const { createOrder } = useContext(OrderContext);
  const { isAuthenticated, token } = useContext(UserContext);
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        navigate("/OrderConfirmation");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [success, navigate]);

  if (!cart || cart.length === 0) {
    return (
      <div className="cart__empty-container">
        <h1>Este es tu carrito!</h1>
        <h3 className="cart__empty-text">Tu carrito está vacío</h3>
        <Link to="/products">
          <button className="cart__empty-btnreturn">Volver a productos</button>
        </Link>
      </div>
    );
  }

  const createNewOrder = async () => {
    if (!isAuthenticated || !token) {
      navigate("/login", { state: { from: "/cart" } });
      return;
    }
    try {
      const productIds = cart.map((item) => item._id);
      await createOrder(productIds);
      setSuccess(true);
      setTimeout(() => {
        clearCart();
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-body-container">
      <h1>Este es tu carrito!</h1>
      <Link to="/products">
        <button className="cart__btn-return">Volver a productos</button>
      </Link>
      <h1 className="cart__title">Tus productos</h1>
      <div className="cart__resume-container">
        {cart.map((item, i) => (
          <div key={i} className="cart__prod-container">
            <img src={item.image} alt={item.name} className="cart__img-prod" />
            <span className="cart__name-prod">{item.name}</span>
            <span>{item.price.toFixed(2)} €</span>
            <button className="cart__btn-remove" onClick={() => removeFromCart(item._id)}>
              X
            </button>
          </div>
        ))}
        <h3>Total compra: {total.toFixed(2)} €</h3>
        <div className="cart-btns-container">
          <button className="cart__btn-empty" onClick={clearCart}>
            Vaciar carrito
          </button>
          <button className="cart__btn-buy" onClick={createNewOrder}>
            Confirmar pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
