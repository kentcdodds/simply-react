import React from 'react'
import {Accordion} from './base'
import {
  AccordionButton,
  AccordionItem,
  AccordionContents,
  single,
  preventClose,
  combineReducers,
} from '../shared'

function SinglePreventCloseAccordion({items, ...props}) {
  return (
    <Accordion stateReducer={combineReducers(single, preventClose)} {...props}>
      {({openIndexes, handleItemClick}) => (
        <div>
          {items.map((item, index) => (
            <AccordionItem key={item.title} direction="vertical">
              <AccordionButton
                isOpen={openIndexes.includes(index)}
                onClick={() => handleItemClick(index)}
              >
                {item.title}{' '}
                <span>{openIndexes.includes(index) ? '👇' : '👈'}</span>
              </AccordionButton>
              <AccordionContents isOpen={openIndexes.includes(index)}>
                {item.contents}
              </AccordionContents>
            </AccordionItem>
          ))}
        </div>
      )}
    </Accordion>
  )
}

export {SinglePreventCloseAccordion}
