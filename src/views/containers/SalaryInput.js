import React from 'react'
import { connect } from 'react-redux'

import { salaryActions } from '../../core/salary'
import FancyInput from '../components/FancyInput'

class SalaryInput extends React.Component {
  render () {
    return (
      <FancyInput
        type="number"
        label="Salary"
        placeholder="55000"
        htmlId="salaryInput"
        onChange={this.props.onChange.bind(this)}
      />
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
