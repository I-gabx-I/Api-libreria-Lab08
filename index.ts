import express, { Request, Response } from "express";

const app = express();
const port = 3000;

// Middleware para manejar JSON
app.use(express.json());
import bookRoutes from "./routes/books";
app.use("/books", bookRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Bienvenido a la API de la biblioteca 📚");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
