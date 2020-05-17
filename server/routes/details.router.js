const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('in the detail router', req.params.id);
    
    let query = `SELECT "title", "description", "name" FROM "movies" 
    JOIN "linker" ON "movies"."id"="linker"."movie_id" 
    JOIN "genres" ON "genres"."id"="linker"."genre_id" WHERE "title"=$1;`;
    pool.query(query).then(result => {
        res.send(result.rows);
    }).catch(err => {
        console.log(err);
        res.sendStatus(500)
    })
})//Avatar is hard coded because req.query.movie is returning a string and the double quotes are making the SQL query think i want the title = to a column name.
//once I can figure out how to strip the string down to text


module.exports = router;