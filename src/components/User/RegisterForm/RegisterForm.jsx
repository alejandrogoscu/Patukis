import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext/UserState';
import './registerForm.css';

export const RegisterForm = () => {
  const initialValue = {
    name: '',
    last_name: '',
    email: '',
    password: '',
  };

  const navigate = useNavigate();
  const [data, setData] = useState(initialValue);
  const [success, setSuccess] = useState(false);
  const { register } = useContext(UserContext);

  const clearState = () => {
    setData(initialValue);
  };

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const wasSuccesful = await register(data);

    if (wasSuccesful) {
      setSuccess(true);
      clearState();
    }
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        navigate('/confirmation');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [success, navigate]);

  return (
    <div className="register__container">
      <h2 className="register__title">Registrate</h2>

      <form className="register__form" onSubmit={handleSubmit}>
        <label className="register__label" htmlFor="name">
          Nombre:
          <input
            className="register__input"
            type="text"
            name="name"
            id="name"
            value={data.name}
            onChange={handleInputChange}
            autoComplete="name"
            required
          />
        </label>

        <label className="register__label" htmlFor="lastName">
          Apellido:
          <input
            className="register__input"
            type="text"
            name="last_name"
            id="lastName"
            value={data.last_name}
            onChange={handleInputChange}
            autoComplete="lastName"
            required
          />
        </label>

        <label className="register__label" htmlFor="email">
          Correo Electrónico:
          <input
            className="register__input"
            type="email"
            name="email"
            id="email"
            value={data.email}
            onChange={handleInputChange}
            autoComplete="email"
            required
          />
        </label>

        <label className="register__label" htmlFor="password">
          Contraseña:
          <input
            className="register__input"
            type="password"
            name="password"
            id="password"
            value={data.password}
            onChange={handleInputChange}
            autoComplete="password"
            required
          />
        </label>

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};
