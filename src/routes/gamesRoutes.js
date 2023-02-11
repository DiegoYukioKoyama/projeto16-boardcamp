//*Libraries
import { Router } from "express";

//*Controllers
import { createGames, getGames } from "../controllers/GamesControlers.js";

const gamesRouter = Router();

gamesRouter.get("/games", getGames)
gamesRouter.post("/games", createGames)

export default gamesRouter