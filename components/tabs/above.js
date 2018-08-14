import React from 'react'
import {Tabs} from './base'
import {TabItem, TabItems, TabButtons, TabButton} from '../shared'

function AboveTabs({items}) {
  return (
    <Tabs>
      {({openIndexes, handleItemClick}) => (
        <div>
          <TabItems>
            {items.map((item, index) => (
              <TabItem
                key={index}
                position="above"
                isOpen={openIndexes.includes(index)}
              >
                {items[index].contents}
              </TabItem>
            ))}
          </TabItems>
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
        </div>
      )}
    </Tabs>
  )
}

export {AboveTabs}
