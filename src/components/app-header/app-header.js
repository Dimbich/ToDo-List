import React from 'react';
import './app-header.css';

const AppHeader = ({toDo = 3, done = 5}) => {
  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>{toDo} more to do, {done} done</h2>
    </div>
  );
};

export default AppHeader;
