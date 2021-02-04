import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { TiledLinkContainer, TiledLink, TiledLinkIcon, SectionTitle } from '../theme'


const Twitch = () => {
  const data = useStaticQuery(graphql`
    query {
      twitchIcon: file(relativePath: { eq: "twitch-icon.png" }) {
        childImageSharp {
          resize(height: 48) {
            src
          }
        }
      }
    }
  `)
  const twitchIcon = data.twitchIcon.childImageSharp.resize.src

  return (
    <>
      <SectionTitle>Twitch</SectionTitle>

      <TiledLinkContainer>
        <TiledLink href="https://www.twitch.tv/ErikThePlum">
          <TiledLinkIcon src={twitchIcon} alt="ErikThePlum On Twitch" />
          ErikThePlum On Twitch
        </TiledLink>

        <TiledLink href="https://www.twitch.tv/theBeastOfTheMiddleEast">
          <TiledLinkIcon src={twitchIcon} alt="TheBeastOfTheMiddleEast On Twitch" />
            TheBeastOfTheMiddleEast On Twitch
        </TiledLink>

        <TiledLink href="https://www.twitch.tv/LeeroyCankins">
          <TiledLinkIcon src={twitchIcon} alt="LeeroyCankins On Twitch" />
            LeeroyCankins On Twitch
        </TiledLink>

        <TiledLink href="https://www.twitch.tv/eren_ozel">
          <TiledLinkIcon src={twitchIcon} alt="Eren_Ozel On Twitch" />
            Eren_Ozel On Twitch
        </TiledLink>
      </TiledLinkContainer>
    </>
  )
}

export default Twitch;
