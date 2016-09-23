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

export function saveState (state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('@reduxState', serializedState)
  } catch (err) {
    // ignore write errors
  }
}
