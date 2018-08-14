import React from 'react'
import {Tabs} from './base'
import {TabItem, TabItems, TabButtons, TabButton} from '../shared'

function StandardTabs({items}) {
  return (
    <Tabs>
      {({openIndexes, handleItemClick}) => (
        <div>
          <TabButtons>
            {items.map((item, index) => (
              <TabButton
                key={item.title}
                isOpen={openIndexes.includes(index)}
                onClick={() => handleItemClick(index)}
              >
                {item.title}
              </TabButton>
            ))}
          </TabButtons>
          <TabItems>
            {items.map((item, index) => (
              <TabItem
                key={index}
                position="below"
                isOpen={openIndexes.includes(index)}
              >
                {items[index].contents}
              </TabItem>
            ))}
          </TabItems>
        </div>
      )}
    </Tabs>
  )
}

export {StandardTabs}
