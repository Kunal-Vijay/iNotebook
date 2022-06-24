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
    const [notes, setNotes] = useState(initialNotes)
    return (
        <NoteContext.Provider value={{notes,setNotes}} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;