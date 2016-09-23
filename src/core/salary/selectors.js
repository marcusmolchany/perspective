/**
 * selector to get the salary from the redux application state
 * @param  {Object} state redux application state
 * @return {Number}       the user's salary
 */
export const getSalary = (state) => state.salary
