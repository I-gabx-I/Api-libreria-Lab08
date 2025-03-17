API de Gestión de Libros 📚

Este proyecto es una API REST en Node.js con Express, diseñada para gestionar una colección de libros. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar libros).

//// Enlace a CodeSandbox

////Ver el proyecto en CodeSandbox
https://codesandbox.io/p/github/I-gabx-I/Api-libreria-Lab08/main

/////Requisitos

Node.js y npm instalados (para ejecutar localmente).

Postman o cURL (opcional, para pruebas).

////Instalación y Ejecución

Para correr el servidor en tu máquina local:

Clona el repositorio:

git clone <URL_DEL_REPO>
cd nombre-del-repositorio

Instala las dependencias:

npm install

Ejecuta el servidor:

npm start

La API estará disponible en http://localhost:3000
////Endpoints Disponibles

//// Obtener todos los libros

GET /books

[
  { "id": 1, "title": "1984", "author": "George Orwell", "genre": "Dystopian" },
  { "id": 2, "title": "To Kill a Mockingbird", "author": "Harper Lee", "genre": "Classic" }
]
///// Obtener un libro por ID

GET /books/:id

{
  "id": 1, "title": "1984", "author": "George Orwell", "genre": "Dystopian"
}
//// Agregar un nuevo libro

POST /books
Body (JSON)

{
  "title": "El Principito",
  "author": "Antoine de Saint-Exupéry",
  "genre": "Fábula"
}

Respuesta:

{
  "id": 3, "title": "El Principito", "author": "Antoine de Saint-Exupéry", "genre": "Fábula"
}

////Actualizar un libro

PUT /books/:id
Body (JSON)

{
  "title": "1984 (Edición Especial)",
  "author": "George Orwell",
  "genre": "Distopía"
}

Respuesta:

{
  "id": 1, "title": "1984 (Edición Especial)", "author": "George Orwell", "genre": "Distopía"
}

////// Eliminar un libro

DELETE /books/:id
Respuesta:

{
  "message": "Libro eliminado exitosamente"
}

///Estructura del Proyecto
📁 src/
 ┣ 📂 routes/
 ┃ ┗ 📜 books.ts  # Rutas para los libros
 ┣ 📜 index.ts     # Archivo principal de Express
 ┗ 📜 package.json # Configuración del proyecto
 by gabx
