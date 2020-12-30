import React, { useState } from "react"
import TwitchEmbedLib from "./TwitchEmbedLib"
import TwitchEmbed from "./TwitchEmbed"

const Twitch = () =>  {
  const [ libLoaded, setLibLoaded ] = useState(false);

  return (
    <>
      <h2>Twitch</h2>
      <div className="twitch-container">
        { 
          !libLoaded ?
            <TwitchEmbedLib loadCallback={() => setLibLoaded(true)} /> :
            <>
              <TwitchEmbed channelName="theBeastOfTheMiddleEast" />
              <TwitchEmbed channelName="LeeroyCankins" />
            </>
        }
      </div>
    </>
  )
}


export default Twitch;
