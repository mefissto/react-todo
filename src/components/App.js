import React from 'react';
import Header from './Header';
import SearchPanel from './SearchPanel';
import TodoList from './TodoList';

const App = () => {
  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 }
  ];

  return (
    <div>
      <Header />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
};

export default App;
