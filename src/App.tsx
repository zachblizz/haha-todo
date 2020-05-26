import React from 'react';

import Counter from './features/counter/Counter';
import Todo from './features/todo';
import OldTodoContainer from "./components/container/OldTodoContainer";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <OldTodoContainer />
        <hr />
        <Todo />
      </header>
    </div>
  );
}

export default App;
