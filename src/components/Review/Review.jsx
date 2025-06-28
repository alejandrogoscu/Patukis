// src/components/Review/Review.jsx
import React, { useState } from 'react';
import axios from 'axios'; 
import './Review.scss'; 

// Importa los componentes necesarios de Ant Design
// Ya no necesitamos 'Rate', 'Upload' ni 'UploadOutlined'
import { Button, Input, Form, message } from 'antd'; 

const { TextArea } = Input;

// Este componente recibirá el ID del producto y una función de callback
const Review = ({ productId, onReviewSubmitted }) => { 
  // Estado para controlar el envío del formulario
  const [submitting, setSubmitting] = useState(false); 

  // Instancia del formulario de Ant Design
  const [form] = Form.useForm();

  // Función que se llama cuando el formulario se envía y pasa la validación
  const handleSubmit = async (values) => {
    setSubmitting(true); 

    try {
      const authToken = localStorage.getItem('authToken'); 

      if (!productId) {
        message.error('Error: ID de producto no definido. No se puede enviar la reseña.');
        setSubmitting(false);
        return;
      }

      // Creamos un objeto FormData para enviar los datos.
      // ¡El formato multipart/form-data sigue siendo requerido por tu API!
      const formData = new FormData();
      formData.append('product', productId); // Campo 'product' para el ID del producto
      formData.append('content', values.comment); // Campo 'content' para el comentario

      // La API_ENDPOINT es la misma para POST /reviews
      const API_ENDPOINT = `https://patukisapi.onrender.com/api/v1/reviews`; 

      const response = await axios.post(
        API_ENDPOINT,
        formData, // Enviamos FormData 
        {
          headers: {
            'Content-Type': 'multipart/form-data', // MUY IMPORTANTE: Especificar el tipo de contenido
            'Authorization': `Bearer ${authToken}` 
          }
        }
      );

      if (response.status === 201 || response.status === 200) {
        message.success('Reseña enviada con éxito!');
        form.resetFields(); // Limpia los campos del formulario
        if (onReviewSubmitted) {
          onReviewSubmitted(response.data.review); 
        }
      } else {
        message.error("Hubo un problema al enviar la reseña.")
      }

    } catch (error) {
      console.error('Error al enviar la reseña:', error);
   
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="review-form-container">
      <h2>Deja tu Reseña</h2>
      <Form
        form={form} 
        layout="vertical" 
        onFinish={handleSubmit} 
      >
        {/* Campo de Puntuación (Estrellas) ELIMINADO */}

        {/* Campo de Comentario (Área de Texto) */}
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
          >
            Enviar Reseña
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Review;

