import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../../context/ProductContext/ProductState";
// al añadir reseñas 
import Review from "../../Review/Review"; // O '../Review/Review' si no usas la extensión .jsx
import axios from "axios"; // Necesario para hacer las peticiones GET a las reseñas
import { message } from 'antd'; // Para mostrar notificaciones de Ant Design
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
          const authToken = localStorage.getItem('authToken');
          const headers = authToken ? { Authorization: `Bearer ${authToken}` } : {};
 console.log(`DEBUG GetOneProduct.jsx: Intentando axios.get de reseñas a: ${REVIEWS_API_BASE_URL}/reviews`);
        console.log(`DEBUG GetOneProduct.jsx: currentProductId es: ${currentProductId}`);

 const res = await axios.get(`${REVIEWS_API_BASE_URL}/reviews`, { headers });

          
          

         
          const allReviews = res.data || []; 
          const filteredReviews = allReviews.filter(review => review.product === currentProductId);

          setReviews(filteredReviews);
          console.log('DEBUG: Reseñas cargadas (todas):', allReviews); 
          console.log('DEBUG: Reseñas filtradas para este producto:', filteredReviews); 
          setReviewsError('No se pudieron cargar las reseñas.');
          console.error('Error fetching reviews:', err);
          if (err.response) { 
            console.error('Error response data:', err.response.data);
            console.error('Error status:', err.response.status);
          }
        } finally {
          setLoadingReviews(false);
        }
      }
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
      <div className="reviews-list-container"> 
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