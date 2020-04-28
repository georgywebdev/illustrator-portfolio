import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => (
  <header>
    <p>
      <Link to="/">Design</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </p>
  </header>
)

export default Header
