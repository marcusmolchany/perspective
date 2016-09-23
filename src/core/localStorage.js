/**
 * loads the serialized application state from localStorage and turns it into a javsascript object
 * @return {Object|undefined} the locoalStorage javascript object or undefined.
 *                                returning undefined is important here for the redux reducers to
 *                                load their own default states
 */
export function loadState () {
  try {
    const serializedState = localStorage.getItem('@reduxState')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

/**
 * saves the serialized application state to localStorage as a serialized object
 * @param  {Object} state redux application state
 */
export function saveState (state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('@reduxState', serializedState)
  } catch (err) {
    // ignore write errors
  }
}
