import React from 'react'
import {Accordion} from './base'
import {css, AccordionButton, AccordionItem, AccordionContents} from '../shared'

function RightAccordion({items, ...props}) {
  return (
    <Accordion {...props}>
      {({openIndexes, handleItemClick}) => (
        <div>
          {items.map((item, index) => (
            <AccordionItem key={item.title} direction="horizontal">
              <AccordionButton
                isOpen={openIndexes.includes(index)}
                onClick={() => handleItemClick(index)}
              >
                <span>{openIndexes.includes(index) ? '👉' : '👈'}</span>{' '}
                {item.title}
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

export {RightAccordion}
