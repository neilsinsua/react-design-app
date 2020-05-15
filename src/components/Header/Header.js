import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo-designcode.svg"

const Header = ({ siteTitle }) => {
  return (
    <div className="header">
      <div className="header-group">
        <Link to="/">
          <img src={require("../images/logo-designcode.svg")} alt="logo" />
        </Link>
        <Link to="/courses">Courses</Link>
        <Link to="/downloads">Downloads</Link>
        <Link to="/workshop">Workshop</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/try">
          <button>Try for free</button>
        </Link>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
