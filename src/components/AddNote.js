import React from 'react'
import { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';

export default function AddNote() {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "default" })
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
    }
    return (
<<<<<<< HEAD
        <div className='my-3'  >
=======
        <div className='container my-3'  >
>>>>>>> e7d3a92d6bf62c1591806480a128f07a09a8b8d4
            <h1>Add Notes</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name='title' onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name='description' onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div >
    )
}