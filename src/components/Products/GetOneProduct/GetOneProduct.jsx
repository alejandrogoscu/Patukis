import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../../context/ProductContext/ProductState";
// al añadir reseñas 
import Review from "../../Review/Review"; // O '../Review/Review' si no usas la extensión .jsx
import axios from "axios"; // Necesario para hacer las peticiones GET a las reseñas
import { message } from 'antd'; // Para mostrar notificaciones de Ant Design
import { UserContext } from "../../../context/UserContext/UserState";



import "./getOneProduct.css";
import { Link } from "react-router-dom";
import BlobSVG from "../Blob/Blob";

const REVIEWS_API_BASE_URL = 'https://patukisapi.onrender.com/api/v1'; //añadido para reviews

const GetOneProduct = () => {
  const { _id } = useParams();

  const { getOneProduct, product, addToCart } = useContext(ProductContext);
   const { user } = useContext(UserContext);

  const [liked, setLiked] = useState(false);
//añadido para reviews
  const currentProductId = product ? product._id : _id;
  const currentUserId = user ? user._id : null;
  const isUserAuthenticated = !!user; // true si user no es null/undefined, false en caso contrario
  console.log('Product from Context:', product); // DEBUG 2
  console.log('currentProductId (calculated):', currentProductId); // DEBUG 4
  console.log('isUserAuthenticated (calculated):', isUserAuthenticated); // DEBUG 5

/*añadido para reviews
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [reviewsError, setReviewsError] = useState(null);
  const [reviews, setReviews] = useState([]); */

  useEffect(() => {
    getOneProduct(_id);
  }, [_id]);
//añadido para reviews
  /*useEffect(() => {
    const fetchReviews = async () => {
      if (currentProductId) { 
        setLoadingReviews(true); 
        try {
          const authToken = localStorage.getItem('authToken'); 
          const headers = authToken ? { Authorization: `Bearer ${authToken}` } : {};

          const res = await axios.get(`${REVIEWS_API_BASE_URL}/products/${currentProductId}/reviews`, { headers });
          
          setReviews(res.data); 
        } catch (err) {
          setReviewsError('No se pudieron cargar las reseñas.');
          console.error('Error fetching reviews:', err);
        } finally {
          setLoadingReviews(false); 
        }
      }
    };
    fetchReviews(); 
  }, [currentProductId]);*/

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
    //setReviews(prevReviews => [newReview, ...prevReviews]);
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

      {/*<div>
        <h3>Reseñas</h3>
        <div className="review-container">
          <Link to={`/products/cart`}>
            <button>Ir al carrito</button>
          </Link>
        </div>
      </div>*/}
    </div>
  );
};

export default GetOneProduct;
