export const accordionCode = `
const actionTypes = {toggle_index: 'toggle_index'}

function accordionReducer(openIndexes, action) {
  switch (action.type) {
    case actionTypes.toggle_index: {
      const closing = openIndexes.includes(action.index)
      return closing
        ? openIndexes.filter(i => i !== action.index)
        : [...openIndexes, action.index]
    }
    default: {
      throw new Error('Unhandled type in accordionReducer: ' + action.type)
    }
  }
}

function useAccordion({reducer = accordionReducer} = {}) {
  const [openIndexes, dispatch] = React.useReducer(reducer, [0])
  const toggleIndex = index => dispatch({type: actionTypes.toggle_index, index})
  return {openIndexes, toggleIndex}
}

export {useAccordion, accordionReducer, actionTypes}
`.trim()
