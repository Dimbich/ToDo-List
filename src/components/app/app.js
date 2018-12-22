import React from 'react';

import './app.css';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';

const App = () => {
    const todoDate = [
              { label:'Выучить React', important: false, id: 1 },
              { label:'Создать приложение', important: false, id: 2 },
              { label:'Устроиться на работу', important: true, id: 3 },
          ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
            </div>
        
            <TodoList todos={todoDate} />
         </div>
        );
};

export default App;