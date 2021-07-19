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
      {/* <div className="section about-text section-center about-center"> */}
      <section className="section about-text section-center hakemus">
        <p id="Ajankohtaista"></p>
        <Title title="Ajankohtaista" className="titteli"></Title>
        return (
        <React.Fragment>
          <div className="blogs-center blog">
            <StaticImage
              src="../images/icon.png"
              className="about-img"
            ></StaticImage>
            <div className="blog-card">
              <h3>Apurahan haku</h3>
              <h5>Apurahan haku alkaa 29.8.2021 ja päättyy syyskuun loppuun</h5>
              <div className="blog-footer">
                <p>19.07.2021</p>
              </div>
            </div>
          </div>
        </React.Fragment>
        )
      </section>
    </div>
  )
}

export default Jobs
