const router = require('express').Router();
const {writeNote, dbUpdate} = require("../../lib/notes");
const {notes} = require("../../db/db.json");
const { v4: uuidv4 } = require('uuid');




router.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
});

router.post("/notes", (req, res) => {
    req.body.id = uuidv4();
    const newInfo = writeNote(req.body, notes);
    res.json(newInfo);
});

router.delete("/notes/:id", (req, res) => {
    const params = req.params.id
    dbUpdate(params, notes);
    res.redirect('');
});

module.exports = router;