import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const IconImage = styled.img`
  max-height: 70px;
  max-width: 70px;
`

function LinkedIconImage({link, name}) {
  return (
    <a href={link} target="_blank">
      <IconImage src={`public/standard/${name}`} />
    </a>
  )
}

const IconImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Family = styled.div`
  display: flex;
`

const LogoRow = styled(Container)`
  margin-top: 30px;
  margin-bottom: 30px;
`

function FirstSlide({title, subtitle}) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <h1 style={{margin: 5, fontSize: '3em'}}>{title}</h1>
      <h2 style={{margin: 5}}>{subtitle}</h2>
      <strong style={{fontSize: '2em', marginBottom: 10}}>Kent C. Dodds</strong>
      <AboutMe />
    </div>
  )
}

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <LogoRow>
          <IconImageContainer>
            <LinkedIconImage
              link="https://testingjavascript.com"
              name="trophy.png"
            />
            <a href="https://testingjavascript.com">TestingJavaScript.com</a>
          </IconImageContainer>
          <a
            href="https://twitter.com/kentcdodds"
            style={{fontSize: '1.6em', color: '#1da1f2'}}
          >
            @kentcdodds
          </a>
          <IconImageContainer>
            <LinkedIconImage
              link="https://epicreact.dev"
              name="astronaut.png"
            />
            <a href="https://epicreact.dev">EpicReact.Dev</a>
          </IconImageContainer>
        </LogoRow>
      </div>
    )
  }
}

export {FirstSlide}
