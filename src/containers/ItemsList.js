import React from 'react'
import { connect } from 'react-redux'

import Item from '../components/Item'

class ItemsList extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      this.props.items.map((item) => <Item item={item} salary={this.props.salary} />)
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    salary: state.salary
  }
}
const mapDispatchToProps = null

ItemsList = connect(mapStateToProps, mapDispatchToProps)(ItemsList)

export default ItemsList
