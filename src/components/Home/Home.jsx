import './Home.css';
import video01 from '../../assets/videos/paintervid01.gif';
import video02 from '../../assets/videos/paintervid02.gif';
import video03 from '../../assets/videos/paintervid03.gif';
import video04 from '../../assets/videos/paintervid04.gif';

export const Home = () => {
  return (
    <div className="home__container">
      <div className="home__header">
        <div className="home__header--videocont">
          <img src={video01} className="home__header--video"></img>
        </div>
        <div className="home__header--textcont">
          <h2 className="home__header--title">Patukis</h2>
          <p className="home__header--text">Los Patukis más Patos hechos a mano</p>
        </div>
      </div>
      <div className="home_info">
        <div className="home__info--textcont">
          <h3 className="home__info--title">Más Patukis</h3>
          <p className="home__info--text">Orgullosos de nuestros patitos</p>
        </div>
        <div className="home__info--videocont">
          <img src={video03} className="home__info--video"></img>
        </div>
      </div>
    </div>
  );
};
