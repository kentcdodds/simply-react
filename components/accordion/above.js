import React from 'react'
import {Accordion} from './base'
import {AccordionButton, AccordionItem, AccordionContents} from '../shared'

function AboveAccordion({items, ...props}) {
  return (
    <Accordion {...props}>
      {({openIndexes, handleItemClick}) => (
        <div>
          {items.map((item, index) => (
            <AccordionItem key={item.title} direction="vertical">
              <AccordionContents isOpen={openIndexes.includes(index)}>
                {item.contents}
              </AccordionContents>
              <AccordionButton
                isOpen={openIndexes.includes(index)}
                onClick={() => handleItemClick(index)}
              >
                {item.title}{' '}
                <span>{openIndexes.includes(index) ? '👆' : '👈'}</span>
              </AccordionButton>
            </AccordionItem>
          ))}
        </div>
      )}
    </Accordion>
  )
}

export {AboveAccordion}
