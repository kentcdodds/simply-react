import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`

const IconImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const IconImage = styled.img`
  max-height: 70px;
  max-width: 70px;
`

const Family = styled.div`
  display: flex;
`

class AboutMe extends React.Component {
  render() {
    return (
      <Container>
        <IconImageContainer>
          <IconImage src="public/standard/house.png" />
          <span>Utah</span>
        </IconImageContainer>
        <IconImageContainer>
          <Family>
            <IconImage src="public/standard/woman.png" />
            <IconImage src="public/standard/girl.png" />
            <IconImage src="public/standard/boy.png" />
            <IconImage src="public/standard/boy.png" />
            <IconImage src="public/standard/boy.png" />
            <IconImage src="public/standard/dog.png" />
          </Family>
          <span>wife, 4 kids, & a dog</span>
        </IconImageContainer>
        <IconImageContainer>
          <IconImage src="public/standard/office.png" />
          <span>PayPal</span>
        </IconImageContainer>
      </Container>
    )
  }
}

export {AboutMe}
