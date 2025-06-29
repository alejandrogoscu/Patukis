# 🦆 Patukis E-commerce Frontend
Este es el frontend de una aplicación de e-commerce construida con React, diseñada para la venta de productos "Patukis" (patos de goma personalizados).

## 🎯 Objetivos del Proyecto
El objetivo principal de este proyecto es desarrollar un frontend robusto y responsivo capaz de cumplir con las siguientes funcionalidades esenciales para una tienda online:
- Registro de Usuarios: Permitir a nuevos usuarios crear una cuenta en la plataforma.

- Inicio de Sesión de Usuarios: Autenticar a los usuarios existentes para acceder a funcionalidades personalizadas.

- Visualización de Productos: Mostrar un catálogo de productos disponibles y sus descripciones, así como permitir la visualización y creación de reseñas.

- Gestión del Carrito de Compra: Permite la gestión de productos en un carrito virtual, incluyendo agregar y quitar productos.

- Creación de Pedidos: Facilitar el proceso para que los usuarios puedan realizar pedidos de los productos en su carrito.

- Cierre de Sesión (Logout): Finalizar la sesión activa del usuario de forma segura.

## 🚀 Características Implementadas

Actualmente, el frontend de Patukis E-commerce incluye las siguientes funcionalidades clave:

#### Registro de Usuarios.

- Inicio de Sesión de Usuarios.

- Visualización de Productos:

- Listado general de todos los productos disponibles.

- Páginas de detalle para cada producto individual, donde se utiliza el hook useParams para obtener el ID del producto de la URL (/products/:_id).

#### Gestión de Carrito de Compra:

- Añadir productos al carrito desde la vista de lista o detalle.

- Eliminar productos del carrito.

- Un badge numérico en el icono del carrito en la barra de navegación que muestra la cantidad de ítems en el carrito, proporcionando una retroalimentación visual instantánea al usuario.

#### Gestión de Perfil:

- Vista del perfil con los datos del usuario logueado.

- Cierre de Sesión (Logout).

#### Sistema de Reseñas de Productos:

- El formulario de reseña es visible en la página de detalles del producto, independientemente del estado de autenticación del usuario.

- Requisito de Autenticación para Envío: Si un usuario no logueado intenta enviar una reseña, se le notificará y se le redirigirá a la página de inicio de sesión.

#### Creación de Reseñas: 

Se ha confirmado la creación exitosa de nuevas reseñas mediante una petición POST al endpoint https://patukisapi.onrender.com/reviews.

#### Visualización de Reseñas Existentes: 

Las reseñas existentes para cada producto se obtienen de la API mediante una petición GET a https://patukisapi.onrender.com/reviews (la ruta correcta confirmada por el backend) y se filtran en el frontend por el productId, mostrándose debajo del formulario de reseña.

#### Diseño Responsivo: 
Adaptación de la interfaz de usuario para una experiencia óptima en diferentes tamaños de pantalla (escritorio y móvil), incluyendo la adaptación de los componentes de navegación (Navbar y Footer) según el dispositivo y el rol del usuario (aunque la parte Admin aún no está plenamente operativa en la navegación).

#### Componente BlobSVG: 
Integración de un componente SVG (BlobSVG) para elementos gráficos dinámicos y estéticos en la interfaz.

## 🛠️ Tecnologías Utilizadas
React.js: Biblioteca principal para la construcción de la interfaz de usuario.

- React Router DOM: Para la navegación y el manejo de rutas en la aplicación.

- Axios: Cliente HTTP basado en promesas para realizar peticiones a la API backend.

- Ant Design (antd): Biblioteca de componentes UI para una interfaz de usuario consistente y atractiva.

- Sass (SCSS): Preprocesador CSS para estilos más organizados y mantenibles, incluyendo el uso de variables y módulos (ej. sass:color).

- Context API de React: Para la gestión de estados globales de la aplicación (productos, carrito y autenticación de usuario).

- Git: Control de versiones con uso de ramas (main/master y develop).

## 🌐 API Backend
Esta aplicación frontend interactúa con una API backend, presumiblemente desplegada en Render.com, con los siguientes endpoints clave:

#### URL Base: https://patukisapi.onrender.com

