import React from "react"
import styled from "@emotion/styled"

const NavStyles = styled("nav")`
  height: 5rem;
  display: flex;
  align-items: center;

  .logo {
    margin: 0;
  }

  .nav-center {
    width: 90vw;
    max-width: var(--maxWidth);
    margin: 0 auto;
  }

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .toggle {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--darkText);
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      color: var(--primaryColor);
    }
  }

  .nav-links,
  .nav-icons {
    display: none;
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

  @media screen and (min-width: 1000px) {
    .logo {
      margin-right: 3rem;
    }
    .toggle {
      display: none;
    }

    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      column-gap: 2rem;
      align-items: center;
    }

    .nav-links {
      display: flex;
      align-items: center;
    }

    .page-link {
      margin-right: 1rem;
      transition: var(--transition);
      cursor: pointer;

      &:hover {
        color: var(--primaryColor);
      }
    }

    .nav-icons {
      display: flex;
      justify-content: space-between;
      font-size: 1.5rem;
    }

    .social-icon {
      transition: var(--transition);

      &:hover {
        transform: translateY(-5px);
      }
    }
  }
`

export default NavStyles
