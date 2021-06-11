import React from 'react'
import './NoteView.css'
import Paper from '@material-ui/core/Paper';
export default function NoteView({id, title, text, handleChange}){
    return(
        
            <Paper className='full'>
                <input 
                    type='text'
                    value={title}
                    onChange={e=>handleChange(e, id)}/>
                <textarea value={text} onChange={e=>handleChange(e, id)} />
            </Paper>
        
    )
}