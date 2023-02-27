import Header from './Header';
import CreateArea from './CreateArea';
import Note from './Note';
import { useState } from 'react';
import Count from './Count';

function App() {
  const[notes,setNotes] = useState([])
  function addNote(newNote){
    setNotes(prevValue => {
      return [...prevValue,newNote];
    })
  }

  function deleteNotes(id){
    setNotes(preValue =>{
      return [...preValue.filter((note,index) => index !== id)]
    })
  }
  return (
    <div>
      <Header/>
      <Count count={notes.length === 0?"Empty":`Showing ${notes.length} Notes in Database`}/>
      <CreateArea onAdd={addNote}/>
      {notes.map((note,index) => (
        <Note 
        key={index} 
        id={index} 
        title={note.title} 
        content={note.content}
        onDelete={deleteNotes}
        />
      ))}
    </div>
  );
}

export default App;
