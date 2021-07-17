import React from "react"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../../constants/links.js"
// import * as styles from "./navbar.module.css"
import "./navbar.css";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className={"navbar"}>
      <div className={"navCenter"}>
        <div className={"navHeader"}>
          <h4 className={"logo"}>Uskelan opintorahastosäätiö</h4>
          <button
            type="button"
            className={"toggleBtn"}
            onClick={toggleSidebar}
          >
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleclass={"navLinks}></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar