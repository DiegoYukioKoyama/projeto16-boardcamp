//*config
import { db } from '../config/database.js';

export async function getRentals(req, res){
    
    try {
        const rentals =  await db.query("SELECT * FROM rentals")
        res.send(rentals.rows)
    } catch (error) {
        res.status(500).send(error.message)
    }
}