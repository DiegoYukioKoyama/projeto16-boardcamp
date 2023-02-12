//*Libraries
import { Router } from "express";

//*Controllers
import { registerGames, getGames } from "../controllers/GamesControlers.js";

//*Middleware
import { validateSchema } from "../middleware/SchemaMiddleware.js";

//*Schema
import { registerGamesSchema } from "../Schema/gamesSchema.js";

const gamesRouter = Router();

gamesRouter.get("/games", getGames)
gamesRouter.post("/games",validateSchema(registerGamesSchema), registerGames)

export default gamesRouter