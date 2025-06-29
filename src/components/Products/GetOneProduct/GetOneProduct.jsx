import { useContext, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../../context/ProductContext/ProductState';
import { UserContext } from '../../../context/UserContext/UserState';
import './getOneProduct.css';
import BlobSVG from '../Blob/Blob';

const GetOneProduct = () => {
  const { _id } = useParams();

  const { getOneProduct, product, addToCart } = useContext(ProductContext);
  const { addToWishList, removeFromWishList, wishlist } = useContext(UserContext);

  useEffect(() => {
    getOneProduct(_id);
  }, [_id]);

  const isLiked = useMemo(() => {
    if (!product) return false;
    return wishlist.some((item) => item._id === product._id);
  }, [wishlist, product]);

  const toggleLike = async () => {
    if (!isLiked) {
      await addToWishList(product._id);
    } else {
      await removeFromWishList(product._id);
    }
  };

  if (!product) return <p>Cargando producto...</p>;

  return (
    <div className="main-container">
      <div className="img-patito-container">
        <img
          src={product.image.startsWith('http') ? product.image : `https://patukisapi.onrender.com/${product.image}`}
          alt={product.name}
          className="img-patito"
        />
        <BlobSVG className="blob" />
      </div>
      <div className="product__info--container">
        <div className="btns-container">
          <button onClick={toggleLike} className="like-button">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: `"FILL" ${isLiked ? 1 : 0}` }}>
              favorite
            </span>
          </button>
          <button className="buy-button" onClick={() => addToCart(product)}>
            Añadir al carrito
          </button>
        </div>
        <div className="prod-info">
          <h1>{product.name}</h1>
          <h2 className="show__product--price">€{product.price.toFixed(2)}</h2>
          <p className="show__product--text">{product.description}</p>
        </div>
        {/* <div>
          <h3>Reseñas</h3>
          <div className="review-container"></div>
        </div> */}
      </div>
    </div>
  );
};

export default GetOneProduct;
