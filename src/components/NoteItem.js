import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import "../App.css"

export default function NoteItem(props) {
    const {showAlert}=props;
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote,bgcolor } = props;
    return (
        <div className='col-md-3'>
            <div style={{"backgroundColor":`${bgcolor}`}} className="card my-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title">{note.title}</h5>
                        <div className="row">
                            <div className='col-md-5 ' onClick={() => { deleteNote(note._id);
                            showAlert("Note deleted successfully","success"); }}>
                                <DeleteOutlineIcon />
                            </div>
                            <div className='col-md-5 ' onClick={() => { updateNote(note) }}>
                                <EditIcon />
                            </div>
                        </div>
                    </div>
                    <p className="card-text"> {note.description}</p>
                </div>
            </div>
        </div>
    )
}
