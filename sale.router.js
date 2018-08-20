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

router.get('/', function (req, res){
    console.log('in GET');
    
    const query = 'SELECT * FROM "listings" WHERE "type" = $1;';
    pool.query(query, ['sale']).then((results) => {
        console.log(results); //this is an object
        res.send(results.rows); //array of favorites
    }).catch((error) => {
        console.log('Error making GET', error);
        res.sendStatus(500);        
    });
});

router.delete('/:id', (req, res) => { 
    const idToDelete = req.params.id;
    console.log('deleting ', idToDelete);
    const query = 'DELETE FROM "listings" WHERE "id" = $1;';
    pool.query(query, [idToDelete]).then((result) => {
        res.sendStatus(200);
    }).catch( (error) => {
        console.log('Error in delete', error);
        res.sendStatus(500);
    });//End DELETE
});


  

module.exports = router;