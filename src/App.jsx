import logo from './assets/Logo_1.svg';
import patos from './assets/paticontructors.png';
import './App.css';

function App() {
  return (
    <div className="contenedor">
      <img src={logo} />
      <img src={patos} width="640px" />
      <h2 className="text">¡Próximamente!</h2>
    </div>
  );
}

export default App;
