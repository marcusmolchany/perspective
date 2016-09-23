import React from 'react'

import ItemsList from './ItemsList'
import SalaryInput from './SalaryInput'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <SalaryInput />
        <ItemsList />
      </div>
    )
  }
}
