import Note from "../models/Note.js";

export const getAllNotes = async (_, res) => {
    //res.status(200).send("You just fetched all notes");
    try {
        const notes = await Note.find().sort({createdAt: -1}); //sort by newest first
        res.status(200).json(notes);        
    } catch (error) {
        console.error("Error in getAllNotes", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getNoteById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if(!note) return res.status(404).json({message:"Note not found"});
        res.status(200).json(note);
    } catch (error) {
        console.error("Error in getNoteById", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const createNote = async (req, res) => {
    //res.status(201).send("You just created a note");
    try {
        const {title, content} = req.body;
        const newNote = new Note({title, content});
        await newNote.save();
        res.status(201).json({message:"Note created successfully"});
    } catch (error) {
        console.error("Error in createNote", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const updateNote = async (req, res) => {
    //res.status(200).send("You just updated a note");
    try {
        const {title, content} = req.body;
        await Note.findByIdAndUpdate(req.params.id, {title, content});
        res.status(200).json({message:"Note updated successfully"});
    } catch (error) {
        console.error("Error in updateNote", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const deleteNote = async (req, res) => {
    //res.status(201).send("You just deleted a note");
    try {
        const note = await Note.findByIdAndDelete(req.params.id);
        if(!note) return res.status(404).json({message:"Note not found"});
        res.status(200).json({message:"Note deleted successfully"});
    } catch (error) {
        console.error("Error in deleteNote", error);
        res.status(500).json({ message: "Internal server error" });
    }
}