import React from 'react'

function RandomlyPlaced({children, style, ...props}) {
  return (
    <div style={{position: 'absolute', zIndex: 2, fontSize: '1.5em', ...style}}>
      {children ? (
        <div
          style={{
            borderRadius: 6,
            padding: 4,
            backgroundColor: 'rgba(1,22,39, 0.6)',
          }}
          {...props}
        >
          {children}
        </div>
      ) : null}
    </div>
  )
}

export {RandomlyPlaced}
