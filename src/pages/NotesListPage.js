import React, {useEffect, useState} from 'react';
//import notes from '../assets/data';
import { getNotes } from '../services/notes';
import ListItem from '../components/ListItem'
import { AddButton } from '../components/addButton';

const NotesListPage = () => {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
       getNotes()
       .then(notes => {
           setNotes(notes)
       })
       .catch(error => console.log(error));
    }, [])

    return (

        <div className = "notes" >

            <div className = "notes-header" >
                <h2 className = "notes-title" >&#9782; Notes </h2>
                <p className = "notes-count" >{ notes.length }</p>
            </div>

            <div className="notes-list">
                
                { notes.map( ( note, index ) => 

                    <ListItem key = { index } note = { note } />

                )}

            </div>

               <AddButton />     

        </div>
    )
}

export default NotesListPage;
