import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import logoGif from '../images/unhandled-exception-club-logo-transparent.gif'

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
      <img src={logoGif} alt="unhandled exception club logo"/>
    </div>
    <div id="links">
      <h2><a href="https://www.youtube.com/channel/UCuXhrIE_d-Soapk2WEuGXAg/live">🔴 WATCH LIVE ON YOUTUBE</a></h2>
      <a href="http://discord.gg/4GgCG5C">💬 Join Discord</a>
      <a href="https://www.youtube.com/channel/UCuXhrIE_d-Soapk2WEuGXAg">📺 Follow Unhandled Exception on Youtube</a>
      <a href="https://twitch.tv/theBeastOfTheMiddleEast">📺 Follow TheBeastOfTheMiddleEast on Twitch</a>
      <a href="https://twitch.tv/LeeroyCankins">📺 Follow LeeroyCankins on Twitch</a>
      <a href="https://github.com/nicework-company/unhandledexception.club">🐙 Website Source on GitHub</a>
      <a href="https://abespodcast.github.io">🎧 Listen to Abes Podcast</a>
      <a href="https://twitter.com/eralpkaraduman">🐦 @eralpkaraduman</a>
      <a href="http://twitter.com/can_sykrfkl">🐦 @can_sykrfkl</a>
      <a href="http://twitter.com/mertahmetgunes">🐦 @mertahmetgunes</a>
    </div>
  </Layout>
)

export default IndexPage
