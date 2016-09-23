import React from 'react'

export default class Item extends React.Component {
  _getPercentageOfSalary () {
    return (this.props.item.price / this.props.salary) * 100
  }

  render () {
    return (
      <div>
        <h3>{this.props.item.name}</h3>
        <span>{this._getPercentageOfSalary()}% of your salary</span>
      </div>
    )
  }
}
