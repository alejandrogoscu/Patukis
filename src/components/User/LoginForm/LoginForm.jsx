import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from '../../../context/UserContext/UserContext'; 
import '../RegisterForm/registerForm.css';



const LoginForm = () => {
  const initialValue = {
    email: "",
    password: "",
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
        navigate("/home");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [success, navigate]);

  const goToRegister = () => {
    navigate("/register");
  };

  return (
  <div className="register__container">
    <form className="register__form" onSubmit={handleSubmit}>
      <h2 className="register__title" style={{ alignSelf: "center" }}>
          Iniciar Sesión
      </h2>


      <label className="register__label" htmlFor="email">
        Correo Electrónico
        <input
          className="register__input"
          type="email"
          name="email"
          id="email"
          value={FormData.email}
          onChange={handleInputChange}
          autoComplete="email"
          required
        />
      </label>

      <label className="register__label" htmlFor="password">
        Contraseña
        <input
          className="register__input"
          type="password"
          name="password"
          id="password"
          value={FormData.password}
          onChange={handleInputChange}
          autoComplete="password"
          required
        />
      </label>

      <button type="submit">Iniciar Sesión</button>

      <div>
        <p className="register__input">
          ¿Eres nueva/o en Patukis?{" "}
          <button type="button" onClick={goToRegister}>
            Comenzar →
          </button>
        </p>
      </div>
    </form>
  </div>
);

};

export default LoginForm;
