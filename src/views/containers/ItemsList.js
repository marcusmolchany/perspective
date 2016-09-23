import React from 'react'
import { connect } from 'react-redux'

import Item from '../components/Item'
import { itemsSelectors } from '../../core/items'
import { salarySelectors } from '../../core/salary'

class ItemsList extends React.Component {
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
    items: itemsSelectors.getItems(state),
    salary: salarySelectors.getSalary(state)
  }
}
const mapDispatchToProps = null

ItemsList = connect(mapStateToProps, mapDispatchToProps)(ItemsList)

export default ItemsList
