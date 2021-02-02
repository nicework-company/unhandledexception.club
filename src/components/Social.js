import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { TiledLink, TiledLinkContainer, TiledLinkIcon, SectionTitle } from '../theme'

const Social = () => {
  const data = useStaticQuery(graphql`
    query {
      youtubeIcon: file(relativePath: { eq: "youtube_social_icon_red.png" }) {
        childImageSharp {
          resize(height: 48) {
            src
          }
        }
      },
      twitterIcon: file(relativePath: { eq: "Twitter_Social_Icon_Rounded_Square_Color.png" }) {
        childImageSharp {
          resize(height: 48) {
            src
          }
        }
      }
    }
  `)
  const youtubeIcon = data.youtubeIcon.childImageSharp.resize.src
  const twitterIcon = data.twitterIcon.childImageSharp.resize.src

  return (
    <>
      <SectionTitle>Socials</SectionTitle>

      <TiledLinkContainer>
        <TiledLink href="https://www.youtube.com/channel/UCuXhrIE_d-Soapk2WEuGXAg">
          <TiledLinkIcon src={youtubeIcon} alt="Unhandled Exception Club Youtube" />
          Follow Unhandled Exception on Youtube
        </TiledLink>

        <TiledLink href="https://twitter.com/eralpkaraduman">
          <TiledLinkIcon src={twitterIcon} alt="Eralp Karaduman Twitter" />
          {'@eralpkaraduman'}
        </TiledLink>

        <TiledLink href="http://twitter.com/can_sykrfkl">
          <TiledLinkIcon src={twitterIcon} alt="Can Soykarafakili Twitter" />
          {'@can_sykrfkl'}
        </TiledLink>

        <TiledLink href="http://twitter.com/mertahmetgunes">
          <TiledLinkIcon src={twitterIcon} alt="Mert Ahmet Gunes Twitter" />
          {'@mertahmetgunes'}
        </TiledLink>

        <TiledLink href="http://twitter.com/eren_ozel">
          <TiledLinkIcon src={twitterIcon} alt="Eren Ozel Twitter" />
          {'@eren_ozel'}
        </TiledLink>
      </TiledLinkContainer>
    </>
  )
}

export default Social
