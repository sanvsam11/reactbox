import React from 'react'
import './Notes.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
export default function Notes({notes, handleClick, currentId, handleAdd}){
    const classes = useStyles();
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
                    {/* <Card className={classes.root} onClick={handleClick}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {note.title}
                            </Typography>
                            <Typography variant="body2" component="p">
                            {note.text}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card> */}
                </li>)}
        </ul>
        <button onClick={e=>handleAdd()}>Add Note</button>
        </div>
    )
}