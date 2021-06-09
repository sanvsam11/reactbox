import React from 'react'
import './NoteView.css'
export default function NoteView({id, title, text, handleChange}){
    return(
        
            <div>
                <input 
                    type='text'
                    value={title}
                    onChange={e=>handleChange(e, id)}/>
                <textarea value={text} onChange={e=>handleChange(e, id)} />
            </div>
        
    )
}