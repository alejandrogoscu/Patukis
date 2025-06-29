# 🦆 Patukis E-commerce Frontend
Este es el frontend de una aplicación de e-commerce construida con React, diseñada para la venta de productos "Patukis" (patos de goma personalizados).

## 🎯 Objetivos del Proyecto
- El objetivo principal de este proyecto es desarrollar un frontend robusto y responsivo capaz de cumplir con las siguientes funcionalidades esenciales para una tienda online:

- Registro de Usuarios: Permitir a nuevos usuarios crear una cuenta en la plataforma.

- Inicio de Sesión de Usuarios: Autenticar a los usuarios existentes para acceder a funcionalidades personalizadas.

- Visualización de Productos: Mostrar un catálogo de productos disponibles y sus descripciones, así como permitir la visualización y creación de reseñas.

- Gestión del Carrito de Compra: Permite la gestión de productos en un carrito virtual, incluyendo agregar y quitar productos.

- Creación de Pedidos: Facilitar el proceso para que los usuarios puedan realizar pedidos de los productos en su carrito.

- Cierre de Sesión (Logout): Finalizar la sesión activa del usuario de forma segura.

- Administración de Productos: Permitir a usuarios con rol admin gestionar el catálogo de productos (editar/eliminar).

## 🚀 Características Implementadas
Actualmente, el frontend de Patukis E-commerce incluye las siguientes funcionalidades clave:

### - *Registro de Usuarios:* 
Implementado a través del componente RegisterForm, con una página de confirmación (RegisterConfirmation) tras el registro exitoso.

### - *Inicio de Sesión de Usuarios:*
Gestionado por el componente LoginForm, con autenticación a través de la API y redirección tras el éxito.

### - *Visualización de Productos:*

Listado general de todos los productos disponibles (GetProducts).

Páginas de detalle para cada producto individual (GetOneProduct), donde se utiliza el hook useParams para obtener el ID del producto de la URL (/products/:_id).

### - *Gestión de Carrito de Compra:*

- Añadir productos al carrito desde la vista de lista o detalle.

- Eliminar productos del carrito.

- Un badge numérico en el icono del carrito en la barra de navegación que muestra la cantidad de ítems en el carrito, proporcionando una retroalimentación visual instantánea al usuario.

### - *Gestión de Perfil:*

. Vista del perfil (Profile) con los datos del usuario logueado, incluyendo su lista de deseos y pedidos realizados.

. Cierre de Sesión (Logout): Implementado mediante el componente LogoutButton.

### - *Sistema de Reseñas de Productos:*

- El formulario de reseña (Review) es visible en la página de detalles del producto, independientemente del estado de autenticación del usuario.

- Requisito de Autenticación para Envío: Si un usuario no logueado intenta enviar una reseña, se le notificará y se le redirigirá a la página de inicio de sesión.

- Creación de Reseñas: Se ha confirmado la creación exitosa de nuevas reseñas mediante una petición POST al endpoint https://patukisapi.onrender.com/reviews.

- Visualización de Reseñas Existentes: Las reseñas existentes para cada producto se obtienen de la API mediante una petición GET a https://patukisapi.onrender.com/reviews y se filtran en el frontend por el productId, mostrándose debajo del formulario de reseña.

### - *Administración de Productos:*

- El componente AdminProducts permite a los usuarios con el rol "mamapato" ver una tabla de productos con opciones para editar y eliminar. Utiliza confirm() y alert() para las interacciones.

- Diseño Responsivo: Adaptación de la interfaz de usuario para una experiencia óptima en diferentes tamaños de pantalla (escritorio y móvil), incluyendo la adaptación de los componentes de navegación (Navbar y Footer) según el dispositivo y el rol del usuario (a través del componente Responsive).

- Componente BlobSVG: Integración de un componente SVG (BlobSVG) para elementos gráficos dinámicos y estéticos en la interfaz.


## 🚀 Instalación y Ejecución Local
Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

### 1. Clonar el repositorio:

- git clone <URL_DEL_REPOSITORIO>
cd Patukis

### 2. Instalar dependencias:

- npm install

Asegúrate de tener instaladas las siguientes dependencias si no lo están:

- npm install react react-dom react-router-dom axios antd sass
- npm create vite@latest
- npm install react-router-dom@6

### 3. Iniciar la aplicación:

- npm run dev

  "Esto iniciará el servidor de desarrollo y abrirá la aplicación en tu navegador (generalmente en http://localhost:5173 o similar)."

### 4. otros comandos para el proyecto de react con Vite:
- rafce
- npm install react-icons –save
https://react-icons.github.io/react-icons/
npm install antd 
- npm install sass --save-dev 


## 🛠️ Tecnologías Utilizadas
- React.js: Biblioteca principal para la construcción de la interfaz de usuario.

- React Router DOM: Para la navegación y el manejo de rutas en la aplicación.

- Axios: Cliente HTTP basado en promesas para realizar peticiones a la API backend.

- Ant Design (antd): Biblioteca de componentes UI para una interfaz de usuario consistente y atractiva.

- Sass (SCSS): Preprocesador CSS para estilos más organizados y mantenibles, incluyendo el uso de variables y módulos (ej. sass:color).

- Context API de React: Para la gestión de estados globales de la aplicación (productos, carrito y autenticación de usuario).

- Git: Control de versiones con uso de ramas (main/master y develop).

## ✨ Mejoras Futuras
#### Las siguientes funcionalidades están planeadas para futuras versiones del proyecto:

- Buscador de Productos: Implementar una barra de búsqueda para encontrar productos.

- Filtros de Productos: Añadir opciones para filtrar productos (ej. por precio).

- Funcionalidad de Favoritos: Permitir a los usuarios añadir o quitar productos de una lista de favoritos.

- Gestión Avanzada de Reseñas:
- - Permitir a los usuarios subir fotos junto con sus reseñas.
- - Implementar un sistema de likes para las reseñas de los productos.

- - Funcionalidad para que los usuarios solo puedan editar y eliminar las reseñas que ellos mismos crearon.

- Gestión de Pedidos en Perfil: Mostrar el historial de pedidos del usuario en la vista de perfil.