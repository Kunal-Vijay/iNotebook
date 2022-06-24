import React, { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
    const initialNotes = [
        {
            "_id": "62b3e4a0d6165a77a019c6411",
            "user": "62a8a8706e926b665d44cc53",
            "title": "My notes",
            "description": "This is my first note",
            "tag": "personal",
            "date": "2022-06-23T03:57:20.050Z",
            "__v": 0
        },
        {
            "_id": "62b3e4a0d6165a77a019c64123",
            "user": "62a8a8706e926b665d44cc53",
            "title": "My notes",
            "description": "This is my first note",
            "tag": "personal",
            "date": "2022-06-23T03:57:20.050Z",
            "__v": 0
        },
        {
            "_id": "62b3e4a0d6165a77a019c6414",
            "user": "62a8a8706e926b665d44cc53",
            "title": "My notes",
            "description": "This is my first note",
            "tag": "personal",
            "date": "2022-06-23T03:57:20.050Z",
            "__v": 0
        },
        {
            "_id": "62b3e4a0d6165a77a019c6415",
            "user": "62a8a8706e926b665d44cc53",
            "title": "My notes",
            "description": "This is my first note",
            "tag": "personal",
            "date": "2022-06-23T03:57:20.050Z",
            "__v": 0
        },
        {
            "_id": "62b3e4a0d6165a77a019c6416",
            "user": "62a8a8706e926b665d44cc53",
            "title": "My notes",
            "description": "This is my first note",
            "tag": "personal",
            "date": "2022-06-23T03:57:20.050Z",
            "__v": 0
        },
        {
            "_id": "62b3e4eccb0a608e953ad8df7",
            "user": "62a8a8706e926b665d44cc53",
            "title": "My notes",
            "description": "This is my first note",
            "tag": "personal",
            "date": "2022-06-23T03:58:36.176Z",
            "__v": 0
        },
        {
            "_id": "62b3e50775f37cbb3e95ba578",
            "user": "62a8a8706e926b665d44cc53",
            "title": "My notes",
            "description": "This is my first note",
            "tag": "personal",
            "date": "2022-06-23T03:59:03.390Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(initialNotes);

    // Add a note
    const addNote = (title, description, tag) => {
        const note = {
            "_id": "62b3e50775f37cbb3e95ba5783",
            "user": "62a8a8706e926b665d44cc53",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-06-23T03:59:03.390Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }

    // Delete a note
    const deleteNote = (id) => {
        const newNotes = notes.filter((note)=>{return note._id!==id});
        setNotes(newNotes);
    }

    // Edit a note
    const editNote = () => {

    }
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;