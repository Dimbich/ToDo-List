import React, {Component} from 'react';

import './app.css';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

export default class App extends Component {
    maxId = 100;
    state = {
        todoDate: [
          this.createItem('Выучить React'),
          this.createItem('Создать приложение'),
          this.createItem('Устроиться на работу')
        ],
        search: ''
    };

    createItem (label) {
      return {
        label,
        important: false,
        done: false,
        id: this.maxId++
      }
    }

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
    
    addItem = (label) => {
      this.setState(({todoDate}) => {
        return {todoDate:[...todoDate, this.createItem(label)]}
      })
    }

    onToggleProp = (arr, id, propName) => {
      const idx = arr.findIndex((el) => el.id === id);
      const newItem = {...arr[idx], [propName]: !arr[idx][propName]}

      return [
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx + 1)
      ];  
    }
    
    onToggleImportant = (id) => {
      this.setState(({todoDate}) => {
        return {
          todoDate: this.onToggleProp(todoDate, id, 'important')
        }
      })  
    }

    onToggleDone = (id) => {
      this.setState(({todoDate}) => {
        return {
          todoDate: this.onToggleProp(todoDate, id, 'done')
        }
      })
    }

    onFilterItem = (filterName) => {
      this.setState(({todoDate}) => {
        switch (filterName) {
          case 'all':
            todoDate = [...todoDate]
            break;
          case 'done':
            todoDate = todoDate.filter(item => item.done)
            break;
          case 'active':     
            todoDate = todoDate.filter(item => !item.done)
            break;
          default:
            break;
        }
        return {todoDate}
      })
    }

    searchItem(items, search) {
      return search ? items.filter(item => item.label.indexOf(search) > -1 ) : items
    }

    onSearch = ({target:{value:search}}) => {
      this.setState({search})
    }

    render(){
      const {todoDate,search} = this.state;
      
      const doneCount = todoDate.filter(item => item.done).length;
      const todoCount = todoDate.length - doneCount
      
      const visibleItems = this.searchItem(todoDate, search)
      return (
          <div className="todo-app">
              <AppHeader toDo={todoCount} done={doneCount} />
              <div className="top-panel d-flex">
              <SearchPanel onSearch = {this.onSearch}/>
              <ItemStatusFilter  onFilterItem = {this.onFilterItem}/>
              </div>
          
              <TodoList 
                todos={visibleItems} 
                onDeleted = { this.deleteItem }
                onToggleImportant = {this.onToggleImportant}
                onToggleDone = {this.onToggleDone}/>
              <ItemAddForm  onItemAdded = {this.addItem}/>
            </div>
      );        
    }
}

