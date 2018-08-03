import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

class AboutMe extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <img src="public/standard/house.png" />
          Utah
        </div>
      </Container>
    )
  }
}

export {AboutMe}
