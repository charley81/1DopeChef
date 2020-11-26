import React from "react"
import { CgTwitter, CgFacebook, CgInstagram } from "react-icons/cg"

const SocialLinks = ({ styleClass }) => (
  <ul className={styleClass}>
    <li>
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <CgTwitter className="social-icon twitter-icon" />
      </a>
    </li>
    <li>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <CgFacebook className="social-icon facebook-icon" />
      </a>
    </li>
    <li>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <CgInstagram className="social-icon instagram-icon" />
      </a>
    </li>
  </ul>
)

export default SocialLinks
