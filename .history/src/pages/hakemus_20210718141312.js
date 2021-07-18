import React from "react"
import Ohjeet from "../components/Ohjeet"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"


export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Ohjeet />
      <Footer />
    </>
  )
}
