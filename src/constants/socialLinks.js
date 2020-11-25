import React from "react"
import { CgTwitter, CgFacebook, CgInstagram } from "react-icons/cg"

const SocialLinks = ({ styleClass }) => (
  <ul className={styleClass}>
    <li>
      <a href="https://twitter.com">
        <CgTwitter className="social-icon twitter-icon" />
      </a>
    </li>
    <li>
      <a href="https://facebook.com">
        <CgFacebook className="social-icon facebook-icon" />
      </a>
    </li>
    <li>
      <a href="https://instagram.com">
        <CgInstagram className="social-icon instagram-icon" />
      </a>
    </li>
  </ul>
)

export default SocialLinks
