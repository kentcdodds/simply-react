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
  <div
    style={{
      fontSize: 20,
      display: 'grid',
      textAlign: 'center',
      gridTemplateColumns: '1fr 1fr',
      gridColumnGap: '5%',
      justifyContent: 'center',
    }}
  >
    <div style={{display: 'grid', gridGap: '20px'}}>
      <div style={{display: 'grid', gridGap: '10px'}}>
        <Title>Learn React 🆓</Title>
        <Link href="http://kcd.im/beginner-react">kcd.im/beginner-react</Link>
      </div>
      <img style={{maxHeight: 300}} src="public/beginner-react-course.png" />
    </div>
    <div style={{display: 'grid', gridGap: '20px'}}>
      <div style={{display: 'grid', gridGap: '10px'}}>
        <Title>Level up ⚛️</Title>
        <Link href="http://kcd.im/advanced-react">kcd.im/advanced-react</Link>
      </div>
      <img style={{maxHeight: 300}} src="public/advanced-patterns-course.png" />
    </div>
  </div>
)
