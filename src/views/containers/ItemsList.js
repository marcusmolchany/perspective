import React from 'react'
import { connect } from 'react-redux'

import Item from '../components/Item'
import { itemsSelectors } from '../../core/items'
import { salarySelectors } from '../../core/salary'
import { taxSelectors } from '../../core/tax'

class ItemsList extends React.Component {
  render () {
    return (
      <div>
        {this.props.items.map((item, id) => <Item key={id} item={item} salary={this.props.salary * (1 - this.props.tax)} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: itemsSelectors.getItems(state),
    salary: salarySelectors.getSalary(state),
    tax: taxSelectors.getTax(state)
  }
}
const mapDispatchToProps = null

ItemsList = connect(mapStateToProps, mapDispatchToProps)(ItemsList)

export default ItemsList
