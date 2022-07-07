import React, { useState } from "react";
import Header from "./header"; 
import Footer from "./footer"; 
import Note from "./note"; 
import notes from "../notes"; 
import CreateArea from "./createArea";

function App(){

    const [notes, setNotes]= useState([]); 
    function addNote(newNote){
        setNotes((prevNotes)=> {
            return [...prevNotes, newNote]; 
        }); 
    }; 

    return (
        <div>
            <Header/>
            <CreateArea 
                onAdd= {addNote}
            />
            {
                notes.map((note, i)=> {
                    return (
                        <Note
                            title= {note.title}
                            content= {note.content}
                        />
                    )

                })
            }
            <Footer/>
        </div>
    ); 
}

export default App; 