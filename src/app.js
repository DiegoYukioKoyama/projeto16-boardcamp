//* Libraries
import express from 'express';
import cors from 'cors';

//*Routers
import rentalsRouter from './routes/rentalsRoutes.js';
import gamesRouter from './routes/gamesRoutes.js';
import customersRouter from './routes/customersRoutes.js';

const PORT = 5000;

const app = express();

app.use(express.json());
app.use(cors());

app.use(customersRouter)
app.use(gamesRouter)
app.use(rentalsRouter)

app.listen(PORT, () => console.log(`Server initialized. Port: ${PORT}`))
