//*Config
import { db } from "../config/database.js";

export async function getAllCustomers(req, res) {

    try {
        const customers = await db.query("SELECT * FROM customers")
        return res.send(customers.rows)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

export async function getCustomerById(req, res) {

    const { id } = req.params

    try {
        const customer = await db.query(`SELECT * FROM customers WHERE id = $1`, [id])
        
        if (customer.rows.length > 0) return res.send(customer.rows[0])

        return res.status(404).send("Cliente não cadastrado")
    } catch (error) {
        return res.sendStatus(404)
    }
}

export async function registerCustomer(req, res) {

    const { name, phone, cpf, birthday } = req.body

    try {
        const customer = await db.query(
            `INSERT INTO customers (name, phone, cpf, birthday)
            SELECT $1, $2, $3, $4 WHERE NOT EXISTS (SELECT * FROM customers WHERE cpf = $5)`,
            [name, phone, cpf, birthday, cpf]
        )

        if (customer.rowCount > 0) return res.sendStatus(201)

        return res.status(409).send("Cliente já cadastrado!")

    } catch (error) {
        return res.status(500).send(error.message)
    }
}