import { useContext, useState } from 'react';
import { ProductContext } from '../../../context/ProductContext/ProductState';
import { useNavigate } from 'react-router-dom';
import './createProduct.css';

const CreateProduct = () => {
  const { createProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: '',
    price: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const priceNumber = parseFloat(data.price);
    if (isNaN(priceNumber)) {
      alert('Introduce un precio válido');
      return;
    }
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('price', priceNumber);
    formData.append('description', data.description);
    if (data.image) formData.append('image', data.image);

    createProduct(formData, true);
    alert('Patito creado con éxito');
    navigate('/products');
  };
  return (
    <div className="create__container">
      <form className="create__form" onSubmit={handleSubmit}>
        <label className="create__label">
          Nombre:
          <input
            className="create__input"
            type="text"
            name="name"
            placeholder="Nombre"
            value={data.name}
            onChange={handleChange}
            required
          />
        </label>
        <label className="create__label">
          Precio:
          <input
            className="create__input"
            type="text"
            name="price"
            placeholder="Precio"
            value={data.price}
            onChange={handleChange}
            required
          />
        </label>
        <label className="create__label">
          Descripción:
          <input
            className="create__input"
            type="text"
            name="description"
            placeholder="Descripción"
            value={data.description}
            onChange={handleChange}
            required
          />
        </label>
        <label className="create__label">
          Imagen:
          <input className="create__input" type="file" name="image" accept="image/*" onChange={handleChange} />
        </label>
        <button className="create__btn" type="submit">
          Crear Producto
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
