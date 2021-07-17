import React from "react"
import Ohjeet from "../components/Ohjeet"
import Layout from "../components/Layout"

import downloadFile from "../assets/hakemus/uskela.pdf"

export default function Home({ children }) {
  return (
    <React.Fragment>
      <Layout>
        {/* < Image fluid={fluid} className="about-img" ></Image> */}
        <Ohjeet />
      </Layout>
    </React.Fragment>
  )
}
