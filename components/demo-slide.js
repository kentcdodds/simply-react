import React from 'react'
import {CodeBlock} from './code-block'

function DemoSlide({accordion, code}) {
  return (
    <div>
      <CodeBlock style={{fontSize: 30}}>{code.trim()}</CodeBlock>
      <div>{accordion}</div>
    </div>
  )
}

export {DemoSlide}
