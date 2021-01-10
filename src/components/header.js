import PropTypes from "prop-types"
import React from "react"
import { HeaderContainer, HeaderLink, HeaderLinkTitle, HeaderLinkImage } from "../theme"
import logoGif from '../images/unhandled-exception-club-logo-transparent.gif'

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderLink to="/" className="header-link">
      <HeaderLinkImage src={logoGif} alt="unhandled exception club logo" />
      <HeaderLinkTitle>{siteTitle}</HeaderLinkTitle>
    </HeaderLink>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
