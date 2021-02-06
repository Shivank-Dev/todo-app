import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import TodoApp from "./components/todo-app/todo-app";

ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  document.getElementById('root')
);

