import React from 'react';
import Header from '../components/header/Header';
import SearchPanel from '../components/search-panel/SearchPanel';
import TodoList from '../components/todo-list/TodoList';
import ItemStatusFilter from '../components/item-status-filter/ItemStatusFilter';

import './App.css';

const App = () => {
  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 }
  ];

  return (
    <div className="todo-app">
      <Header toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} />
    </div>
  );
};

export default App;
