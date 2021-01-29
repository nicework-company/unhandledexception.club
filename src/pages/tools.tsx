import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import TimeMachine from "../components/tools/timeMachine/TimeMachine"

const ToolsPage = () => (
  <Layout>
    <SEO title="Tools" />
    <h1>Tools</h1>
    <p>Time Machine</p>
    <TimeMachine />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ToolsPage
