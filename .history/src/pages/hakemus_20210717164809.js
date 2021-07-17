import React from "react"
import Ohjeet from "../components/Ohjeet"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"

import downloadFile from "../assets/hakemus/uskela.pdf"

export default function Home({ children }) {
  return (
    <React.Fragment>
      <Navbar 
        {/* < Image fluid={fluid} className="about-img" ></Image> */}
        <Ohjeet />
      <Footer />
      </React.Fragment>
  )
}
