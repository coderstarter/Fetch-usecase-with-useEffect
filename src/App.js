import React, { useState, useMemo, useEffect } from 'react';

function App() {
  const [todos, setToDos] = useState([]);
  const totalTodos = useMemo(() => todos.length, [todos]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((data) => data.json())
      .then((data) => setToDos(data))
  }, []);

  return(
    <div>
      <h1>ToDo Application {totalTodos}</h1>
      <ul>
        {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
