🦆 Patukis E-commerce Frontend
Este es el frontend de una aplicación de e-commerce construida con React, diseñada para vender productos "Patukis" (patos de goma personalizados). La aplicación permite a los usuarios explorar productos, ver detalles individuales, añadir artículos al carrito, gestionar un perfil de usuario básico y, lo más importante, dejar reseñas para los productos.

🚀 Características Principales
Listado de Productos: Visualiza todos los "Patukis" disponibles en la tienda.

Detalles del Producto: Accede a una página dedicada para cada producto con información detallada, precio y opciones de compra.

Gestión de Carrito: Añade, elimina y gestiona productos en tu carrito de compras.

Autenticación de Usuario: Funcionalidad básica de registro, inicio de sesión y gestión de perfil.

Sistema de Reseñas:

Los usuarios pueden ver el formulario de reseña en la página de detalles del producto, incluso si no están logueados.

Para enviar una reseña, se requiere que el usuario inicie sesión. Si un usuario no logueado intenta enviar, se le avisará y se le redirigirá a la página de login.

Las reseñas enviadas se añaden dinámicamente a la lista de reseñas del producto sin necesidad de recargar la página.

Visualización de reseñas existentes para cada producto.

Diseño Responsivo: Adaptación de la interfaz de usuario para diferentes tamaños de pantalla.

🛠️ Tecnologías Utilizadas
React.js: Biblioteca principal para la construcción de la interfaz de usuario.

React Router DOM: Para la navegación y el manejo de rutas en la aplicación.

Axios: Cliente HTTP para realizar peticiones a la API.

Ant Design (antd): Biblioteca de componentes UI para una interfaz de usuario consistente y atractiva.

Sass (SCSS): Preprocesador CSS para estilos más organizados y mantenibles.

Context API de React: Para la gestión de estados globales (productos, carrito, usuario).

📂 Estructura del Proyecto
Patukis/
├── src/
│   ├── components/
│   │   ├── Products/
│   │   │   ├── GetOneProduct/      // Componente para ver un producto individual
│   │   │   │   └── GetOneProduct.jsx
│   │   │   │   └── getoneproduct.css
│   │   │   ├── GetProducts/        // Componente para listar todos los productos
│   │   │   │   └── GetProducts.jsx
│   │   │   └── Cart/               // Componente del carrito de compras
│   │   │   │   └── Cart.jsx
│   │   │   └── ...
│   │   ├── Review/                 // Componente del formulario de reseñas
│   │   │   ├── Review.jsx
│   │   │   └── Review.scss
│   │   ├── User/                   // Componentes de usuario (registro, perfil, etc.)
│   │   │   ├── RegisterForm/
│   │   │   ├── RegisterConfirmation/
│   │   │   └── Profile/
│   │   ├── Responsive/             // Componente para la responsividad
│   │   │   └── Responsive.jsx
│   │   ├── Home/                   // Componente de la página de inicio
│   │   │   └── Home.jsx
│   │   └── Blob/                   // Componente SVG del Blob
│   │       └── Blob.jsx
│   ├── context/
│   │   ├── ProductContext/         // Contexto y reducer para productos y carrito
│   │   │   ├── ProductState.jsx
│   │   │   └── ProductReducer.js
│   │   └── UserContext/            // Contexto y reducer para la autenticación de usuario
│   │       ├── UserState.jsx       // (Originalmente UserProvider.jsx)
│   │       └── UserReducer.js
│   ├── App.jsx                     // Componente raíz de la aplicación y configuración de rutas
│   ├── main.jsx                    // Punto de entrada de React
│   └── index.css                   // Estilos globales
└── package.json

🌐 API Backend
Esta aplicación frontend interactúa con una API backend desplegada en Render:

URL Base de la API de Productos: https://patukisapi.onrender.com/products

URL Base de la API de Reseñas: https://patukisapi.onrender.com/api/v1/reviews

URL Base de la API de Autenticación/Usuarios: https://patukisapi.onrender.com/ (para /users y /auth/login)

Asegúrate de que esta API esté funcionando y sea accesible para que la aplicación funcione correctamente.

🚀 Instalación y Ejecución Local
Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

Clonar el repositorio:

git clone <URL_DEL_REPOSITORIO>
cd Patukis

Instalar dependencias:

npm install

Asegúrate de tener instaladas las siguientes dependencias si no lo están:

npm install react react-dom react-router-dom axios antd sass

Iniciar la aplicación:

npm run dev

Esto iniciará el servidor de desarrollo y abrirá la aplicación en tu navegador (generalmente en http://localhost:5173 o similar).

💡 Uso
Navegación:

Desde la página principal o la lista de productos (/products), haz clic en "Ver detalles" para ir a la página de un producto individual.

Formulario de Reseñas:

En la página de detalles del producto, verás el formulario "Deja tu Reseña".

Puedes escribir tu comentario.

Si no estás logueado y haces clic en "Enviar Reseña":

Aparecerá un mensaje: "Tienes que iniciar sesión para poder crear reseña."

Serás redirigido a la página de login (/login).

Si estás logueado y envías la reseña:

La reseña se enviará a la API.

Si es exitosa, verás un mensaje de éxito.

La nueva reseña aparecerá inmediatamente en la lista de reseñas (si hay reseñas existentes y la API las devuelve con la información del usuario).

Lista de Reseñas:

Debajo del formulario, verás la sección "Reseñas de Clientes" donde se muestran las reseñas existentes del producto, obtenidas de la API.
