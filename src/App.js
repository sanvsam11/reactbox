import './App.css';
import Notes from './modules/Notes'
import NoteView from './modules/NoteView'
import {Container, Row, Col, NavItem} from 'react-bootstrap'
import NotesData from './Notes'
import React, {useEffect, useState} from 'react'
function App() {
  const [notes, setNotes] = useState(NotesData)
  const [note, setNote] = useState('')

  const handleClick=noteVal=>{
    setNotes(current=>current.map(item=>{
      if(note.id===item.id)
        return {
          "id":item.id,
          "text":note.text,
          "title":note.title
        }
        else
          return item
    }))
    setNote(noteVal)
    console.log(note)
  }
  const handleChange=(e, id)=>{
    const {value, type} = e.target
    console.log(type)
    console.log(value)
    setNote(current=>{
      return{
        "id":current.id,
        "text":type=='textarea'?value:current.text,
        "title":type=='text'?value:current.title
      }
    })
    
  }
  const handleAdd=()=>{
    setNotes(oldNotes=>{
      const idNew = oldNotes.length+2
      console.log(idNew)
      return [...oldNotes,{
        "id": idNew,
        "title":"untitled",
        "text":""
    }]
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Note App
        </p>
      </header>
      <Container>
        <Row>
          <Col sm={2}>
            <Notes 
              notes={notes} 
              currentId={note.id}
              handleClick={handleClick}
              handleAdd={handleAdd}
                />
          </Col>
          <Col sm={10}>
            <NoteView handleChange={handleChange} 
                      id={note.id} 
                      text={note.text}
                      title={note.title}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
