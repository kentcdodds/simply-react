import React from 'react'
import {Accordion} from './base'
import {css, AccordionButton, AccordionItem, AccordionContents} from '../shared'

function LeftAccordion({items, ...props}) {
  return (
    <Accordion {...props}>
      {({openIndexes, handleItemClick}) => (
        <div>
          {items.map((item, index) => (
            <AccordionItem key={item.title} direction="horizontal">
              <AccordionContents isOpen={openIndexes.includes(index)}>
                {item.contents}
              </AccordionContents>
              <AccordionButton
                isOpen={openIndexes.includes(index)}
                onClick={() => handleItemClick(index)}
              >
                <span>{openIndexes.includes(index) ? '👈' : '👉'}</span>{' '}
                {item.title}
              </AccordionButton>
            </AccordionItem>
          ))}
        </div>
      )}
    </Accordion>
  )
}

export {LeftAccordion}
