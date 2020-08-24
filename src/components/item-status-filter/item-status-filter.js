import React,{Component} from 'react';

import './item-status-filter.css';

class ItemStatusFilter extends Component {
  state = {
    activeBtn: 'All'
  }

  filterItem = ({target:{textContent}}) => {
    const action = textContent.toLowerCase()
    this.props.onFilterItem(action);
    this.setState({activeBtn: textContent})
  }

  buttonList = ['All', 'Active', 'Done']
  
  render() {
    const getFilterPanel = buttonList => buttonList.map(item => {
        return (
        <button type="button"
                className={this.state.activeBtn === item ? "btn btn-info" : "btn btn-outline-secondary"}
                onClick = {this.filterItem}>
          {item}
        </button>)
      })

    return (
      <div className="btn-group">
        {getFilterPanel(this.buttonList)}
      </div>
    );
  };
}

export default ItemStatusFilter;
