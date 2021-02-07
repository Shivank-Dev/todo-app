import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import TodoApp from "./components/todo-app/todo-app";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
    <ToastContainer position="top-right"
      autoClose={5000}
      hideProgressBar={true} />
  </React.StrictMode>,
  document.getElementById('root')
);

