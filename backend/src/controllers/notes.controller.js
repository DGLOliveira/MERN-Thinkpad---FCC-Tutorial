export const getAllNotes = (req, res) => {
    res.status(200).send("You just fetched all notes");
}

export const createNote = (req, res) => {
    res.status(201).send("You just created a note");
}

export const updateNote = (req, res) => {
    res.status(200).send("You just updated a note");
}

export const deleteNote = (req, res) => {
    res.status(201).send("You just deleted a note");
}