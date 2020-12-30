import React, { useState } from "react"
import TwitchEmbedLib from "./TwitchEmbedLib"
import TwitchEmbed from "./TwitchEmbed"
import { TiledLinkContainer, TiledLink, TiledLinkIcon, SectionTitle } from '../theme'
import TwitchIcon from '../images/twitch-icon.png'
import f from "../fatureFlags"

const Twitch = () => {
  const [libLoaded, setLibLoaded] = useState(false);

  return (
    <div>
      <SectionTitle>Twitch</SectionTitle>
      {f.embededTwitchPlayers ? (
        <div className="twitch-container">
          {!libLoaded ?
            <TwitchEmbedLib loadCallback={() => setLibLoaded(true)} /> :
            <>
              <TwitchEmbed channelName="theBeastOfTheMiddleEast" />
              <TwitchEmbed channelName="LeeroyCankins" />
            </>
          }
        </div>
      ) : (
          <TiledLinkContainer>
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
                Eren_Ozel On Twitch On Twitch
              </TiledLink>
          </TiledLinkContainer>
        )}
    </div >
  )
}


export default Twitch;
