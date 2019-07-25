import React, { Component } from 'react';

import './ItemAddForm.css';

export default class ItemAddForm extends Component {
  render() {
    return (
      <div className="item-add-form">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => this.props.addItem('new item')}
        >
          Add Item
        </button>
      </div>
    );
  }
}
