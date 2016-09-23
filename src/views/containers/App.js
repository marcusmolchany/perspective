import React from 'react'

import ItemsList from './ItemsList'
import SalaryInput from './SalaryInput'
import SalaryPeriodBreakdown from './SalaryPeriodBreakdown'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <SalaryInput />
        <SalaryPeriodBreakdown />
        <ItemsList />
      </div>
    )
  }
}
