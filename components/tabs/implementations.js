import React from 'react'
import {StandardTabs} from './standard'
import {AboveTabs} from './above'

const items = [
  {
    title: '🐴',
    contents: (
      <div>
        Horses can sleep both lying down and standing up. Domestic horses have a
        lifespan of around 25 years. A 19th century horse named 'Old Billy' is
        said to have lived 62 years.
      </div>
    ),
  },
  {
    title: '🦏',
    contents: (
      <div>
        Rhino skin maybe thick but it can be quite sensitive to sunburns and
        insect bites which is why they like wallow so much – when the mud dries
        it acts as protection from the sunburns and insects.
      </div>
    ),
  },
  {
    title: '🦄',
    contents: (
      <div>
        If you’re looking to hunt a unicorn, but don’t know where to begin, try
        Lake Superior State University in Sault Ste. Marie, Michigan. Since
        1971, the university has issued permits to unicorn questers.
      </div>
    ),
  },
]

function asImpl(Comp) {
  return () => (
    <div
      style={{
        width: 500,
        fontSize: 24,
        textAlign: 'left',
        margin: 'auto',
      }}
    >
      <Comp items={items} />
    </div>
  )
}

export const Standard = asImpl(StandardTabs)
export const Above = asImpl(AboveTabs)
