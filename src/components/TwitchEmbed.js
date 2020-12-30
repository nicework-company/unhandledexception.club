import React, { useEffect } from "react"

const TwitchEmbed = props => {
  const { channelName } = props;

  useEffect(() => {
    new window.Twitch.Embed(`${channelName}-twitch-embed`, {
      channel: channelName,
      width: "100%",
      height: "600px"
    })
  });

  return (
    <div className="twitch-card">
      <div className="twitch-card-head">
        <a href={`https://twitch.tv/${channelName}`}>
          Follow <span className="span-channelName">{channelName}</span> on <span className="span-twitch">Twitch</span>
        </a>
      </div>

      <div className="twitch-card-body">
        <div className="twitch-video">
          <div id={`${channelName}-twitch-embed`}>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TwitchEmbed;
