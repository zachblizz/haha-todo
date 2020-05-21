import React from 'react';

import Counter from './features/counter/Counter';
import Todo from './features/todo/Todo';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Todo />
      </header>
    </div>
  );
}

export default App;
