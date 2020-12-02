import React from "react"
import SocialLinks from "../constants/socialLinks"
import styled from "@emotion/styled"

const FooterStyles = styled("footer")`
  background: var(--darkText);
  color: var(--lightestText);
  padding: 0.5rem;
  text-align: center;

  .footer-icons {
    display: flex;
    justify-content: center;
    font-size: 2rem;
    margin: 0 1rem;

    .social-icon {
      margin: 0 0.5rem;
      transition: var(--transition);

      &:hover {
        transform: translateY(-5px);
      }
    }
  }

  .twitter-icon {
    color: #00acee;
  }

  .facebook-icon {
    color: #3b5998;
  }

  .instagram-icon {
    color: #3f729b;
  }
`

const Footer = () => {
  return (
    <FooterStyles>
      <SocialLinks styleClass="footer-icons" />
      <p>&copy; 1DopeChef {new Date().getFullYear()}</p>
    </FooterStyles>
  )
}

export default Footer
