import {createPool} from 'mysql2/promise';

export const pool = new createPool({
    host: 'localhost',
    port: 3306,
    user: 'Admin',
    password: 'Admin123',
    database: 'hotelmascotas'
})