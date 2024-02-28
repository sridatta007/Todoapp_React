import React, {useState} from 'react';
import './App.css';
import {Button, FormControl, Input, InputLabel} from '@material-ui/core'
import Todo from './Todo'

function App() {

  const [todos, setTodos] = useState(['task 1', 'task 2', 'task 3']);
  const [input, setInput] = useState('');

  const addTodo = (event => {
    //on click of the button
    event.preventDefault(); // will stop the page refresh
    console.log("Button clicked");
    setTodos([...todos, input]); //Spread Operator for getting all the pre values
    setInput(''); //To clear up the input
  })
  return (
    <div className="App">
      <h1>Hello World!</h1>
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
          <Todo text={todo}/>   //created Component and used props
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
