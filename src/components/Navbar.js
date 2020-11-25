import React from "react"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
import NavLinks from "../constants/navLinks"
import SocialLinks from "../constants/socialLinks"
import NavStyles from "../styles/navStyles"

const Navbar = () => (
  <NavStyles>
    <div className="nav-center">
      <div className="nav-header">
        <Link to="/">
          <h4 className="logo">1DopeChef</h4>
        </Link>
        <button className="toggle">
          <FaBars />
        </button>
      </div>
      <NavLinks styleClass="nav-links" />
      <SocialLinks styleClass="nav-icons" />
    </div>
  </NavStyles>
)

export default Navbar
