/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"
import { LayoutContainer, LayoutBody } from "../theme"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LayoutContainer>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <LayoutBody>
        <main>
          {children}
        </main>
        <footer style={{
          marginTop: `2rem`
        }}>
          © {new Date().getFullYear()}, {data.site.siteMetadata?.title || `Title`}
          &nbsp;
          <a href="https://github.com/nicework-company/unhandledexception.club">Website Source on GitHub</a>
        </footer>
      </LayoutBody>
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
