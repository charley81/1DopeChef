import React from "react"
import { IoMdClose } from "react-icons/io"
import NavLinks from "../constants/navLinks"
import SocialLinks from "../constants/socialLinks"
import NavStyles from "../styles/navStyles"

const Sidebar = ({ isOpen, toggle }) => (
  <NavStyles>
    <aside className={`sidebar ${isOpen ? "showSidebar" : ""}`}>
      <button className="close-btn" onClick={toggle}>
        <IoMdClose />
      </button>
      <div className="sidebar-container">
        <NavLinks styleClass="sidebar-links" />
        <SocialLinks styleClass="sidebar-icons" />
      </div>
    </aside>
  </NavStyles>
)

export default Sidebar
