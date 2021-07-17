import React from "react"
import Title from "../components/Title"
// import downloadFile from "../assets/hakemus/uskela.pdf"
import Hakemuslomake from "../assets/Hakemuslomake.pdf"
import Rekisteriseloste from "../assets/Rekisteriseloste.pdf"

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
              allowfullscreen
              z
              width="1000"
              height="700"
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
              <a href={Hakemuslomake}>
                {" "}
                <span className="linkki">Hakemuslomake</span>{" "}
              </a>
            </button>{" "}
            <button className="btn">
              <a href={Rekisteriseloste}>
                {" "}
                <span className="linkki">Rekisteriseloste</span>{" "}
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
