import React from "react"
import Title from "../components/Title"
// import downloadFile from "../assets/hakemus/uskela.pdf"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <section className="kartta">
      <div className="section-center about-center">
        <article className="about-text">
          <p id="historia"></p> <Title title="Ohjeet hakuun" />
          <p>
            Alla olevassa kartassa näkyy Uskelan alue. Vanha Salon alue eivätkä
            vanhat ympäryskunnat kuten Halikko, Pertteli ja Muurla kuulu Uskelan
            alueeseen.
          </p>
          <div className="kartta2">
            <iframe
              width="1200"
              height="820"
              frameborder="0"
              src="https://kartta.salo.fi/IMS/fi/embed?layers=Opaskartta&lon=Kuntarajat%202008%20025-64&lon=Salo%201966%20025-64&cp=6678656,23507264&z=64&ui=z!g!o"
            ></iframe>
          </div>
          <p>
            Mikäli haluat tarkistaa ennen hakemusta, että osoitteesi on Uskelan
            alueella hyödyntäen kaupungin karttaa ja yllä olevia ohjeita. Linkki
            karttaan, jossa voit tarkistaa oman osoitteesi sijainnin on alla.
          </p>
          <p>
            Hakemus tulee lähettää sähköpostiosoitteeseemme:{" "}
            <a href="mailto: info@uskelanopintorahastosaatio.fi">
              info@uskelanopintorahastosaatio.fi.{" "}
            </a>
          </p>
          <p className="hakemuspainike">
            <button className="btn">
              <a href="https://kartta.salo.fi/IMS/fi/embed?layers=Opaskartta&lon=Kuntarajat%202008%20025-64&lon=Salo%201966%20025-64&cp=6692032,23496256&z=64&ui=z!g!o">
                {" "}
                <span className="linkki">Uskelan kartta</span>{" "}
              </a>
            </button>{" "}
          </p>
          <p className="hakemuspainike">
            <button className="btn">
              <a href="https://kartta.salo.fi/IMS/fi/embed?layers=Opaskartta&lon=Kuntarajat%202008%20025-64&lon=Salo%201966%20025-64&cp=6692032,23496256&z=64&ui=z!g!o">
                {" "}
                <span className="linkki">Uskelan kartta</span>{" "}
              </a>
            </button>{" "}
          </p>
          <div className="about-stack"></div>
        </article>
      </div>
    </section>
  )
}

export default About
