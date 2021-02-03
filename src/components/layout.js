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
import { LayoutContainer, LayoutBody, Footer, FooterLink } from "../theme"
import ThemeToggleButton from "../components/ThemeToggleButton"

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
    <>
      <ThemeToggleButton />
      <LayoutContainer>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <LayoutBody>
          <main>
            {children}
          </main>
          <Footer>
            {`© ${new Date().getFullYear()}, ${data.site.siteMetadata?.title || `Title`} `}
            <FooterLink href="https://github.com/nicework-company/unhandledexception.club">Website Source on GitHub</FooterLink>
          </Footer>
        </LayoutBody>
      </LayoutContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
