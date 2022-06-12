const router = require('express').Router();
const {notes} = require('../../db/notes.json');
const createNewNote = require('../../lib/notes');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = createNewNote(req.body, notes);
    res.json(note);
})

module.exports = router;