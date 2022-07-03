import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FaProductHunt } from "react-icons/fa"
import Title from "../components/Title"

const Jobs = () => {
  return (
    <div>
      <section className="section about-text section-center blogi">
        <p id="Ajankohtaista"></p>
        <Title title="Ajankohtaista"></Title>
        <>
          <div className="blogs-center blog">
            <StaticImage
              src="../images/kirja.jpg"
              className="blog-img"
            ></StaticImage>
            <div className="blog-card">
              <h3>Apurahojen haku 2022</h3>
              <p>Vuoden 2022 apurahojen haku alkaa syyskuussa</p>
            </div>
          </div>
        </>
      </section>
    </div>
  )
}

export default Jobs
