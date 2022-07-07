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

    function deleteNote(id){
        setNotes(prevNotes=> {
            return (
                prevNotes.filter((note, index)=> {
                    return index !== id ;
                })
            ) 
        })
    }

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
                            key= {i}
                            id= {i}
                            title= {note.title}
                            content= {note.content}
                            onDelete= {deleteNote}
                        />
                    )

                })
            }
            <Footer/>
        </div>
    ); 
}

export default App; 