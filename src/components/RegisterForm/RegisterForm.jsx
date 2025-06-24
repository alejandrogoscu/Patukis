import { useState } from 'react';

export const RegisterForm = () => {
  const initialValue = {
    name: '',
    last_name: '',
    email: '',
    password: '',
  };

  const [data, setData] = useState(initialValue);

  const clearState = () => {
    setData(initialValue);
  };

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('sending data...' + data.name + ' ' + data.last_name + ' ' + data.email + ' ' + data.password);
    clearState();
  };

  return (
    <>
      <h2>Registrate</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={data.name}
          onChange={handleInputChange}
          autoComplete="name"
          required
        />

        <label htmlFor="lastName">Apellido:</label>
        <input
          type="text"
          name="last_name"
          id="lastName"
          value={data.last_name}
          onChange={handleInputChange}
          autoComplete="lastName"
          required
        />

        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={data.email}
          onChange={handleInputChange}
          autoComplete="email"
          required
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={data.password}
          onChange={handleInputChange}
          autoComplete="password"
          required
        />

        <button type="submit">Registrarse</button>
      </form>
    </>
  );
};
