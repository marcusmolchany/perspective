import React from 'react'
import { connect } from 'react-redux'

import { salarySelectors } from '../../core/salary'

const ANNUAL = 1
const MONTHLY = 12
const BIWEEKLY = 26 // 26 bi-weekly paychecks per year
const WEEKLY = 52
const DAILY = 365

class SalaryPeriodBreakdown extends React.Component {
  _getPeriodSalary (salary, period) {
    return (salary / period).toLocaleString()
  }

  render () {
    return (
      <table>
        <tbody>
          <tr>
            <td>Annual    - ${this._getPeriodSalary(this.props.salary, ANNUAL)}</td><td> &middot; </td>
            <td>Monthly   - ${this._getPeriodSalary(this.props.salary, MONTHLY)}</td><td> &middot; </td>
            <td>Bi-weekly - ${this._getPeriodSalary(this.props.salary, BIWEEKLY)}</td><td> &middot; </td>
            <td>Weekly    - ${this._getPeriodSalary(this.props.salary, WEEKLY)}</td><td> &middot; </td>
            <td>Daily     - ${this._getPeriodSalary(this.props.salary, DAILY)}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    salary: salarySelectors.getSalary(state)
  }
}

const mapDispatchToProps = null

SalaryPeriodBreakdown = connect(mapStateToProps, mapDispatchToProps)(SalaryPeriodBreakdown)

export default SalaryPeriodBreakdown
