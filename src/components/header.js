import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logoGif from '../images/unhandled-exception-club-logo-transparent.gif'

const Header = ({ siteTitle }) => (
  <header>
    <Link to="/" className="header-link">
      <img src={logoGif} alt="unhandled exception club logo" />
      <div>
        {siteTitle}
      </div>
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
