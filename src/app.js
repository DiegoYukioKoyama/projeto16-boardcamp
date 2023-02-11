//* Libraries
import express from 'express';
import cors from 'cors';

//*Routers
import rentalsRouter from './routes/rentalsRoutes.js';

const PORT = 5000;

const app = express();

app.use(express.json());
app.use(cors());

app.use(rentalsRouter)

app.listen(PORT, () => console.log(`Server initialized. Port: ${PORT}`))
