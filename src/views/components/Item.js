import React from 'react'

export default class Item extends React.Component {
  _getPercentageOfSalary (price) {
    return (price / this.props.salary) * 100
  }

  _getPrettyPercentage (percentage) {
    return percentage === Infinity ? '-' : percentage.toFixed(2)
  }

  render () {
    return (
      <div>
        <h3>{this.props.item.name} - (${this.props.item.price})</h3>
        <span>{this._getPrettyPercentage(this._getPercentageOfSalary(this.props.item.price))}% of your salary</span>
      </div>
    )
  }
}
