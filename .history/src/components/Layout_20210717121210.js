import React, { useState } from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      {/* <Footer /> */}
    </>
  )
}

export default Layout;