- Autenticación/Usuarios:

POST /users (Registro de usuarios)

POST /users/login (Inicio de sesión de usuarios)

GET /users/me (Obtener perfil del usuario autenticado)

- Productos:

GET /products (Listado de todos los productos)

GET /products/:id (Detalles de un producto específico)

- Reseñas:

GET /reviews (Obtener todas las reseñas. Esta es la URL que el frontend usa para cargar y filtrar las reseñas por producto.)

POST /reviews (Crear una nueva reseña)

- Instalación del Módulo CORS en el Backend:
Para asegurar la comunicación entre el frontend y el backend, es fundamental que el backend tenga el módulo CORS habilitado:

- En el repositorio del backend: npm i cors

- En el index.js (o archivo principal del servidor):

- const cors = require("cors");
app.use(cors());

### 🗺️ Rutas de la Aplicación (React Router DOM)
#### La aplicación gestiona las siguientes rutas:

- /: Página de inicio de la aplicación.

- /login: Página para iniciar sesión.

- /register: Página para registrarse.

- /profile: Página del perfil del usuario.

- /Products/Cart: Vista del carrito de compras.

- /Products: Vista del listado de todos los productos.

- /products/:_id: Vista de detalles de un producto específico (donde :_id es el ID del producto).

- *: Ruta 404 para páginas no encontradas.

## 📏 Reglas de Desarrollo
Se han seguido las siguientes reglas durante el desarrollo para mantener la calidad del código:

- Uso de Context API: Para la gestión de estados globales.

- Uso de SASS: Para la estilización de componentes, incluyendo el uso de sass:color para manipulación de colores.

- Diseño Responsivo: Prioridad en la adaptación de la interfaz a diferentes tamaños de pantalla.

- Uso de Ramas Git: Flujo de trabajo con ramas main (o master) y develop.

- Documentación (README): Mantener una presentación de README detallada y clara.

- Límites de Código:

- Los componentes no deben sobrepasar las 400 líneas de código.

- Las funciones no deben sobrepasar las 75 líneas de código.

## 🚀 Instalación y Ejecución Local
Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

#### Clonar el repositorio:

- git clone <URL_DEL_REPOSITORIO>
cd Patukis

- Instalar dependencias:

- npm install

- Asegúrate de tener instaladas las siguientes dependencias si no lo están:

- npm install react react-dom react-router-dom axios antd sass

- Iniciar la aplicación:

- npm run dev  Esto iniciará el servidor de desarrollo y abrirá la aplicación en tu navegador (generalmente en http://localhost:5173 o similar).

## 💡 Uso de la Aplicación 
#### Navegación:

Puedes navegar entre las diferentes secciones (Home, Productos, Carrito, Perfil) usando la barra de navegación.

Desde la página de productos, haz clic en un producto para ver sus detalles.

Registro / Inicio de Sesión:

Usa las rutas /register y /login para crear una cuenta o iniciar sesión.

- Formulario de Reseñas:

En la página de detalles de un producto, verás la sección "Deja tu Reseña".

Puedes escribir tu comentario.

Si no estás logueado y haces clic en "Enviar Reseña", se te pedirá iniciar sesión y serás redirigido a la página de login.

Si estás logueado, la reseña se enviará a la API y se añadirá dinámicamente a la lista visible.

- Lista de Reseñas:

Debajo del formulario de reseña, se mostrará la sección "Reseñas de Clientes" .

## ✨ Mejoras Futuras
#### Las siguientes funcionalidades están planeadas para futuras versiones del proyecto:

- Buscador de Productos: Implementar una barra de búsqueda para encontrar productos.

- Filtros de Productos: Añadir opciones para filtrar productos (ej. por precio).

- Funcionalidad de Favoritos: Permitir a los usuarios añadir o quitar productos de una lista de favoritos.

- Gestión Avanzada de Reseñas:

Permitir a los usuarios subir fotos junto con sus reseñas.

Implementar un sistema de likes para las reseñas de los productos.

Funcionalidad para que los usuarios solo puedan editar y eliminar las reseñas que ellos mismos crearon.

- Gestión de Pedidos en Perfil: Mostrar el historial de pedidos del usuario en la vista de perfil.

