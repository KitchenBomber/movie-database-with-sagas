const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/:id', (req, res) => {
    console.log('in the detail router', req.params.id);
    
    let query = `SELECT "name" FROM "movies" 
    JOIN "linker" ON "movies"."id"="linker"."movie_id" 
    JOIN "genres" ON "genres"."id"="linker"."genre_id" WHERE "movies"."id"=$1;`;

    pool.query(query, [req.params.id]).then(result => {
        res.send(result.rows);
        console.log(result.rows);
        
    }).catch(err => {
        console.log(err);
        res.sendStatus(500)
    })
})//This is the Detail Get, it pulls back the genres for the selected movie to be mapped in Details

router.post('/', (req, res) => {
    console.log('in the POST detail', req.body);
    let query = `INSERT INTO "movies" ("title", "description")
    VALUES ($1, $2)`;
    pool.query(query, [req.body.title, req.body.description]).then(result => {
        res.sendStatus(200);

    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
        
    })
})// this is the post Router, it sends an updated title and description. right now it's trying to add a new item, i just need to get the movie ID and add a clause to make it overwrite.

module.exports = router;