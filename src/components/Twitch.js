import React from "react"
import { TiledLinkContainer, TiledLink, TiledLinkIcon, SectionTitle } from '../theme'
import TwitchIcon from '../images/twitch-icon.png'

const Twitch = () => {
  return (
    <>
      <SectionTitle>Twitch</SectionTitle>
        <TiledLinkContainer>
          <TiledLink href="https://www.twitch.tv/ErikThePlum">
            <TiledLinkIcon src={TwitchIcon} alt="ErikThePlum On Twitch" />
            ErikThePlum On Twitch
          </TiledLink>
          <TiledLink href="https://www.twitch.tv/theBeastOfTheMiddleEast">
            <TiledLinkIcon src={TwitchIcon} alt="TheBeastOfTheMiddleEast On Twitch" />
              TheBeastOfTheMiddleEast On Twitch
          </TiledLink>
          <TiledLink href="https://www.twitch.tv/LeeroyCankins">
            <TiledLinkIcon src={TwitchIcon} alt="LeeroyCankins On Twitch" />
              LeeroyCankins On Twitch
          </TiledLink>
          <TiledLink href="https://www.twitch.tv/eren_ozel">
            <TiledLinkIcon src={TwitchIcon} alt="Eren_Ozel On Twitch" />
              Eren_Ozel On Twitch
          </TiledLink>
        </TiledLinkContainer>
    </>
  )
}

export default Twitch;
