import React from 'react'

import ItemsList from '../containers/ItemsList'
import SalaryInput from '../containers/SalaryInput'

export default class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <SalaryInput />
        <ItemsList />
      </div>
    )
  }
}
