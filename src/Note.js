import React from 'react'
import './index.css'
import {MdDelete} from "react-icons/md"

export default function Note({title,content,onDelete,id}) {
  return (
    <div className='note'>
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={()=>onDelete(id)}><MdDelete size={25}/></button>
    </div>
  )
}
