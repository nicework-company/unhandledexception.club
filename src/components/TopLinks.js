import React from "react"

import ytLogo from "../images/youtube_social_icon_red.png"
import dcLogo from "../images/Discord-Logo-Color.png"
import { TiledLinkContainer, TiledLink, TiledLinkIcon } from '../theme'

const TopLinks = () => (
  <TiledLinkContainer>
    <TiledLink href="https://www.youtube.com/channel/UCuXhrIE_d-Soapk2WEuGXAg/live">
      <TiledLinkIcon src={ytLogo} alt="Unhandled Exception Club Youtube Live" />
      Watch Live On Youtube
    </TiledLink>

    <TiledLink href="http://discord.gg/4GgCG5C">
      <TiledLinkIcon src={dcLogo} alt="Unhandled Exception Club Discord" />
      Join Discord
    </TiledLink>
  </TiledLinkContainer>
)

export default TopLinks
