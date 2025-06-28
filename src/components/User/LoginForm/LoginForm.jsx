import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext/UserState';
import './loginForm.css';

const LoginForm = () => {
  const initialValue = {
    email: '',
    password: '',
  };

  const navigate = useNavigate();
  const [FormData, setFormData] = useState(initialValue);
  const [success, setSuccess] = useState(false);
  const { login } = useContext(UserContext);

  const clearState = () => {
    setFormData(initialValue);
  };

  const handleInputChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const wasSuccesful = await login(FormData);
    if (wasSuccesful) {
      setSuccess(true);
      clearState();
    }
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [success, navigate]);

  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login__container">
      <h2 className="login__title">Iniciar Sesión</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <label className="login__label" htmlFor="email">
          Correo Electrónico
          <input
            className="login__input"
            type="email"
            name="email"
            id="email"
            value={FormData.email}
            onChange={handleInputChange}
            autoComplete="email"
            required
          />
        </label>

        <label className="login__label" htmlFor="password">
          Contraseña
          <input
            className="login__input"
            type="password"
            name="password"
            id="password"
            value={FormData.password}
            onChange={handleInputChange}
            autoComplete="password"
            required
          />
        </label>

        <button className="login__btn" type="submit">
          Iniciar Sesión
        </button>
      </form>

      <div className="login__reg--container">
        <p className="login__reg--text">¿Eres nueva/o en Patukis? </p>
        <button className="login__reg--btn" onClick={goToRegister}>
          Comenzar
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
