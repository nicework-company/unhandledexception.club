import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import logoGif from '../images/unhandled-exception-club-logo-transparent.gif'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src={logoGif} alt="unhandled exception club logo" />
    </div>
    <a href="http://discord.gg/4GgCG5C">Join Discord</a>
    <br/>
    <a href="https://www.youtube.com/channel/UCuXhrIE_d-Soapk2WEuGXAg">Follow Unhandled Exception on Youtube</a>
    <br/>
    <a href="https://twitch.tv/theBeastOfTheMiddleEast">Follow TheBeastOfTheMiddleEast on Twitch</a>
    <br/>
    <a href="https://twitch.tv/LeeroyCankins">Follow LeeroyCankins on Twitch</a>
    <br/>
    <a href="https://github.com/nicework-company/unhandledexception.club">Website Source on GitHub</a>
  </Layout>
)

export default IndexPage
