/**
 * selector to get the items from the redux application state
 * @param  {Object} state redux application state
 * @return {Array}        the items
 */
export const getItems = (state) => [...state.items]
