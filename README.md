# 🍃 Proyecto CRUD con MongoDB Atlas (Frontend y Backend)

Este proyecto busca hacer de pequeña introducción práctica al uso de **MongoDB Atlas** en el desarrollo web, mediante una aplicacion CRUD con un backend en Node.js (con express y mongoose) y un frontend sencillo hecho con TailwindCSS

---

## Requisitos previos

-   Tener **Node.JS** y **npm** instalados:
    -   [Descargalos aquí](https://nodejs.org/es)
-   Tener una cuenta en [MongoDB Atlas](https://www.mongodb.com/es/atlas)

## Instrucciones para ejecutarlo

### Backend

1- Desde tu terminal, entra a la carpeta del Backend:

```bash
    cd backend
```

2- Instala las dependencias:

```bash
    npm install
```

3- Crea un archivo `.env` con tus variables de entorno:

```.env
    PORT (el puerto donde funcionará el backend de la aplicación)

    MONGO_URI (la URI para conectar la aplicación con la base de datos; esta la consigues en Atlas)
```

4- Inicia el servidor:

```bash
    npm start
```

Este debería iniciar en `http://localhost:PORT`

### Frontend

1- Entra a la carpeta del Frontend:

```bash
    cd backend
```

2- Abre `Index.html` directamente en el navegador (no requiere de servidor).
    
- Este archivo incluye TailwindCSS mediante el **PlayCDN**:

```html
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

Este método es ideal en pruebas y prototipos rapidos.

-  Si prefieres usar Tailwind con PostCSS o CLI, ejecuta:

  ```bash
    npm init -y
    npm install -D tailwindcss
    npx tailwindcss init
  ```

- Después configura tus archivos y sigue la [guia oficial](https://tailwindcss.com/docs/installation/)

## Dependencias del Backend

### Principales

- [`express`](https://www.npmjs.com/package/express): Framework minimalista para la construcción de servidores web y APIs en Node.js.
- [`mongoose`](https://www.npmjs.com/package/mongoose): ODM (Object Data Modeling) para conectar y trabajar fácilmente con MongoDB desde Node.js.
- [`dotenv`](https://www.npmjs.com/package/dotenv): Carga variables de entorno desde un archivo `.env` al entorno de ejecución de Node.js, muy útil para mantener secretos fuera del código fuente.
- [`cors`](https://www.npmjs.com/package/cors): Middleware para habilitar solicitudes cross-origin (CORS), necesario si el frontend y el backend se ejecutan en diferentes dominios o puertos.

## Notas adicionales

- Asegúrate de habilitar acceso desde tu IP (o para todas las IP: `0.0.0.0/0`) en MongoDB Atlas

- El frontend debe apuntar al mismo puerto que el backend

## 🤝🐎 Contribuciones

Este proyecto está abierto a mejoras. Puedes hacer un fork, proponer cambios o usarlo como base para tu propia aplicación.
