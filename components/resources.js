import React from 'react'
import styled from 'react-emotion'

const Title = styled('strong')({
  fontSize: 32,
})

const Link = styled('a')({
  fontSize: 24,
  color: '#addb67',
})
Link.defaultProps = {target: '_blank'}

export const Resources = () => (
  <img
    style={{maxWidth: '90vw', maxHeight: '90vh'}}
    src="public/epic-react.png"
  />
)
