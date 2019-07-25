import React, { Component } from 'react';
import Header from '../components/header';
import SearchPanel from '../components/search-panel';
import TodoList from '../components/todo-list';
import ItemStatusFilter from '../components/item-status-filter';
import ItemAddForm from './../components/item-add-form';

import './App.css';

export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch')
    ]
  };

  createTodoItem(label) {
    return {
      label,
      done: false,
      important: false,
      id: this.maxId++
    };
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);

    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    const todos = [...arr];
    todos.splice(idx, 1, newItem);
    return todos;
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState((state) => {
      const todoData = [...state.todoData, newItem];
      return { todoData };
    });
  };

  deleteItem = (id) => {
    this.setState((state) => {
      const todoData = state.todoData.filter((item) => item.id !== id);
      return { todoData };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, 'done') };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, 'important') };
    });
  };

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <Header toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <ItemAddForm addItem={this.addItem} />
      </div>
    );
  }
}
