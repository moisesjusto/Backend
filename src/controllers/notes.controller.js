const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
};

notesCtrl.createNote = async (req, res) => {
    const { imgs,
        precio,
        categoria,
        descripsion 
    } = req.body;

    const newNote = new Note({
        imgs,
        precio,
        categoria,
        descripsion
    });
    await newNote.save();
    res.json('New Note added');
};

notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
}

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id)
    res.json('Note Deleted');
}

notesCtrl.updateNote = async (req, res) => {
    const { imgs,
        precio,
        categoria,
        descripsion
     } = req.body;
    await Note.findByIdAndUpdate(req.params.id, {
        imgs,
        precio,
        categoria,
        descripsion
    });
    res.json('Note Updated');
}

module.exports = notesCtrl;