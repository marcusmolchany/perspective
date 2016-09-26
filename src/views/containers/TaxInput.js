import React from 'react'
import { connect } from 'react-redux'

import { taxActions } from '../../core/tax'
import FancyInput from '../components/FancyInput'

class TaxInput extends React.Component {
  render () {
    return (
      <FancyInput
        type="number"
        label="Tax rate"
        placeholder="0.33"
        htmlId="taxInput"
        onChange={this.props.onChange.bind(this)}
      />
    )
  }
}

const mapStateToProps = null
const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (tax) => dispatch(taxActions.changeTax(Number(tax)))
  }
}

TaxInput = connect(mapStateToProps, mapDispatchToProps)(TaxInput)

export default TaxInput
