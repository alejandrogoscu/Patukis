import { useContext, useEffect } from "react";
import { ProductContext } from "../../../context/ProductContext/ProductState";
import "./getProducts.css";
import { useNavigate } from "react-router-dom";

const GetProducts = () => {
  const { products, getProducts } = useContext(ProductContext);

  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h1>Productos</h1>
      <main className="products-crds">
        {products.map((product) => (
          <div className="card" key={product._id}>
            <div className="card-prod-img-cont">
              <img src={product.image} alt={product.name} className="img-patitos" />
            </div>
            <div className="prod-info">
              <p className="card-title"> {product.name}</p>
              <p className="card-des">€{product.price.toFixed(2)}</p>
              <button onClick={() => navigate(`/products/${product._id}`)}>Ver detalles</button>
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export default GetProducts;
