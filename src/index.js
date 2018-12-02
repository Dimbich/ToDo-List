import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';

const App = () => {
    const login = <span> Log in</span>,
          isLogin = false,
          todoDate = [
              { label:'Выучить React', important: false, id: 1 },
              { label:'Создать приложение', important: false, id: 2 },
              { label:'Устроиться на работу', important: true, id: 3 },
          ];

    return (
        <div>
            { isLogin ? null : login }
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoDate}/>
        </div>
    );
 };
 

ReactDOM.render(<App/>, document.getElementById('root'));