import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../../context/ProductContext/ProductState";
// al añadir reseñas 
import Review from "../../Review/Review"; 
import axios from "axios"; 
import { message } from 'antd';
import { UserContext } from "../../../context/UserContext/UserState";


import "./getOneProduct.css";

import BlobSVG from "../Blob/Blob";

const REVIEWS_API_BASE_URL = 'https://patukisapi.onrender.com'; //añadido para reviews

const GetOneProduct = () => {
  const { _id } = useParams();

  const { getOneProduct, product, addToCart } = useContext(ProductContext);
   const { user } = useContext(UserContext);

  const [liked, setLiked] = useState(false);
//añadido para reviews
  const currentProductId = product ? product._id : _id;
  const currentUserId = user ? user._id : null;
  const isUserAuthenticated = !!user; 
  console.log('Product from Context:', product); 
  console.log('currentProductId (calculated):', currentProductId);
  console.log('isUserAuthenticated (calculated):', isUserAuthenticated); 

//añadido para reviews
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [reviewsError, setReviewsError] = useState(null);
  const [reviews, setReviews] = useState([]); 
  

  useEffect(() => {
    getOneProduct(_id);
  }, [_id]);

  //añadido para reviews
  useEffect(() => {
    const fetchReviews = async () => {
      if (currentProductId) {
        setLoadingReviews(true);
         try {
        const authToken = localStorage.getItem('token');
        const headers = authToken ? { Authorization: `Bearer ${authToken}` } : {};

        console.log(`DEBUG: Attempting to fetch reviews from: ${REVIEWS_API_BASE_URL}/reviews`);
        console.log(`DEBUG: Filtering reviews for product ID: ${currentProductId}`);

        const res = await axios.get(`${REVIEWS_API_BASE_URL}/reviews`, { headers });
        console.log('DEBUG: Full API response for reviews:', res.data); 

        const allReviews = Array.isArray(res.data) ? res.data : []; 
        console.log('DEBUG: All reviews received (after array check):', allReviews);

        
        const filteredReviews = allReviews.filter(review => {
          if (review.product && typeof review.product === 'object' && review.product._id) {
            return review.product._id === currentProductId;
          }
          return review.product === currentProductId; 
        });

        setReviews(filteredReviews); 
        console.log('DEBUG: Filtered reviews for this product:', filteredReviews); 

      } catch (error) { 
        setReviewsError('No se pudieron cargar las reseñas.'); 
        console.error('Error fetching reviews:', error); 
        if (error.response) { 
          console.error('Error response data:', error.response.data);
          console.error('Error status:', error.response.status);
        }
      } finally {
        setLoadingReviews(false); 
      }
    };

    };
    fetchReviews();
  }, [currentProductId]); 

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/products");
  };

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };
//añadido review
   const handleReviewSubmitted = (newReview) => {
    console.log('Nueva reseña enviada y recibida en GetOneProduct:', newReview);
    setReviews(prevReviews => [newReview, ...prevReviews]);
    message.success('Reseña publicada con éxito y añadida a la lista.'); 
  };

  if (!product) return <p>Cargando producto...</p>;

  return (
    <div className="main-container">
      <button onClick={handleNavigation}>Volver a todos productos</button>
      <div className="img-patito-container">
        <img src={product.image} alt={product.name} className="img-patito" />
        <BlobSVG className="blob" />
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
<div className="review-section" >
       
        <Review 
          productId={currentProductId} 
          isUserAuthenticated={isUserAuthenticated} 
          onReviewSubmitted={handleReviewSubmitted} 
        />
      </div>
      <div className="reviews-container"> 
        <h2>Reseñas de Clientes</h2> 
        {loadingReviews ? (
          <p>Cargando reseñas...</p>
        ) : reviewsError ? (
          <p>{reviewsError}</p>
        ) : reviews.length === 0 ? (
          <p>No hay reseñas para este producto todavía. ¡Sé el primero en dejar una!</p>
        ) : (
          <ul className="reviews-list">
            {reviews.map(review => (
              <li key={review._id} className="review-item">
                <div className="review-header">
                  <span className="review-author">
                    Por: {review.user && typeof review.user === 'object' ? review.user.username : 'Usuario Desconocido'}
                  </span>
                </div>
                <p className="review-comment">{review.content}</p>
             
                <span className="review-date">
                  {review.createdAt ? new Date(review.createdAt).toLocaleDateString() : ''}
                </span>
              </li>
            ))}
          </ul>
          
        )}
      </div>
    </div>
  );
};

export default GetOneProduct;