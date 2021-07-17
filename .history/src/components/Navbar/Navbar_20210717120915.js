import React from "react"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../../constants/links.js"
// import * as styles from "./navbar.module.css"
import "./navbar.css";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className={"navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <h4 className={styles.logo}>Uskelan opintorahastosäätiö</h4>
          <button
            type="button"
            className={styles.toggleBtn}
            onClick={toggleSidebar}
          >
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleclass={styles.navLinks}></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar