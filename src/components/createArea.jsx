import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [isExpanded, setExpanded]= useState(false); 
    const [note, setNote]= useState({
        title: "",
        content: ""
    }); 
function submitNote(event){
    event.preventDefault(); 
    props.onAdd(note); 
    setNote({
        title: "",
        content: ""
    }); 
}; 

    function handleChange(event){
        const {name, value}= event.target; 
        setNote((prevNote)=> {
            return (
                {
                    ...prevNote,
                    [name]: value
                }
            )
        })
    }

function expand(){
    setExpanded(true); 
}

  return (
    <div>
      <form className="create-note">
      {
        isExpanded ? <input onChange= {handleChange} name="title" value= {note.title} placeholder="Title" /> : null
      }
        
        <textarea onChange= {handleChange} onClick= {expand} name="content" value= {note.content}  placeholder="Take a note..." rows= {isExpanded ? 3 : 1} />
        <Zoom in= {isExpanded ? true : false}>
            <Fab onClick= {submitNote}><AddIcon/></Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
