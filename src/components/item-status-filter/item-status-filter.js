import React,{Component} from 'react';

import './item-status-filter.css';

class ItemStatusFilter extends Component {

  filterItem = ({target:{textContent}}) => {
    const action = textContent.toLowerCase()
    this.props.onFilterItem(action);
  }

  render() {
    return (
      <div className="btn-group">
        <button type="button"
                className="btn btn-info"
                onClick = {this.filterItem}>
          All
        </button>
        <button type="button"
                className="btn btn-outline-secondary"
                onClick = {this.filterItem}>
          Active
        </button>
        <button type="button"
                className="btn btn-outline-secondary"
                onClick = {this.filterItem}>
          Done
        </button>
      </div>
    );
  };
}

export default ItemStatusFilter;
