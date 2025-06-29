import GridMotion from "../ReactBits/GridMotion/GridMotion";
import "./home.css";
import logo from "../../assets/icons/Logo_1.svg";

const items = [
  "https://i.imgur.com/TQ6DOaa.png",
  "personalidad que impacta",
  "https://i.imgur.com/E1qVp21.png",
  "Colores que resaltan",
  "https://i.imgur.com/Iw7p8cZ.png",
  "Estilo 100% custom made",
  "https://i.imgur.com/OsztreL.png",
  "Accesorios que molan",
  "https://i.imgur.com/JkHBb9I.png",
  "personalidad que impacta",
  "https://i.imgur.com/pGSMhEm.png",
  "Colores que resaltan",
  "https://i.imgur.com/WdNbJZG.png",
  "Estilo 100% custom made",
  "https://i.imgur.com/gEK1QEE.png",
  "Accesorios que molan",
  "https://i.imgur.com/PDXdAWp.png",
  "Accesorios que molan",
  "https://i.imgur.com/TQ6DOaa.png",
  "personalidad que impacta",
  "https://i.imgur.com/JkHBb9I.png",
  "Colores que resaltan",
  "https://i.imgur.com/pGSMhEm.png",
  "Estilo 100% custom made",
  "https://i.imgur.com/WdNbJZG.png",
  "Accesorios que molan",
  "https://i.imgur.com/PDXdAWp.png",
  "personalidad que impacta",
  "https://i.imgur.com/pGSMhEm.png",
  "Colores que resaltan",
  "https://i.imgur.com/Fg0lYBY.png",
  "Estilo 100% custom made",
  "https://i.imgur.com/TQ6DOaa.png",
  "Accesorios que molan",
  "https://i.imgur.com/pGSMhEm.png",
];

export const Home = () => {
  return (
    <div className="full-view">
      <div className="logo-container">
        <img src={logo} className="logo-landing" alt="logo patukis" />
      </div>
      <div className="grid-container">
        <GridMotion items={items} gradientColor="orange" />
      </div>
    </div>
  );
};
