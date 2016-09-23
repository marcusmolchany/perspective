import React from 'react'
import { connect } from 'react-redux'

import { changeSalary } from '../actions/salary'

class SalaryInput extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <label>
          Enter your salary:
          <input type="number" placeholder="90000" onChangeText={this.props.onChange} />
        </label>
      </div>
    )
  }
}

const mapStateToProps = null
const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (salary) => dispatch(changeSalary(Number(salary))) //todo: ya dun goofed here
  }
}

SalaryInput = connect(mapStateToProps, mapDispatchToProps)(SalaryInput)

export default SalaryInput
