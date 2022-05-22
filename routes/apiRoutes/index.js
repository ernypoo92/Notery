const router = require('express').Router();
const fs = require('fs');
let notes  = require('../../db/db.json');
console.log(notes);


router.get('/api/notes', (req, res) => {
    // let notes = JSON.parse(fs.readFileSync('../../db/db.json', 'UTF-8'));
    // note.then((notes)=>{
    //     return res.json(note);
    // })   
    // if(notes.length > 0) {
    //     return res.json(notes);
    // } else {
    //     return;
    // }
    
    const { notes } = JSON.parse(fs.readFileSync(path.join(__dirname, '../../db/db.json')))

    req.body.id = notes.length.toString();
    
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
    const note = createNote(req.body, notes);
    res.json(note);
    }
    // console.log(notes);
    // return res.json(notes);
});


router.post('/api/notes', (req, res) => {
    let noteMod = {
        title: req.body.title,
        text: req.body.text,
        id: Math.floor(Math.random() * 100000)
    };

    notes.push(noteMod);

    fs.writeFileSync('../../db/db.json', JSON.stringify(notes));

    res.json(notes);
});


router.delete('/api/notes/:id', (req, res) => {
    let keeperNotes = [];

    for(var i = 0; i < notes.length; i++) {
        if(notes[i].id != req.params.id) {
            keeperNotes.push(notes[i]);
        }
    };

    notes = keeperNotes;

    fs.writeFileSync('../../db/db.json', JSON.stringify(notes));

    res.json(notes);
});

module.exports = router;