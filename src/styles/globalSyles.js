import { css } from "@emotion/core"

const GlobalStyles = css`
  :root {
    --darkText: #2d3436;
    --lightText: #636e72;
    --lightestText: #ffffff;
    --primaryColor: #0984e3;
    --secondaryColor: #ff7675;
    --lightShadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --darkShadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    --borderRadius: 3px;
    --transition: all 0.3s linear;
    --maxWidth: 1170px;
    --fixedWidth: 620px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Raleway", sans-serif;
    line-height: 1.5;
    letter-spacing: 2px;
    font-size: 18px;
    color: var(--lightText);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Gloria Hallelujah", cursive;
    text-transform: uppercase;
    line-height: 1.25;
    margin-bottom: 1.25rem;
    color: var(--darkText);
  }

  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 3rem;
  }
  h3 {
    font-size: 2rem;
  }

  h4 {
    font-size: 1rem;
  }

  p {
    margin-bottom: 1.25rem;
  }

  img {
    width: 100%;
    display: block;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: var(--darkColor);
  }

  @media screen and (min-width: 768px) {
    body {
      font-size: 22px;
    }
    h1 {
      font-size: 6rem;
    }
    h2 {
      font-size: 5rem;
    }
    h3 {
      font-size: 4rem;
    }
    h4 {
      font-size: 3rem;
    }

    h1,
    h2,
    h3,
    h4 {
      line-height: 1;
    }
  }

  ${"" /* utilities */}
  .center {
    text-align: center;
  }

  .btn {
    text-transform: uppercase;
    background: var(--primaryColor);
    color: var(--lightestText);
    padding: 0.5rem 1rem;
    display: inline-block;
    transition: var(--transition);
    font-size: 0.875rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--borderRadius);

    &:hover {
      background: transparent;
      border-color: var(--primarycolor);
      color: var(--darkText);
    }
  }

  @media screen and (min-width: 1000px) {
    .section-center: width: 95;
  }
`

export default GlobalStyles
