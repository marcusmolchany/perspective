import React from 'react'
import { connect } from 'react-redux'

import { taxActions } from '../../core/tax'

class TaxInput extends React.Component {
  render () {
    return (
      <div>
        <label>
          Enter your tax rate:
          <input type="number" placeholder="0.33" onChange={(e) => this.props.onChange(e.target.value)} />
        </label>
      </div>
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
