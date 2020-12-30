import React from "react"

import ytLogo from "../images/youtube_social_icon_red.png"
import twLogo from "../images/Twitter_Social_Icon_Rounded_Square_Color.png"

const Social = () => (
  <div className="social">
    <h2>Social</h2>
    <div className="links">
      <a href="https://www.youtube.com/channel/UCuXhrIE_d-Soapk2WEuGXAg">
        <img src={ytLogo} alt="Unhandled Exception Club Youtube" />
        Follow Unhandled Exception on Youtube
      </a>

      <a href="https://twitter.com/eralpkaraduman">
        <img src={twLogo} alt="Eralp Karaduman Twitter" />
        @eralpkaraduman
      </a>

      <a href="http://twitter.com/can_sykrfkl">
        <img src={twLogo} alt="Eralp Karaduman Twitter" />
        @can_sykrfkl
      </a>

      <a href="http://twitter.com/mertahmetgunes">
        <img src={twLogo} alt="Eralp Karaduman Twitter" />
        @mertahmetgunes
      </a>
    </div>
  </div>
)

export default Social
