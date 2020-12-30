import React from "react"

import ytLogo from "../images/youtube_social_icon_red.png"
import twLogo from "../images/Twitter_Social_Icon_Rounded_Square_Color.png"
import { TiledLink, TiledLinkContainer, TiledLinkIcon, SectionTitle } from '../theme'

const Social = () => (
  <div className="social">
    <SectionTitle>Socials</SectionTitle>
    <TiledLinkContainer>
      <TiledLink href="https://www.youtube.com/channel/UCuXhrIE_d-Soapk2WEuGXAg">
        <TiledLinkIcon src={ytLogo} alt="Unhandled Exception Club Youtube" />
        Follow Unhandled Exception on Youtube
      </TiledLink>

      <TiledLink href="https://twitter.com/eralpkaraduman">
        <TiledLinkIcon src={twLogo} alt="Eralp Karaduman Twitter" />
        @eralpkaraduman
      </TiledLink>

      <TiledLink href="http://twitter.com/can_sykrfkl">
        <TiledLinkIcon src={twLogo} alt="Can Soykarafakili Twitter" />
        @can_sykrfkl
      </TiledLink>

      <TiledLink href="http://twitter.com/mertahmetgunes">
        <TiledLinkIcon src={twLogo} alt="Mert Ahmet Gunes Twitter" />
        @mertahmetgunes
      </TiledLink>

      <TiledLink href="http://twitter.com/eren_ozel">
        <TiledLinkIcon src={twLogo} alt="Eren Ozel Twitter" />
        @eren_ozel
      </TiledLink>
    </TiledLinkContainer>
  </div>
)

export default Social
