import React from 'react'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Edit from '@mui/icons-material/Edit';

export default function NoteItem(props) {
    const { note } = props;
    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title">{note.title}</h5>
                        <div className="row">
                            <div className='col-md-5 '>
                                <DeleteOutlinedIcon />
                            </div>
                            <div className='col-md-5 '>
                                <Edit />
                            </div>
                        </div>
                    </div>
                    <p className="card-text"> {note.description}</p>
                </div>
            </div>
        </div>
    )
}
