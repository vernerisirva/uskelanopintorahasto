import React from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import About from "./About"
import Hero from "./Hero"
import Hakemus from "./Hakemus"
import Ajankohtaista from "./Ajankohtaista"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Hero />
      <About />
      <Ajankohtaista />
      <Hakemus />

      <Footer />
    </>
  )
}

export default Layout
