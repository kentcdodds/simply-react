import React from 'react'
import {Tabs} from './base'
import {css, AccordionButton, AboveTabItem} from '../shared'

function AboveTabs({items}) {
  return (
    <Tabs>
      {({openIndexes, handleItemClick}) => (
        <div>
          <div
            {...css({
              position: 'relative',
              minHeight: 120,
            })}
          >
            {items.map((item, index) => (
              <AboveTabItem
                key={index}
                pose={openIndexes.includes(index) ? 'open' : 'closed'}
                {...css({position: 'absolute', overflowY: 'hidden'})}
              >
                {items[index].contents}
              </AboveTabItem>
            ))}
          </div>
          <div {...css({display: 'flex'})}>
            {items.map((item, index) => (
              <AccordionButton
                isOpen={openIndexes.includes(index)}
                onClick={() => handleItemClick(index)}
              >
                {item.title}
              </AccordionButton>
            ))}
          </div>
        </div>
      )}
    </Tabs>
  )
}

export {AboveTabs}
