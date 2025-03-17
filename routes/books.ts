import express, { Request, Response } from "express";

const router = express.Router();

// Datos de prueba (esto sería reemplazado por una base de datos en un proyecto real)
let books = [
  { id: 1, title: "1984", author: "George Orwell", genre: "Dystopian" },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
  },
];

// Obtener todos los libros
router.get("/", (req: Request, res: Response) => {
  res.json(books);
});

// Obtener un libro por ID
router.get("/:id", (req: Request, res: Response) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: "Libro no encontrado" });
  res.json(book);
});

// Agregar un nuevo libro
router.post("/", (req: Request, res: Response) => {
  const { title, author, genre } = req.body;
  if (!title || !author || !genre) {
    return res
      .status(400)
      .json({ message: "Todos los campos son obligatorios" });
  }

  const newBook = { id: books.length + 1, title, author, genre };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Actualizar un libro
router.put("/:id", (req: Request, res: Response) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: "Libro no encontrado" });

  const { title, author, genre } = req.body;
  if (!title || !author || !genre) {
    return res
      .status(400)
      .json({ message: "Todos los campos son obligatorios" });
  }

  book.title = title;
  book.author = author;
  book.genre = genre;
  res.json(book);
});

// Eliminar un libro
router.delete("/:id", (req: Request, res: Response) => {
  const bookIndex = books.findIndex((b) => b.id === parseInt(req.params.id));
  if (bookIndex === -1)
    return res.status(404).json({ message: "Libro no encontrado" });

  books.splice(bookIndex, 1);
  res.json({ message: "Libro eliminado exitosamente" });
});

export default router;
