import React from "react"
// import PropTypes from 'prop-types'
// import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { FaProductHunt } from "react-icons/fa"
import Title from "../components/Title"


const Jobs = () => {

  return (
    <div>
      {/* <div className="section about-text section-center about-center"> */}
      <section className="section about-text section-center hakemus">
        <p id="Ajankohtaista"></p>
        <Title title="Ajankohtaista" className="titteli"></Title>
        {jobs.map(job => {
          return (
            <React.Fragment>
              <div className="blogs-center blog">
                <Image
                  fluid={job.kuva.fluid}
                  alt={job.titel}
                  className="blog-img"
                ></Image>
                <div className="blog-card">
                  <h3>{job.otsikko}</h3>
                  <h5>{job.paivitys.paivitys}</h5>
                  <div className="blog-footer">
                    <p>{job.paivamaara}</p>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )
        })}
      </section>
    </div>
  )
}

export default Jobs
