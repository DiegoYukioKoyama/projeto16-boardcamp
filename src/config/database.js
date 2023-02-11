//* Libraries
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config()

const { Pool } = pg;

const consfigDatabase = {
    connectionString: process.env.DATABASE_URL  
}

if(process.env.MODE === 'prod') consfigDatabase.ssl = true;

export const db = new Pool(consfigDatabase);