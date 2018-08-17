import React from 'react'

export default ({children}) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'start',
      marginTop: '20px',
    }}
  >
    {children}
  </div>
)
