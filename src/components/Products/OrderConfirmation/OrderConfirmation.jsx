import { useEffect, useState } from 'react';
import patitoOrder from '../../../assets/patitoOrder.png';
import { useNavigate } from 'react-router-dom';

import './OrderConfirmation.css';

export const OrderConfirmacion = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/profile');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="orderConfirmation__container">
      <h3 className="orderConfirmation__title">¡Pedido realizado!</h3>
      <img className="orderConfirmation__img" src={patitoOrder} alt="Patito de goma lanzando un sobre al aire." />
      <p className="orderConfirmation__text">Nuestros patitos empiezan su despegue</p>
    </div>
  );
};
