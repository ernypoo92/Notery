const router = require('express').Router();
const fs = require('fs');
let notes  = require('../../Develop/db/db.json');
console.log(notes);
// display notes if any in array
router.get('/notes', (req, res) => {
    // let note = fs.readFileAsync('../../Develop/db/db.json', 'UTF-8');
    // note.then((note)=>{
    //     return res.json(note);
    // })   
    // console.log(note);
    return JSON.stringify(res.json(notes));
    if(note.length >= 0) {
        return JSON.parse(res.json(notes));
    } else {
        return;
    }
});

// post newly created note to the db.json file
router.post('/notes', (req, res) => {
    let noteModel = {
        title: req.body.title,
        text: req.body.text,
        id: Math.floor(Math.random() * 100000)
    };

    notes.push(noteModel);

    fs.writeFileSync('./db/db.json', JSON.stringify(notes));

    res.json(notes);
});

// delete existing notes and update array
router.delete('/notes/:id', (req, res) => {
    let keeperNotes = [];

    for(var i = 0; i < notes.length; i++) {
        if(notes[i].id != req.params.id) {
            keeperNotes.push(notes[i]);
        }
    };

    notes = keeperNotes;

    fs.writeFileSync('./db/db.json', JSON.stringify(notes));

    res.json(notes);
});

module.exports = router;