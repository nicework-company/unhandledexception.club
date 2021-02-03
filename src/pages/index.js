import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TopLinks from "../components/TopLinks"
import Twitch from "../components/Twitch"
import Podcast from "../components/Podcast"
import Social from "../components/Social"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
        <TopLinks />
        <Twitch />
        <Podcast />
        <Social />
    </Layout>
  )
}

export default IndexPage
