import React, { useState } from 'react'

export default function NoteEnty() {

    const [noteTitle, setNoteTitle] = useState("");
    const [noteText, setNoteText] = useState("");
    const [noteData, setNoteData] = useState("");

    const noteSubmit = (e) => {
        e.preventDefault();

        setNoteData(
            {
                userId : 1,
                notetitle: noteTitle,
                notetext: noteText
            }
        );
    }
    console.log(noteData)
  return (
    <div id='note-entry'>
        <div className="note-container">
            <h2 className="header">Note Entry</h2>
            <form action="" onSubmit={noteSubmit}>
                <div className="row">
                    <label htmlFor="">Title</label>
                    <input type="text" onChange={(e)=>{ setNoteTitle(e.target.value)}} />
                </div>
                <div className="row">
                    <label htmlFor="">Note</label>
                    <input type="text" onChange={(e)=>{ setNoteText(e.target.value)}} />
                </div>
                <div className="sub-cont">
                    <button >Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}
