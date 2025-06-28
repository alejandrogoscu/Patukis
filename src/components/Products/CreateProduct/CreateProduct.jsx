import { useContext, useState } from "react";
import { ProductContext } from "../../../context/ProductContext/ProductState";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const { createProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const priceNumber = parseFloat(data.price);
    if (isNaN(priceNumber)) {
      alert("Introduce un precio válido");
      return;
    }
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", priceNumber);
    formData.append("description", data.description);
    if (data.image) formData.append("image", data.image);

    createProduct(formData, true);
    alert("Patito creado con éxito");
    navigate("/products");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={data.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="price"
        placeholder="Precio"
        value={data.price}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Descripción"
        value={data.description}
        onChange={handleChange}
        required
      />
      <input type="file" name="image" accept="image/*" onChange={handleChange} />
      <button type="submit">Crear Producto</button>
    </form>
  );
};

export default CreateProduct;
