import posed, {PoseGroup} from 'react-pose'
import {css as emoCSS} from 'emotion'
import styled from 'react-emotion'

const css = (...args) => ({className: emoCSS(...args)})

const AccordionButton = styled('button')(
  {
    cursor: 'pointer',
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 20,
    border: 'none',
    backgroundColor: 'unset',
    ':focus': {
      outline: 'none',
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
  },
  ({isOpen}) =>
    isOpen
      ? {
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
        }
      : null,
)

const AccordionContents = posed.div({
  open: {maxHeight: 200},
  closed: {maxHeight: 0},
})

const AccordionItem = styled('div')({
  display: 'grid',
  gridTemplate: 'auto auto',
  gridGap: 4,
  gridAutoFlow: 'row',
})

const BelowTabItem = posed.div({
  open: {opacity: 1, top: 0},
  closed: {opacity: 0, top: 30},
})

const AboveTabItem = posed.div({
  open: {opacity: 1, bottom: 0},
  closed: {opacity: 0, bottom: 30},
})

function preventClose(state, changes) {
  if (changes.type === 'closing' && state.openIndexes.length < 2) {
    return {...changes, openIndexes: state.openIndexes}
  }
  return changes
}

function single(state, changes) {
  if (changes.type === 'opening') {
    return {openIndexes: changes.openIndexes.slice(-1)}
  }
  return changes
}

function combineReducers(...reducers) {
  return (state, changes) => {
    for (let reducer of reducers) {
      const result = reducer(state, changes)
      if (result !== changes) {
        return result
      }
    }
    return changes
  }
}

export {
  css,
  AccordionButton,
  AccordionItem,
  AccordionContents,
  AboveTabItem,
  BelowTabItem,
  combineReducers,
  preventClose,
  single,
}
