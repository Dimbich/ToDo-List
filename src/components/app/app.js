import React, {Component} from 'react';

import './app.css';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';

export default class App extends Component {
    state = {
        todoDate: [
            { label:'Выучить React', important: false, id: 1 },
            { label:'Создать приложение', important: false, id: 2 },
            { label:'Устроиться на работу', important: true, id: 3 }
        ]    
    };

    deleteItem = (id) => {
        this.setState(({ todoDate }) => {
          const idx = todoDate.findIndex((el) => el.id === id);
    
          const newArray = [
            ...todoDate.slice(0, idx),
            ...todoDate.slice(idx + 1)
          ];
    
          return {
            todoDate: newArray
          };
        });
      };
    render(){
        let {todoDate} = this.state;
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
                </div>
            
                <TodoList todos={todoDate} 
                onDeleted = { this.deleteItem }/>
             </div>
        );        
    }
}

