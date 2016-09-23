import React from 'react'
import { connect } from 'react-redux'

import { salaryActions } from '../../core/salary'

class SalaryInput extends React.Component {
  render () {
    return (
      <div>
        <label>
          Enter your salary:
          <input type="number" placeholder="90000" onChange={(e) => this.props.onChange(e.target.value)} />
        </label>
      </div>
    )
  }
}

const mapStateToProps = null
const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (salary) => dispatch(salaryActions.changeSalary(Number(salary)))
  }
}

SalaryInput = connect(mapStateToProps, mapDispatchToProps)(SalaryInput)

export default SalaryInput
