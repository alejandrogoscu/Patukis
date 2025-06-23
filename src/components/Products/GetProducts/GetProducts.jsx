import { useContext, useEffect } from "react";
import { ProductContext } from "../../../context/ProductContext/ProductState";

const Products = () => {
  const { products, getProducts } = useContext(ProductContext);
  useEffect(() => {
    getProducts();
  }, []);
  const renderProducts = products.map((product) => {
    return (
      <div key={product._id} className="crd-prod-container">
        <span> {product.name}</span>
        <img src={product.image} />
      </div>
    );
  });
  return (
    <>
      <h3>Productos</h3>
      {renderProducts}
    </>
  );
};

export default Products;
