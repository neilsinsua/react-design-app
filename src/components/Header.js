import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderStyle = styled.header`
  position: fixed;
  width: 100%;
  padding: 50px 0;
  z-index: 100;
  & > .mobile-logo {
    background-color: blue;
    position: absolute;
    top: 20%;
    left: 1%;
    height: 30px;
    width: 20px;
    display: none;
  }
  & > .hamburger {
    position: absolute;
    top: 25%;
    right: 1%;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 25px;
  }
  & > .hamburger > .bar {
    width: 100%;
    height: 3px;
    background-color: rgb(255, 255, 255, 0.8);
    border-radius: 5px;
  }
  @media (max-width: 640px) {
    padding: 25px 0px;
    & > .hamburger {
      display: flex;
    }
    & > .mobile-logo {
      display: inline;
    }
  }
`
const HeaderGroupStyle = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(6, auto);
  align-items: center;
  justify-items: center;
  & > a {
    font-size: 20px;
    color: white;
    font-weight: 600;
  }
  & > a > button {
    font-size: 20px;
    color: black;
    font-weight: 600;
    background-color: #56ccf2;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    outline: none;
  }
  @media (max-width: 640px) {
    display: none;
  }
`
const ButtonStyle = styled.button`
  background-color: solid #56ccf2;
  text-decoration: none;
`
const Header = ({ siteTitle }) => {
  return (
    <HeaderStyle>
      <Link className="mobile-logo" to="/">
        <img src={require("../images/logo-designcode.svg")} alt="logo" />
      </Link>
      <a className="hamburger" href="#">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <HeaderGroupStyle>
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
      </HeaderGroupStyle>
    </HeaderStyle>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
