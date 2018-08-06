import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
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

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <IconImageContainer>
            <LinkedIconImage
              link="https://www.google.com/maps/place/Utah"
              name="house.png"
            />
            <span>Utah</span>
          </IconImageContainer>
          <IconImageContainer>
            <Family>
              <LinkedIconImage
                link="https://www.lds.org/topics/family-proclamation"
                name="woman.png"
              />
              <LinkedIconImage
                link="https://www.lds.org/topics/family-proclamation"
                name="girl.png"
              />
              <LinkedIconImage
                link="https://www.lds.org/topics/family-proclamation"
                name="boy.png"
              />
              <LinkedIconImage
                link="https://www.lds.org/topics/family-proclamation"
                name="boy.png"
              />
              <LinkedIconImage
                link="https://www.lds.org/topics/family-proclamation"
                name="boy.png"
              />
              <LinkedIconImage
                link="https://photos.google.com/search/_cAF1QipNRwO3NP-6XsiM36GnFIhCiZW9nB6UFB60_Gemma/photo/AF1QipNUOABnMsdf4cEXs-D32qIIyHmrbTYT2FBIoa1j"
                name="dog.png"
              />
            </Family>
            <span>wife, 4 kids, & a dog</span>
          </IconImageContainer>
          <IconImageContainer>
            <LinkedIconImage
              link="https://goo.gl/maps/WBspiX9s6zz"
              name="office.png"
            />
            <span>PayPal</span>
          </IconImageContainer>
        </Container>
        <LogoRow>
          <LinkedIconImage
            link="https://github.com/kentcdodds"
            name="github.png"
          />
          <LinkedIconImage link="http://kcd.im/news" name="kcd-news.png" />
          <LinkedIconImage
            link="https://blog.kentcdodds.com/"
            name="medium.png"
          />
          <LinkedIconImage
            link="https://kentcdodds.com/talks/"
            name="speaking.png"
          />
          <LinkedIconImage
            link="http://kcd.im/3-mins"
            name="3-minutes-with-kent.png"
          />
          <LinkedIconImage link="http://kcd.im/ama" name="ama.png" />
        </LogoRow>
        <LogoRow>
          <LinkedIconImage link="http://kcd.im/egghead" name="eggheadio.png" />
          <LinkedIconImage link="http://kcd.im/fem" name="fem.png" />
          <LinkedIconImage link="http://kcd.im/wme" name="workshopme.png" />
          <LinkedIconImage link="http://kcd.im/twitch" name="twitch.png" />
          <LinkedIconImage link="http://kcd.im/gde" name="gde.png" />
          <LinkedIconImage link="http://kcd.im/youtube" name="youtube.png" />
        </LogoRow>
      </div>
    )
  }
}

export {AboutMe}
