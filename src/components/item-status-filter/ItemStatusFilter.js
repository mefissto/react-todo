import React, { Component } from 'react';

import './ItemStatusFilter.css';

export default class ItemStatusFilter extends Component {
  render() {
    const { showAll, showActive, showDone } = this.props;

    return (
      <div className="btn-group">
        <button type="button" className="btn btn-info" onClick={showAll}>
          All
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={showActive}
        >
          Active
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={showDone}
        >
          Done
        </button>
      </div>
    );
  }
}
