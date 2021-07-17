import React from "react"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links.js"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <h4>
            <span href="/"> Uskelan opintorahastosäätiö</span>
          </h4>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
