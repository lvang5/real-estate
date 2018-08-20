const express = require('express');
const router = express.Router();

//pg set up
const pg = require('pg');
const Pool = pg.Pool;
const config = {
    database: 'real_estate',
    host: 'localhost',
    port: 5432,
    maxL: 10,
    idleTimeoutMillis: 10000
}

const pool = new Pool(config);

pool.on('connect', () => {
    console.log('Connected to postgreSQL');
});
pool.on('error', () => {
    console.log('Error connecting to postgreSQL');
});







router.post('/', (req, res) => {
    console.log('in POST route', req.body);
    
    const HomeToAdd = req.body;

    const query = 'INSERT INTO "listings" ("cost", "sqft", "type", "city", "image_path") VALUES($1, $2, $3, $4, $5);'
    pool.query(query, [HomeToAdd.cost, HomeToAdd.sqft, HomeToAdd.type, HomeToAdd.city, HomeToAdd.image_path]).then(() => {
        res.sendStatus(201);
    }).catch((error) => {
        res.sendStatus(500);
    });
});



  

module.exports = router;