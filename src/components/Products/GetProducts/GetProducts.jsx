import { useContext, useEffect } from 'react';
import { ProductContext } from '../../../context/ProductContext/ProductState';
import './getProducts.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext/UserState';
import AdminProducts from '../AdminProducts/AdminProducts';

const GetProducts = () => {
  const { products, getProducts, addToCart } = useContext(ProductContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    getProducts();
  }, []);

  if (user?.role === 'mamapato') {
    return (
      <>
        <AdminProducts />
      </>
    );
  }

  return (
    <>
      <div className="products__container">
        <h1 className="products__title">Nuestros Patitos</h1>
        <div className="filters-container"></div>
        <main className="products-crds">
          {products.map((product) => (
            <div className="card" key={product._id}>
              <div className="card-prod-img-cont">
                {product.image ? (
                  <img
                    src={
                      product.image.startsWith('http')
                        ? product.image
                        : `https://patukisapi.onrender.com/${product.image}`
                    }
                    alt={product.name}
                    className="img-patitos"
                  />
                ) : null}
              </div>
              <div className="prod-info">
                <p className="card-title">{product.name}</p>
                <p className="card-des">€{product.price.toFixed(2)}</p>
                <div className="card__btn--container">
                  <Link to={`/products/${product._id}`}>
                    <button className="btn__show">Ver detalles</button>
                  </Link>
                  <button className="btn__buy" onClick={() => addToCart(product)}>
                    Añadir al carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </>
  );
};

export default GetProducts;
