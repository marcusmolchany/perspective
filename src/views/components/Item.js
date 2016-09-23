import React from 'react'

export default class Item extends React.Component {
  /**
   * calculate percentage the price is of the user's salary
   * @param  {Number} price price of the item
   * @return {Number}       percentage of salary the item is
   */
  _getPercentageOfSalary (price) {
    return (price / this.props.salary) * 100
  }

  /**
   * format the percentage based on the number value
   * @param  {Number} percentage
   * @return {Number|String}     the percentage fixed to two places or '-' if percentage is Infinity
   */
  _getPrettyPercentage (percentage) {
    return percentage === Infinity ? '-' : percentage.toFixed(2)
  }

  render () {
    return (
      <div>
        <h3>{this.props.item.name} - (${this.props.item.price})</h3>
        <span>{this._getPrettyPercentage(this._getPercentageOfSalary(this.props.item.price))}% of your annual salary</span>
      </div>
    )
  }
}
