//*Libraries
import { Router } from "express";

//*Controllers
import { getGames } from "../controllers/GamesControlers.js";

const gamesRouter = Router();

gamesRouter.get("/games", getGames)

export default gamesRouter