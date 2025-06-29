import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../../context/ProductContext/ProductState';
import './adminproducts.css';
import { Link } from 'react-router-dom';

const AdminProducts = () => {
  const { products, getProducts, updateProduct, deleteProduct } = useContext(ProductContext);

  const [editId, setEditId] = useState(null);
  const [updatedData, setUpdatedData] = useState({});
  const token = localStorage.getItem('token') || '';

  useEffect(() => {
    getProducts();
  }, []);

  const handleEdit = (product) => {
    setEditId(product._id);
    setUpdatedData({ ...product });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({
      ...updatedData,
      [name]: value,
    });
  };

  const handleSave = async () => {
    const priceNumber = parseFloat(updatedData.price);

    if (isNaN(priceNumber)) {
      alert('Por favor, introduce un precio válido.');
      return;
    }

    const formData = new FormData();
    formData.append('name', updatedData.name);
    formData.append('price', priceNumber);
    formData.append('description', updatedData.description);

    if (updatedData.image instanceof File) {
      formData.append('image', updatedData.image);
    }

    await updateProduct(editId, formData, true, token);
    await getProducts();
    setEditId(null);
    setUpdatedData({});
  };

  const handleCancel = () => {
    setEditId(null);
    setUpdatedData({});
  };

  const handleDelete = async (_id) => {
    if (confirm('¿Estás muy Patisegur@ de eliminar este producto? 🧨🐥')) {
      await deleteProduct(_id);
      alert('Producto eliminado con éxito 💨');
    }
  };

  return (
    <div className="admin__container">
      <h2 className="admin__title">Administrar productos</h2>
      <h3 className="admin__subtitle">
        Patibienvenid@ a la pantalla de edición, mucho paticuidado con los cambios, los patitos están atentos
      </h3>
      <Link to={'/products/newproduct'}>
        <button className="admin__btnNew">Crear un nuevo producto</button>
      </Link>
      <div className="admin__table-container">
        <table className="admin__table">
          <thead>
            <tr>
              <th>Imágen</th>
              <th>Nombre</th>
              <th>Precio (€) </th>
              <th>Descripción</th>
              <th className="icons-column"></th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr key={product._id}>
                <td>
                  {editId === product._id ? (
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      onChange={(e) => setUpdatedData({ ...updatedData, image: e.target.files[0] })}
                    />
                  ) : product.image ? (
                    <img
                      src={
                        product.image.startsWith('http')
                          ? product.image
                          : `https://patukisapi.onrender.com/${product.image}`
                      }
                      alt={product.name}
                      style={{ width: '60px', height: 'auto' }}
                    />
                  ) : (
                    'Sin imagen'
                  )}
                </td>
                <td>
                  {editId === product._id ? (
                    <input name="name" value={updatedData.name} onChange={handleChange} />
                  ) : (
                    product.name
                  )}
                </td>
                <td>
                  {editId === product._id ? (
                    <input name="price" value={updatedData.price ?? ''} onChange={handleChange} />
                  ) : (
                    product.price.toFixed(2)
                  )}
                </td>
                <td>
                  {editId === product._id ? (
                    <input name="description" value={updatedData.description} onChange={handleChange} />
                  ) : (
                    product.description
                  )}
                </td>
                <td className="icons-column">
                  {editId === product._id ? (
                    <>
                      <button onClick={handleSave}>
                        <span className="material-symbols-outlined">Save</span>
                      </button>
                      <button onClick={handleCancel}>
                        <span className="material-symbols-outlined">edit_off</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="admin__btnEdit" onClick={() => handleEdit(product)}>
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button className="admin__btndelete" onClick={() => handleDelete(product._id)}>
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProducts;
