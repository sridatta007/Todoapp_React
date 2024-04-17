import React, {useEffect, useState} from 'react';
import './App.css';
import {Button, FormControl, Input, InputLabel} from '@material-ui/core'
import Todo from './Todo'
import db from './firebase'
import { serverTimestamp } from 'firebase/firestore';


function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //when app loads, load data from db
  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc =>({id: doc.id ,todo:doc.data().todo}) ))
    })
  }, []);

  const addTodo = (event => {
    //on click of the button
    event.preventDefault(); // will stop the page refresh
    db.collection('todos').add({
      todo: input,
      timestamp: serverTimestamp()
    })
    // setTodos([...todos, input]); //Spread Operator for getting all the pre values
    setInput(''); //To clear up the input
  })
  return (
    <div className="App">
      <h1>My ToDo</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}></Input>
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
            Add Todo
        </Button>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>   //created Component and used props
        ))}
      </ul>
    </div>
  );
}

export default App;
