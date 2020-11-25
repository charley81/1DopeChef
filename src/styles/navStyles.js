import React from "react"
import styled from "@emotion/styled"

const NavStyles = styled("nav")`
  height: 5rem;
  display: flex;
  align-items: center;

  .logo {
    margin: 0;

    span {
      color: var(--primaryColor);
    }
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

  ${"" /* sidebar */}
  .sidebar {
    visibility: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--lightestText);
    transition: var(--transition);
    display: grid;
    align-items: center;
    padding-left: 2rem;
    z-index: 999;
    transform: translateX(-100%);

    .social-icon {
      transition: var(--transition);

      &:hover {
        transform: translateY(-5px);
      }
    }
  }

  .showSidebar {
    transform: translateX(0);
    visibility: visible;
  }

  .sidebar-links li {
    margin-bottom: 1.5rem;
  }

  .sidebar-links .page-link {
    font-size: 2rem;
    display: block;
    transition: var(--transition);

    &:hover {
      color: var(--primaryColor);
    }
  }

  .sidebar-icons {
    display: flex;
    font-size: 3rem;
  }

  .sidebar .categories {
  flex-direction: column;
  margin: 1rem 0;
}
.sidebar .category {
  color: var(--clr-grey-5);
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: capitalize;
  padding-left: 1rem;
  display: block;
  cursor: pointer;
}

@media screen and (min-width: 1000px) {
  .sidebar {
    transform: translateX(-100%);
  }
}

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: transparent;
    font-size: 3rem;
    cursor: pointer;
    transition: var(--transition)

    &:hover {
      transform: rotate(45deg);
    }
  }
`

export default NavStyles
