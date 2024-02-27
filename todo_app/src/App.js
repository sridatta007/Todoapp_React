import React, {useState} from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState(['task 1', 'task 2', 'task 3']);
  const [input, setInput] = useState('');

  const addTodo = (event => {
    //on click of the button
    event.preventDefault(); // will stop the page refresh
    console.log("Button clicked");
    setTodos([...todos, input]);
    setInput(['']);
  })
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <form>
      <input value={input} onChange={event => setInput(event.target.value)}/>
      {/* <input /> */}
      <button onClick={addTodo}>Add Todo</button>
      </form>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
