// example Layout.js
import React from 'react'

export default ({children}) => (
  <div
    style={{
      width: '100vw',
      height: '100vw',
      backgroundColor: 'white',
      color: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    }}
  >
    {children}
  </div>
)
