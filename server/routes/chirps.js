const express = require('express');
const chirpsstore = require('../chirpstore');

let router = express.Router();

router.get('/', (req, res) => {
    res.send(chirpsstore.GetChirps())
})
router.get('/:id', (req, res) => {
    res.send(chirpsstore.GetChirp(req.params.id))
});

router.post('/', (req, res) => {
    chirpsstore.CreateChirp(req.body);
    res.sendStatus(200);
});

router.put('/:id', (req, res) => {
    chirpsstore.UpdateChirp(req.params.id, req.body);
    res.sendStatus(200)
});

router.delete('/:id', (req, res) => {
    chirpsstore.DeleteChirp(req.params.id);
    res.sendStatus(200)
});

module.exports = router;