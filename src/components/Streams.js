import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  TiledLinkContainer,
  TiledLink,
  TiledLinkIcon,
  SectionTitle,
} from "../theme"

const Streams = () => {
  const data = useStaticQuery(graphql`
    query {
      youtubeIcon: file(relativePath: { eq: "youtube_social_icon_red.png" }) {
        childImageSharp {
          resize(height: 48) {
            src
          }
        }
      }
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
  const youtubeIcon = data.youtubeIcon.childImageSharp.resize.src

  return (
    <>
      <SectionTitle>Streams</SectionTitle>

      <TiledLinkContainer>
        <TiledLink href="https://www.twitch.tv/ErikThePlum">
          ErikThePlum On Twitch
          <TiledLinkIcon src={twitchIcon} alt="ErikThePlum On Twitch" />
        </TiledLink>

        <TiledLink href="https://www.twitch.tv/theBeastOfTheMiddleEast">
          TheBeastOfTheMiddleEast On Twitch
          <TiledLinkIcon
            src={twitchIcon}
            alt="TheBeastOfTheMiddleEast On Twitch"
          />
        </TiledLink>

        <TiledLink href="https://www.twitch.tv/LeeroyCankins">
          LeeroyCankins On Twitch
          <TiledLinkIcon src={twitchIcon} alt="LeeroyCankins On Twitch" />
        </TiledLink>

        <TiledLink href="https://www.twitch.tv/eren_ozel">
          Eren_Ozel On Twitch
          <TiledLinkIcon src={twitchIcon} alt="Eren_Ozel On Twitch" />
        </TiledLink>

        <TiledLink href="https://www.twitch.tv/elwnyx">
          Elwnyx On Twitch
          <TiledLinkIcon src={twitchIcon} alt="Elwnyx On Twitch" />
        </TiledLink>

        <TiledLink href="https://www.twitch.tv/usirin">
          usirin On Twitch
          <TiledLinkIcon src={twitchIcon} alt="usirin On Twitch" />
        </TiledLink>
      </TiledLinkContainer>
    </>
  )
}

export default Streams
