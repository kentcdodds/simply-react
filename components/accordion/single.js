import React from 'react'
import {Accordion} from './base'
import {
  AccordionButton,
  AccordionItem,
  AccordionContents,
  single,
} from '../shared'

function SingleAccordion({items, ...props}) {
  return (
    <Accordion stateReducer={single} {...props}>
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

export {SingleAccordion}
