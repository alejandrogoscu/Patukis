import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../../context/ProductContext/ProductState";
import "./getOneProduct.css";
import { Link } from "react-router-dom";

const GetOneProduct = () => {
  const { _id } = useParams();

  const { getOneProduct, product, cart, addToCart } = useContext(ProductContext);

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    getOneProduct(_id);
  }, [_id]);

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/products");
  };

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  if (!product) return <p>Cargando producto...</p>;

  return (
    <div className="main-container">
      <button onClick={handleNavigation}>Volver a todos productos</button>
      <div className="img-patito-container">
        <img src={product.image} alt={product.name} className="img-patito" />
      </div>
      <div className="btns-container">
        <button onClick={toggleLike} className="like-button">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: `"FILL" ${liked ? 1 : 0}` }}
          >
            favorite
          </span>
        </button>
        <button onClick={() => addToCart(product)}>Añadir al carrito</button>
      </div>
      <div className="prod-info">
        <h1>{product.name}</h1>
        <h2>€{product.price.toFixed(2)}</h2>
        <p>{product.description}</p>
      </div>
      <div>
        <h3>Reseñas</h3>
        <div className="review-container">
          <Link to={`/products/cart`}>
            <button>Ir al carrito</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetOneProduct;
