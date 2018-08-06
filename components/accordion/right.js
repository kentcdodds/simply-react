import React from 'react'
import {Accordion} from './base'
import {css, AccordionButton, AccordionItem, AccordionContents} from '../shared'

function RightAccordion({items, ...props}) {
  return (
    <Accordion {...props}>
      {({openIndexes, handleItemClick}) => (
        <div>
          {items.map((item, index) => (
            <AccordionItem key={item.title} {...css({gridAutoFlow: 'column'})}>
              <AccordionButton
                {...css({textAlign: 'left', minWidth: 80})}
                isOpen={openIndexes.includes(index)}
                onClick={() => handleItemClick(index)}
              >
                {item.title}{' '}
                <span>{openIndexes.includes(index) ? '👉' : '👈'}</span>
              </AccordionButton>
              <AccordionContents
                {...css({overflowY: 'hidden', textAlign: 'justify'})}
                pose={openIndexes.includes(index) ? 'open' : 'closed'}
              >
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
