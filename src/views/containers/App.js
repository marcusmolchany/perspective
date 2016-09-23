import React from 'react'

import ItemsList from './ItemsList'
import SalaryInput from './SalaryInput'
import SalaryPeriodBreakdown from './SalaryPeriodBreakdown'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Perspective</h1>
        <SalaryInput />
        <SalaryPeriodBreakdown />
        <ItemsList />
      </div>
    )
  }
}
