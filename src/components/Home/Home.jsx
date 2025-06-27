import { useNavigate } from "react-router-dom";
import logo from "../../assets/icons/Logo_1.svg";
import patos from "../../assets/paticontructors.png";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/products");
  };

  return (
    <div className="contenedor">
      <img src={logo} />
      <img src={patos} width="640px" />
      <button onClick={handleNavigation} className="home-btn">
        Ver Productos!
      </button>
    </div>
  );
};

export default Home;
