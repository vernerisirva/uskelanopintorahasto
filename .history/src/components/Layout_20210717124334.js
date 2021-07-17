import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import About from "./About"
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <About />

      <Footer />
    </>
  )
}

export default Layout
