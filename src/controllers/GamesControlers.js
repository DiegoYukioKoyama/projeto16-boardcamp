//*Config
import { db } from '../config/database.js';

export async function getGames(req, res) {

    try {
        const games = await db.query("SELECT * FROM games")
        return res.send(games.rows)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

export async function registerGames(req,res) {
    
    const {name, image, stockTotal, pricePerDay} = req.body

    if(stockTotal <= 0 || pricePerDay <= 0) return res.sendStatus(400)
    
    try {
        const game = await db.query(
            `INSERT INTO games (name, image, "stockTotal", "pricePerDay")
            SELECT $1, $2, $3, $4 WHERE NOT EXISTS (SELECT * FROM games WHERE name = $5)`,
            [name, image, stockTotal, pricePerDay, name]
        )

        if(game.rowCount > 0) return res.sendStatus(201)

        return res.status(409).send("Jogo já cadastrado!")

    } catch (error) {
        return res.status(500).send(error.message)
    }
}
