import React from 'react'
import { connect } from 'react-redux'

import Item from '../components/Item'

class ItemsList extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        {this.props.items.map((item, id) => <Item key={id} item={item} salary={this.props.salary} />)}
      </div>
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
