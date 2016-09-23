import React from 'react'
import { connect } from 'react-redux'

import { salarySelectors } from '../../core/salary'
import { taxSelectors } from '../../core/tax'

/**
 * period enum types
 */
const ANNUAL = 1
const MONTHLY = 12
const BIWEEKLY = 26 // 26 bi-weekly paychecks per year
const WEEKLY = 52
const DAILY = 365

class SalaryPeriodBreakdown extends React.Component {
  /**
   * calculate the salary per time period
   * @param  {Number} salary the user's salary
   * @param  {Number} tax    the user's tax
   * @param  {Number} period time period
   * @return {String}        localeString of the salary per period
   */
  _getPeriodSalary (salary, tax, period) {
    return ((salary * (1 - tax)) / period).toLocaleString()
  }

  render () {
    return (
      <div>
        <h3>Salary Breakdown (Post Tax)</h3>
        <table>
          <tbody>
            <tr>
              <td>Annual    - ${this._getPeriodSalary(this.props.salary, this.props.tax, ANNUAL)}</td><td> &middot; </td>
              <td>Monthly   - ${this._getPeriodSalary(this.props.salary, this.props.tax, MONTHLY)}</td><td> &middot; </td>
              <td>Bi-weekly - ${this._getPeriodSalary(this.props.salary, this.props.tax, BIWEEKLY)}</td><td> &middot; </td>
              <td>Weekly    - ${this._getPeriodSalary(this.props.salary, this.props.tax, WEEKLY)}</td><td> &middot; </td>
              <td>Daily     - ${this._getPeriodSalary(this.props.salary, this.props.tax, DAILY)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    salary: salarySelectors.getSalary(state),
    tax: taxSelectors.getTax(state)
  }
}

const mapDispatchToProps = null

SalaryPeriodBreakdown = connect(mapStateToProps, mapDispatchToProps)(SalaryPeriodBreakdown)

export default SalaryPeriodBreakdown
