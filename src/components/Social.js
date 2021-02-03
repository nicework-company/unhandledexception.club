import React from "react"

import YoutubeIcon from "../images/youtube_social_icon_red.png"
import TwitterIcon from "../images/Twitter_Social_Icon_Rounded_Square_Color.png"
import { TiledLink, TiledLinkContainer, TiledLinkIcon, SectionTitle } from '../theme'

const Social = () => (
  <>
    <SectionTitle>Socials</SectionTitle>
    <TiledLinkContainer>
      <TiledLink href="https://www.youtube.com/channel/UCuXhrIE_d-Soapk2WEuGXAg">
        <TiledLinkIcon src={YoutubeIcon} alt="Unhandled Exception Club Youtube" />
        Follow Unhandled Exception on Youtube
      </TiledLink>

      <TiledLink href="https://twitter.com/eralpkaraduman">
        <TiledLinkIcon src={TwitterIcon} alt="Eralp Karaduman Twitter" />
        {'@eralpkaraduman'}
      </TiledLink>

      <TiledLink href="http://twitter.com/can_sykrfkl">
        <TiledLinkIcon src={TwitterIcon} alt="Can Soykarafakili Twitter" />
        {'@can_sykrfkl'}
      </TiledLink>

      <TiledLink href="http://twitter.com/mertahmetgunes">
        <TiledLinkIcon src={TwitterIcon} alt="Mert Ahmet Gunes Twitter" />
        {'@mertahmetgunes'}
      </TiledLink>

      <TiledLink href="http://twitter.com/eren_ozel">
        <TiledLinkIcon src={TwitterIcon} alt="Eren Ozel Twitter" />
        {'@eren_ozel'}
      </TiledLink>
    </TiledLinkContainer>
  </>
)

export default Social
