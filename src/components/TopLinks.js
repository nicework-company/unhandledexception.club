import React from "react"

import ytLogo from "../images/youtube_social_icon_red.png"
import dcLogo from "../images/Discord-Logo-Color.png"

const TopLinks = () => (
  <div className="links">
    <a href="https://www.youtube.com/channel/UCuXhrIE_d-Soapk2WEuGXAg/live" className="youtube-button">
      <img src={ytLogo} alt="Unhandled Exception Club Youtube Live" />
      Watch Live On Youtube
    </a>

    <a href="http://discord.gg/4GgCG5C" className="discord-button">
      <img src={dcLogo} alt="Unhandled Exception Club Discord" />
      Join Discord
    </a>
  </div>
)

export default TopLinks
