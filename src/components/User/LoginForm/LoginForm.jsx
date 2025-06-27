import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from '../../../context/UserContext/UserContext'; 

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
    <div className="login_container">
      <h2 className="login_title">Iniciar Sesión</h2>
      <form className="login_form" onSubmit={handleSubmit}>
        <label className="login_label" htmlFor="email">
          Correo Electrónico
          <input
            className="login_input"
            type="email"
            name="email"
            id="email"
            value={FormData.email}
            onChange={handleInputChange}
            autoComplete="email"
            required
          />
        </label>

        <label className="login_label" htmlFor="password">
          Contraseña
          <input
            className="login_input"
            type="password"
            name="password"
            id="password"
            value={FormData.password}
            onChange={handleInputChange}
            autoComplete="password"
            required
          />
        </label>

        <button className="login_button" type="submit">Iniciar Sesión</button>
      </form>

      <div className="login_register_prompt">
        <p className="login_register_text">
          ¿Eres nueva/o en Patukis?{" "}
          <button className="login_register_button" onClick={goToRegister}>
            Comenzar →
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
