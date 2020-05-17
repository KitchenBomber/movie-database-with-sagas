const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    let query = `SELECT * FROM "movies" ORDER BY "id" ASC`;
    pool.query(query).then(result => {
        res.send(result.rows);
    }).catch(err => {
        console.log(err);
        res.sendStatus(500)
    })
})
//I'm still going to need to put linking data in the linker table for this to work..

    // `SELECT "title", "poster", "description" "name" FROM "movies" 
    // JOIN "linker" ON "movies"."id"="linker"."movie_id" 
    // JOIN "genres" ON "genres"."id"="linker"."genre_id";`
    // this join was bringing back an item for every genre

module.exports = router;