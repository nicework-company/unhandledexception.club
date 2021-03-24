import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  TiledLink,
  TiledLinkContainer,
  TiledLinkIcon,
  SectionTitle,
} from "../theme"

const Social = () => {
  const data = useStaticQuery(graphql`
    query {
      youtubeIcon: file(relativePath: { eq: "youtube_social_icon_red.png" }) {
        childImageSharp {
          resize(height: 48) {
            src
          }
        }
      }
      twitterIcon: file(
        relativePath: { eq: "Twitter_Social_Icon_Rounded_Square_Color.png" }
      ) {
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
          Unhandled Exception on Youtube
          <TiledLinkIcon
            src={youtubeIcon}
            alt="Unhandled Exception Club Youtube"
          />
        </TiledLink>

        <TiledLink href="https://twitter.com/eralpkaraduman">
          {"@eralpkaraduman"}
          <TiledLinkIcon src={twitterIcon} alt="Eralp Karaduman Twitter" />
        </TiledLink>

        <TiledLink href="http://twitter.com/csoykarafakili">
          {"@csoykarafakili"}
          <TiledLinkIcon src={twitterIcon} alt="Can Soykarafakili Twitter" />
        </TiledLink>

        <TiledLink href="http://twitter.com/mertahmetgunes">
          {"@mertahmetgunes"}
          <TiledLinkIcon src={twitterIcon} alt="Mert Ahmet Gunes Twitter" />
        </TiledLink>

        <TiledLink href="http://twitter.com/eren_ozel">
          {"@eren_ozel"}
          <TiledLinkIcon src={twitterIcon} alt="Eren Ozel Twitter" />
        </TiledLink>

      </TiledLinkContainer>
    </>
  )
}

export default Social
