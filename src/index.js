import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';

const App = () => {
    const login = <span> Log in</span>,
          isLogin = false;

    return (
        <div>
            { isLogin ? null : login }
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
 };
 

ReactDOM.render(<App/>, document.getElementById('root'));