import React from 'react';
import Header from './Header';
import SearchPanel from './SearchPanel';
import TodoList from './TodoList';

const App = () => {
  return (
    <div>
      <Header />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

export default App;
