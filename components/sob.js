import React from 'react'

export const Sob = ({children, style}) => (
  <div style={{position: 'absolute', zIndex: 2, ...style}}>
    <img src="public/sob.png" />
    {children ? (
      <div
        style={{
          borderRadius: 6,
          padding: 4,
          backgroundColor: 'rgba(1,22,39, 0.6)',
        }}
      >
        {children}
      </div>
    ) : null}
  </div>
)
