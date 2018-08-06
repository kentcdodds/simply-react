import React from 'react'
import {Accordion} from './base'
import {css, AccordionButton, AccordionItem, AccordionContents} from '../shared'

function LeftAccordion({items, ...props}) {
  return (
    <Accordion {...props}>
      {({openIndexes, handleItemClick}) => (
        <div>
          {items.map((item, index) => (
            <AccordionItem key={item.title} {...css({gridAutoFlow: 'column'})}>
              <AccordionContents
                {...css({overflowY: 'hidden', textAlign: 'justify'})}
                pose={openIndexes.includes(index) ? 'open' : 'closed'}
              >
                {item.contents}
              </AccordionContents>
              <AccordionButton
                {...css({textAlign: 'left', minWidth: 80})}
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
