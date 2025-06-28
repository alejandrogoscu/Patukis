import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../context/ProductContext/ProductState";
import "./adminproducts.css";

const AdminProducts = () => {
  const { products, getProducts, updateProduct, deleteProduct } = useContext(ProductContext);

  const [editId, setEditId] = useState(null);
  const [updatedData, setUpdatedData] = useState({});

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
      [name]: name === "price" ? parseFloat(value) : value,
    });
  };

  const handleSave = async () => {
    await updateProduct(editId, updatedData);
    await getProducts();
    setEditId(null);
    setUpdatedData({});
  };

  const handleCancel = () => {
    setEditId(null);
    setUpdatedData({});
  };

  const handleDelete = async (_id) => {
    if (confirm("¿Estás muy Patisegur@ de eliminar este producto? 🧨🐥")) {
      await deleteProduct(_id);
      alert("Producto eliminado con éxito 💨");
    }
  };

  return (
    <div>
      <h2>Administrar productos</h2>
      <h3>
        patibienvenid@ a la pantalla de edición, mucho paticuidado con los cambios, los patitos
        están atentos
      </h3>
      <table>
        <thead>
          <tr>
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
                  <input name="name" value={updatedData.name} onChange={handleChange} />
                ) : (
                  product.name
                )}
              </td>
              <td>
                {editId === product._id ? (
                  <input name="price" value={updatedData.price} onChange={handleChange} />
                ) : (
                  product.price.toFixed(2)
                )}
              </td>
              <td>
                {editId === product._id ? (
                  <input
                    name="description"
                    value={updatedData.description}
                    onChange={handleChange}
                  />
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
                    <button onClick={() => handleEdit(product)}>
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                    <button onClick={() => handleDelete(product._id)}>
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
  );
};

export default AdminProducts;
