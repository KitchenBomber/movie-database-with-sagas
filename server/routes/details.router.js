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
})//Avatar is hard coded because req.query.movie is returning a string and the double quotes are making the SQL query think i want the title = to a column name.
//once I can figure out how to strip the string down to text


module.exports = router;