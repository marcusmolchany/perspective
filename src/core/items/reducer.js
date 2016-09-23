const initialState = [
  {name: 'coffee', price: 3.50},
  {name: 'poke', price: 12.00},
  {name: 'beer', price: 7.00},
  {name: 'coachella', price: 350.00},
  {name: 'iphone', price: 600.00},
  {name: 'spotify', price: 12.00},
  {name: 'yeezys', price: 250.00}
]

/**
 * items reducer
 * @param  {Array} state   the current items list
 * @param  {Object} action redux action
 * @return {Array}         the updated items list
 */
export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
