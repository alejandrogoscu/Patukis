import { useContext, useEffect } from "react";
import { ProductContext } from "../../../context/ProductContext/ProductState";
import "./getProducts.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/UserContext/UserState";
import AdminProducts from "../AdminProducts/AdminProducts";

const GetProducts = () => {
  const { products, getProducts, addToCart } = useContext(ProductContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    getProducts();
  }, []);

  if (user?.role === "mamapato") {
    return (
      <>
        <AdminProducts />
      </>
    );
  }

  return (
    <>
      <h1>Productos</h1>
      <Link to="/products/cart">
        <button>Ir al Carrito</button>
      </Link>
      <div className="filters-container"></div>
      <main className="products-crds">
        {products.map((product) => (
          <div className="card" key={product._id}>
            <div className="card-prod-img-cont">
              <img src={product.image} alt={product.name} className="img-patitos" />
            </div>
            <div className="prod-info">
              <p className="card-title">{product.name}</p>
              <p className="card-des">€{product.price.toFixed(2)}</p>
              <Link to={`/products/${product._id}`}>
                <button>Ver detalles</button>
              </Link>
              <button onClick={() => addToCart(product)}>Añadir al carrito</button>
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export default GetProducts;
