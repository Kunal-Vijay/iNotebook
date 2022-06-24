import React, { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
    const host = "http://localhost:5000";
    
    const [notes, setNotes] = useState([]);

    // fetch all note
    const fetchNotes = async () => {
        // API call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJhOGE4NzA2ZTkyNmI2NjVkNDRjYzUzIn0sImlhdCI6MTY1NTIyNTI5MH0.1oUqUtgfgpvexaMeaZRZeY65xD-_pt6ciCTuy837YLg'
            }
        });
        const fetchedNotes = await response.json();
        setNotes(fetchedNotes);
    }

    // Add a note
    const addNote = async (title, description, tag) => {
        // API call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJhOGE4NzA2ZTkyNmI2NjVkNDRjYzUzIn0sImlhdCI6MTY1NTIyNTI5MH0.1oUqUtgfgpvexaMeaZRZeY65xD-_pt6ciCTuy837YLg'
            },
            body: JSON.stringify({ title, description, tag })
        });

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
    const deleteNote = async (id) => {
        // API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJhOGE4NzA2ZTkyNmI2NjVkNDRjYzUzIn0sImlhdCI6MTY1NTIyNTI5MH0.1oUqUtgfgpvexaMeaZRZeY65xD-_pt6ciCTuy837YLg'
            },
        });
        const json = response.json();

        const newNotes = notes.filter((note) => { return note._id !== id });
        setNotes(newNotes);
    }

    // Edit a note
    const editNote = async (id, title, description, tag) => {
        // API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJhOGE4NzA2ZTkyNmI2NjVkNDRjYzUzIn0sImlhdCI6MTY1NTIyNTI5MH0.1oUqUtgfgpvexaMeaZRZeY65xD-_pt6ciCTuy837YLg'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();

        // Logic for editing in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }
    return (
        <NoteContext.Provider value={{ notes,fetchNotes, addNote, deleteNote, editNote }} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;