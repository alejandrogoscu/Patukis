import { useContext, useEffect /* useState */ } from "react";
import { ProductContext } from "../../../context/ProductContext/ProductState";
import "./getProducts.css";
import { Link } from "react-router-dom";

const GetProducts = () => {
  const { products, getProducts, addToCart, cart } = useContext(ProductContext);

  /*  const [filters, setFilters] = useState({
    categories: "all",
    minPrice: 0,
  });

  // Filtrar productos
  const filterProducts = (products) => {
    return products.filter((product) => {
      const priceOk = product.price >= filters.minPrice;
      const categoryOk =
        filters.categories === "all" ||
        (Array.isArray(product.categories) && product.categories.includes(filters.categories));
      return priceOk && categoryOk;
    });
  };

  const filteredProducts = filterProducts(products); */
  useEffect(() => {
    getProducts();
  }, []);

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
