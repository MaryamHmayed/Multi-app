import React from "react";
import './note.css';
import  { useState } from 'react';
import Note from './Notes';

const StickyNotes = () => {

  
    const [notes, setNotes] = useState([]);
    const [inputText, setInputText] = useState('');
  
    const addNote = () => {
      if (inputText.trim() !== '') {
        setNotes([...notes, inputText]);
        setInputText('');
      }
    };
  
    const deleteNote = index => {
      const updatedNotes = [...notes];
      updatedNotes.splice(index, 1);
      setNotes(updatedNotes);
    };
  
    return (
      <div >
        <h1>Sticky Notes</h1>
        <input className="input"
          type="text"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
        />
        <button className="addNote" onClick={addNote}>Add Note</button>
        <div className="notes-container">
          {notes.map((note, index) => (
            <Note key={index} text={note} onDelete={() => deleteNote(index)} />
          ))}
        </div>
      </div>
    );
  }



  // return( <>
  //   <form className="note-form" >
  //     <textarea placeholder="Add Note" 
      
    
  //     ></textarea>
  //     <button>Add</button>
  //   </form>
        
      
  
  
  
  
  
  
  

  


export default StickyNotes;
