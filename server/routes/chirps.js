const express = require('express');
const chirpsstore = require('../chirpstore');

let router = express.Router();

router.get('/:id?', (req, res) => {
    let id = req.params.id
    if(id) {
        res.json(chirpsstore.GetChirp(id))
    } else {
        res.send(chirpsstore.GetChirps());
    }
});

router.post('/', (req, res) => {
    chirpsstore.CreateChirp(req.body);
    res.sendStatus(200);
});



module.exports = router;