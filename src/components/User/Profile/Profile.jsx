import { useContext, useEffect } from 'react';
import { UserContext } from '../../../context/UserContext/UserState';
import './profile.css';
import avatar from '../../../assets/patito-avatar.svg';

export const Profile = () => {
  const { user, getUserProfile } = useContext(UserContext);

  useEffect(() => {
    getUserProfile();
  }, []);

  if (!user) return <p className="profile__msgerror">No se encontraron datos del usuario.</p>;

  return (
    <div className="profile__container">
      <h2 className="profile__title">Perfil de Usuario</h2>

      <div className="profile__info--container">
        <section className="profile__info">
          <div className="profile__img--container">
            <img src={avatar} alt="" className="profile__img"></img>
          </div>
          <div className="profile__text--container">
            <p className="profile__name">{user.name}</p>

            <p className="profile__lastname">{user.last_name}</p>

            <p className="profile__email">{user.email}</p>

            <p className="profile__address">{user.adress}</p>
          </div>
        </section>
        <section className="profile__whistlist">
          <h3 className="profile__whistlist--title">Lista de Deseos</h3>
          {user.wishlist && user.wishlist.length > 0 ? (
            <ul className="profile__whistlist--list">
              {user.wishlist.map((item) => (
                <li className="profile__whistlist--item" key={item._id}>
                  <img className="profile__whistlist--image" src={item.image} />
                  {item.name} - €{item.price.toFixed(2)}
                </li>
              ))}
            </ul>
          ) : (
            <p className="profile__whistlist--msg">La lista de deseos esta vacia</p>
          )}
        </section>
        {/* <section className="profile__orders">
          <h3 className="profile__orders--title">Pedidos Realizados</h3>
          {user.orders && user.orders.length > 0 ? (
            <ul className="profile__orders--list">
              {user.orders.map((item) => (
                <li className="profile__orders--item" key={item}>
                  <ul className="profile__orders--prodlist">
                    {item.products.map((producto) => (
                      <li className="profile__orders--proditem" key={producto._id}>
                        <img className="profile__orders--prodimg" src={producto.image} /> -{producto.name} -{' '}
                        {producto.price.toFixed(2)} €
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          ) : (
            <p className="profile__orders--msg">La lista de pedidos está vacía</p>
          )}
        </section> */}
      </div>
    </div>
  );
};
