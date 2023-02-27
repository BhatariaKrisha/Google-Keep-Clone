import React from 'react'
import './index.css'
import { useState } from 'react'
import {IoIosAdd} from 'react-icons/io'

export default function CreateArea({submitButton,onAdd}) {
    const [isExpanded,setExpanded] = useState(false);
    const [note, setNote] = useState({
        title:"",
        content:"",
    });
    function handleChange(e){
        const {name,value} = e.target
        setNote((preValue) => {
            return{
              ...preValue,
              [name]:value, 
            }
        })
    }

    function handlExpanded(){
        setExpanded(true);
    }
    function submitButton(event){
        onAdd(note)
        setNote({
                title:"",
                content:"",
        })
        event.preventDefault()
    }
  return (
    <div>
      <form>
        {isExpanded && (
             <input type="text" value={note.title} placeholder='Title' name='title' onChange={handleChange}/>
        )}
       
        <p>
            <textarea name='content' value={note.content} 
            placeholder='Take a note...' onChange={handleChange}
            onClick={handlExpanded}
            rows={isExpanded ? 3:1}
            ></textarea>
        </p>
        <button onClick={submitButton}><IoIosAdd size={35}/></button>
      </form>
    </div>
  )
}
