import React, { useEffect, useState } from 'react';
//import notes from '../assets/data';
import {Link} from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { createNote, deleteNote, getNotesById, updateNote } from '../services/notes';






const NotePage = ({ match, history }) => {

    const { params: { id : noteId } } =  match ;

    //const note = notes.find( note => note.id === Number( noteId ) );

    const [note, setNote] = useState(null);

    useEffect(() => {

        getNotesById(noteId)
        .then(note => {

            setNote(note);
        })
        .catch(error => console.log(error))


    }, [noteId]);

    const handleInput = (e) => {

        setNote({...note, body: e.target.value});

    }

    const handleSubmit = () => {

        if (noteId !== 'new' && !note.body ) {
            deleteNote(noteId, note);
        }
        else if(noteId !== 'new') 
        {
            updateNote(noteId, note);

        }else if (noteId === 'new' && note !== null)
        {

            createNote(note)
        }
    };

    const handleDelete = () => {

        deleteNote(noteId, note);
        history.push('/');
    }


    return (

        <div className ="note" >
            <div className = "note-header" >

                <h3>
                    <Link to = "/" onClick = { handleSubmit } >
                        <ArrowLeft />
                    </Link>
                </h3>
                
                <button onClick = { handleDelete }  > Delete </button>
                
            </div>
            <textarea value = {note?.body} onChange = { handleInput } >

            </textarea>
        </div>
    )
}

export default NotePage;
