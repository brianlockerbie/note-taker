const router = require('express').Router();
const {writeNote, dbUpdate} = require("../../lib/notes");
const {notes} = require("../../db/db/json");

const { writeNote, dbUpdate, } = require("");

const { notes } = require('');

const { uuid } = require('uuidv4');

router.get("/notes", (req, res) => {
    let info = notes;
    res.json(info);
});

router.post("/notes", (req, res) => {
    let info = notes;
    res.json(info);
});

router.delete("/notes", (req, res) => {
    let info = notes;
    res.json(info);
});

module.exports = router;