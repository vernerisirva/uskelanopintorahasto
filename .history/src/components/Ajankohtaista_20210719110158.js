import React from "react"
// import PropTypes from 'prop-types'
// import { Link } from "gatsby"
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
              src="../images/kuva1.jpg"
              className="blog-img"
            ></StaticImage>
            <div className="blog-card">
              <h3>Apurahan haku 2021</h3>
              <h5>
                Apurahan haku alkaa 29.8.2021 ja päättyy syyskuun loppussa.
              </h5>
              <div className="blog-footer">
                <p>19.07.2021</p>
              </div>
            </div>
          </div>
        </>
      </section>
    </div>
  )
}

export default Jobs
