import React from 'react'
import './Notes.css'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography';

export default function Notes({notes, handleClick, currentId, handleAdd}){
    //   console.log(notes, currentId)
    return(
        <div>
            <Button onClick={e=>handleAdd()}>Add Note</Button>
            <ul>
            {notes.map(note=>
                <li key={note.id}>
                    <Card elevation={3}
                        className={currentId===note.id?'selected':null} 
                        onClick={e=>handleClick(note)}>
                            <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                {note.title} 
                                </Typography>
                                <Typography variant="body2" component="p">
                                {note.text}</Typography>
                            </CardContent>
                    </Card>
                </li>)}
        </ul>
        
        </div>
    )
}