import React from 'react'
import './Notes.css'
export default function Notes({notes, handleClick, currentId, handleAdd}){
    return(
        <div>
            <ul>
            {notes.map(note=>
                <li key={note.id}>
                    <button 
                        className={currentId===note.id?'selected':null} 
                        onClick={e=>handleClick(note)}>
                        {note.title}
                    </button>
                </li>)}
        </ul>
        <button onClick={e=>handleAdd()}>Add Note</button>
        </div>
    )
}