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
      <div>
        <p>Annual    - ${this._getPeriodSalary(this.props.salary, ANNUAL)}</p>
        <p>Monthly   - ${this._getPeriodSalary(this.props.salary, MONTHLY)}</p>
        <p>Bi-weekly - ${this._getPeriodSalary(this.props.salary, BIWEEKLY)}</p>
        <p>Weekly    - ${this._getPeriodSalary(this.props.salary, WEEKLY)}</p>
        <p>Daily     - ${this._getPeriodSalary(this.props.salary, DAILY)}</p>
      </div>
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
