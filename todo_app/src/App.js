import React, {useState} from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState(['task 1', 'task 2', 'task 3']);
  const [input, setInput] = useState('');

  const addTodo = (event => {
    //on click of the button
    console.log("Button clicked");
    setTodos([...todos, input]);
  })
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <input value={input} onChange={event => setInput(event.target.value)}/>
      {/* <input /> */}
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
