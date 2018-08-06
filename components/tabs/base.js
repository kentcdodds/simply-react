import React from 'react'
import {Accordion} from '../accordion/base'
import {single, preventClose, combineReducers} from '../shared'

function Tabs({stateReducer = (state, changes) => changes, ...props}) {
  return (
    <Accordion
      stateReducer={combineReducers(single, preventClose, stateReducer)}
      {...props}
    />
  )
}

export {Tabs}
