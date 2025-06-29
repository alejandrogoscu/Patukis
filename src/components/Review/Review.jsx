
import React, { useState, useContext } from 'react';
import axios from 'axios';
import './Review.scss'; 
import { Button, Input, Form, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext/UserState'; 

const { TextArea } = Input;


const Review = ({ productId, onReviewSubmitted }) => { 
  const [submitting, setSubmitting] = useState(false); 
  const [form] = Form.useForm();
  const navigate = useNavigate(); 


const { isAuthenticated, token: authToken } = useContext(UserContext);
  console.log('DEBUG Review.jsx: isUserAuthenticated del contexto:', isAuthenticated);
  console.log('DEBUG Review.jsx: authToken del contexto:', authToken);

  const handleSubmit = async (values) => {
   
    if (!isAuthenticated || !authToken) { 
      message.warning('Tienes que iniciar sesión para poder crear una reseña.');
      navigate('/login'); 
      return; 
    }
    
    setSubmitting(true); 

    try {
      if (!productId) {
        message.error('Error: ID de producto no definido. No se puede enviar la reseña.');
        setSubmitting(false);
        return;
      }

      const formData = new FormData();
      formData.append('product', productId); 
      formData.append('content', values.comment); 

    
     
      for (let pair of formData.entries()) {
          console.log(pair[0]+ ': ' + pair[1]); 
      }
      console.log('DEBUG: ProductId a enviar:', productId);
      console.log('DEBUG: Contenido de la reseña a enviar:', values.comment);
      console.log('DEBUG: Auth Token a enviar (de UserContext):', authToken); 


      const API_ENDPOINT = `https://patukisapi.onrender.com/reviews`; 


      const response = await axios.post(
        API_ENDPOINT,
        formData, 
        {
          headers: {
            'Content-Type': 'multipart/form-data', 
            'Authorization': `Bearer ${authToken}` 
          }
        }
      );


      console.log('DEBUG: Axios POST request successful. Status:', response.status, 'Data:', response.data);

      if (response.status === 201 || response.status === 200) {
        message.success('Reseña enviada con éxito!');
        form.resetFields(); 
        if (onReviewSubmitted) {
          console.log('DEBUG: Calling onReviewSubmitted with:', response.data.review); 
          onReviewSubmitted(response.data.review); 
        }
      } else {
        message.error('Hubo un problema al enviar la reseña. Código de estado: ' + response.status);
      }

    } catch (error) {
    
      console.error('DEBUG: Catch block executed due to Axios error.');
      console.error('DEBUG: Error completo al enviar la reseña:', error);
      if (error.response) {
          console.error('DEBUG: Datos del error del servidor (error.response.data):', error.response.data);
          message.error(`Error del servidor: ${error.response.data.message || 'No se pudo enviar la reseña.'}`);
      } else if (error.request) {
          message.error('No se recibió respuesta del servidor. Verifica tu conexión a internet.');
      } else {
          message.error('Error al preparar la solicitud. Por favor, inténtalo de nuevo.');
      }
    } finally {
      setSubmitting(false); 
    }
  };

  return (
    <div className="review-container">
      <h2>Deja tu Reseña</h2>
      <Form
        form={form} 
        layout="vertical" 
        onFinish={handleSubmit} 
      >
        <Form.Item
          name="comment" 
          label="Comentario"
          rules={[{ required: true, message: 'Por favor, escribe tu comentario.', min: 10 }]}
        >
          <TextArea
            rows={4} 
            placeholder="Escribe tu reseña aquí..." 
          />
        </Form.Item>

        <Form.Item>
          <Button 
            type="primary" 
            htmlType="submit" 
            loading={submitting} 
            disabled={submitting || !isAuthenticated} 
          >
            Enviar Reseña
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Review;