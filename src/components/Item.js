import React from 'react'

export default class Item extends React.Component {
  _getPercentageOfSalary () {
    return (this.props.item.price / this.props.salary) * 100
  }

  _getPrettyPercentage (percentage) {
    return percentage === Infinity ? '-' : percentage.toFixed(2)
  }

  render () {
    return (
      <div>
        <h3>{this.props.item.name} - (${this.props.item.price})</h3>
        <span>{this._getPrettyPercentage(this._getPercentageOfSalary())}% of your salary</span>
      </div>
    )
  }
}
