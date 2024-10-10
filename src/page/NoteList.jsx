import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';

export default function NoteList() {

  const [notes, setNote] = useState(
   [
    { title: "Note 1", text: "This is the content of note 1." },
    { title: "Note 2", text: "This is the content of note 2." },
   ]
  );

  const fetchNotes = async () => {
      try {
        const response = await axios.get("http://localhost:3500/notes");
        setNote(response.data);
      } catch (error) {
        console.log(error);
      }
  }

  useEffect(()=>{
    // fetchNotes();
  },[])
  return (
    <div id='noteList'>
      {
        notes == null ? ("Data Not Found ") :(
          notes.map((note, index) => (
            <div className="container" key={index}>
              <div className="title">
                <h3>{note.title}</h3> {/* Render dynamic title */}
              </div>
              <div className="text">
                <p>{note.text}</p> {/* Render dynamic content */}
              </div>
              <div className="action">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          ))
        )}
      
    </div>
  )
}
