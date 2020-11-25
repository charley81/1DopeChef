import React from "react"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
import NavLinks from "../constants/navLinks"
import SocialLinks from "../constants/socialLinks"
import NavStyles from "../styles/navStyles"

const Navbar = ({ toggle }) => (
  <NavStyles>
    <div className="nav-center">
      <div className="nav-header">
        <Link to="/">
          <h4 className="logo">
            1<span>D</span>ope<span>C</span>hef
          </h4>
        </Link>
        <button className="toggle" onClick={toggle}>
          <FaBars />
        </button>
      </div>
      <NavLinks styleClass="nav-links" />
      <SocialLinks styleClass="nav-icons" />
    </div>
  </NavStyles>
)

export default Navbar
