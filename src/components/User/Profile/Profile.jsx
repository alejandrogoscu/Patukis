import { useContext, useEffect } from 'react';
import { UserContext } from '../../../context/UserContext/UserState';

export const Profile = () => {
  const { user, getUserProfile } = useContext(UserContext);

  useEffect(() => {
    getUserProfile();
  }, []);

  if (!user) return <p>No se encontraron datos del usuario.</p>;

  return (
    <div className="profile__container">
      <h2 className="profile__title">Perfil de Usuario</h2>
      <section className="profile__info">
        <div className="profile__img--container">
          <img src={user.image} alt="" className="profile__img" />
        </div>

        <p className="profile__name">
          Nombre:<strong className="profile__name--strong">{user.name}</strong>
        </p>

        <p className="profile__lastname">
          Apellido:<strong className="profile__lastname--strong">{user.last_name}</strong>
        </p>

        <p className="profile__email">
          Correo Electrónico:<strong className="profile__email--strong">{user.email}</strong>
        </p>

        <p className="profile__address">
          Dirección:<strong className="profile__address--strong">{user.adress}</strong>
        </p>
      </section>

      <section className="profile__whistlist">
        <h3 className="profile__whistlist--title">Lista de Deseos</h3>
        {user.wishlist && user.wishlist.length > 0 ? (
          <ul>
            {user.wishlist.map((item) => (
              <li key={item._id}>
                {item.name} - {item.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>La lista de deseos esta vacia</p>
        )}
      </section>

      <section className="profile__orders">
        <h3 className="profile__orders--title">Pedidos Realizados</h3>
        {user.orders && user.orders.length > 0 ? (
          <ul>
            {user.orders.map((item) => (
              <li key={item}>
                <ul>
                  {item.products.map((producto) => (
                    <li key={producto._id}>
                      {producto.name} - {producto.price} €
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p>La lista de pedidos está vacía</p>
        )}
      </section>
    </div>
  );
};
