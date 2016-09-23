import React from 'react'

import ItemsList from '../containers/ItemsList'
import SalaryInput from '../containers/SalaryInput'

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
