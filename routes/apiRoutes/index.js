const router = require('express').Router();
const fs = require('fs');
//let notes  = require('./db.json');
console.log(__dirname);


router.get('/notes', (req, res) => {
    fs.readFile('./routes/apiRoutes/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            // Convert string into JSON object
            const parsedNotes = JSON.parse(data);
            return res.json(parsedNotes)

        // // Write updated reviews back to the file
        // fs.writeFile(
        //     './db.json',
        //     JSON.stringify(parsedNotes, null, 4),
        //     (writeErr) =>
        //         writeErr
        //         ? console.error(writeErr)
        //         : console.info('Successfully updated reviews!')
        // );
    }
    });
    
    // notes = JSON.parse(fs.readFileSync('./db.json', 'UTF-8'));
    // note.then((notes)=>{
    //     return res.json(note);
    // })   
    // if(notes.length > 0) {
    //     return res.json(notes);
    // } else {
    //     return;
    // }
    
    // const { notes } = JSON.parse(fs.readFileSync(path.join(__dirname, '../../db/db.json')))

    // req.body.id = notes.length.toString();
    
    // if (!validateNote(req.body)) {
    //     res.status(400).send('The note is not properly formatted.');
    // } else {
    // const note = createNote(req.body, notes);
    // res.json(note);
    // }
    // console.log(notes);
    // return res.json(notes);
});


router.post('/notes', (req, res) => {
    let noteMod = {
        title: req.body.title,
        text: req.body.text,
        id: Math.floor(Math.random() * 100000)
    };

    fs.readFile('./routes/apiRoutes/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            // Convert string into JSON object
            const parsedNotes = JSON.parse(data);

             // Add a new Note
            parsedNotes.push(noteMod);
            
            // Write updated Notes back to the file
            fs.writeFile(
                './routes/apiRoutes/db.json',
                JSON.stringify(parsedNotes, null, 4),
                (writeErr) =>
                writeErr
                    ? console.error(writeErr)
                    : console.info('Successfully updated Notes!')
            );
        }
    });
    // notes.push(noteMod);

    // fs.writeFileSync('./routes/apiRoutes/db.json/db.json', JSON.stringify(notes));

    // res.json(notes);
});


router.delete('/notes/:id', (req, res) => {
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