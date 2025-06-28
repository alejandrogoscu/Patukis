import vid01 from '../../assets/videos/paintervid01.gif';
import vid02 from '../../assets/videos/paintervid02.gif';
import vid03 from '../../assets/videos/paintervid03.gif';
import logo from '../../assets/icons/Logo_1.svg';
import './home.css';

export const Home = () => {
  return (
    <div className="home__container">
      <div className="home__videocontainer">
        <img className="home__video1" src={vid01} />
        <img className="home__video2" src={vid02} />
        <img className="home__video3" src={vid03} />
      </div>

      <div className="home__logocontainer">
        <img className="home__logo" src={logo} />
        <h2 className="home__tile">patitos con personalidad</h2>
      </div>
    </div>
  );
};
