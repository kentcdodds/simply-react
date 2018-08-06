import React from 'react'
import {Tabs} from './base'
import {css, AccordionButton, BelowTabItem} from '../shared'

function StandardTabs({items}) {
  return (
    <Tabs>
      {({openIndexes, handleItemClick}) => (
        <div>
          <div {...css({display: 'flex'})}>
            {items.map((item, index) => (
              <AccordionButton
                kye={item.title}
                isOpen={openIndexes.includes(index)}
                onClick={() => handleItemClick(index)}
              >
                {item.title}
              </AccordionButton>
            ))}
          </div>
          <div
            {...css({
              position: 'relative',
              minHeight: 120,
            })}
          >
            {items.map((item, index) => (
              <BelowTabItem
                key={index}
                pose={openIndexes.includes(index) ? 'open' : 'closed'}
                {...css({position: 'absolute', overflowY: 'hidden'})}
              >
                {items[index].contents}
              </BelowTabItem>
            ))}
          </div>
        </div>
      )}
    </Tabs>
  )
}

export {StandardTabs}
