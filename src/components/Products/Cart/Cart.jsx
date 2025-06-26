import { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext/ProductState";
import { Link } from "react-router-dom";
import axios from "axios";
import "./cart.css";

const Cart = () => {
  const { cart, clearCart, removeFromCart } = useContext(ProductContext);
  const API_URL = "https://patukisapi.onrender.com/orders";

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
    // Extraemos los _id de los productos del carrito
    const productIds = cart.map((item) => item._id);

    try {
      await axios.post(`${API_URL}`, { productIds });
      alert("¡Pedido creado con éxito!");
      clearCart();
    } catch (error) {
      console.error("Error al crear el pedido:", error);
    }
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
