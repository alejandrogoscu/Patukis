import { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext/ProductState";
import { Link } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductContext);
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

  return (
    <div>
      {cart.map((item, i) => (
        <div key={i}>
          <img src={item.image} alt={item.name} />
          <span>{item.name}</span>
          <span>{item.price.toFixed(2)} €</span>
        </div>
      ))}
      <button onClick={clearCart}>Vaciar carrito</button>
      <button onClick={createNewOrder}>Checkout</button>
      <Link to="/products">
        <button>Volver a productos</button>
      </Link>
    </div>
  );
};

export default Cart;
