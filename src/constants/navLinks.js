import React from "react"
import { Link } from "gatsby"

const Links = ({ styleClass, children }) => (
  <ul className={styleClass}>
    <li>
      <Link to="/" className="page-link">
        Home
      </Link>
    </li>
    <li>
      <Link to="/recipes" className="page-link">
        Recipes
      </Link>
      {children}
    </li>
    <li>
      <Link to="/newsletter" className="page-link">
        Newsletter
      </Link>
    </li>
  </ul>
)

export default Links
