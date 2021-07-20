import React from "react"
import Title from "../components/Title"
import Hakemuslomake from "../assets/Hakemuslomake.pdf"
import Rekisteriseloste from "../assets/Rekisteriseloste.pdf"

const About = () => {
  return (
    <section className="kartta">
      <div className="section-center about-center">
        <article className="about-text">
          <p id="historia"></p> <Title title="Ohjeet hakuun" />
          <p></p>
          <div className="kartta2">
            <iframe
              width="1000"
              height="1000"
              title="Uskelan kartta"
              src="https://kartta.salo.fi/IMS/fi/embed?layers=Opaskartta&lon=Kuntarajat%202008%20025-64&lon=Salo%201966%20025-64&cp=6697344,23509952&z=32&ui=z!g!o"
            ></iframe>
          </div>
          <p className="kartta2">
            Mikäli haluat tarkistaa ennen hakemusta, että osoitteesi on Uskelan
            alueella voit hyödyntää yllä olevaa kaupungin karttaa. Vanha Salon
            alue ja vanhat ympäryskunnat kuten Halikko, Pertteli ja Muurla eivät
            kuulu Uskelan alueeseen. Vanha Salon alue on merkitty karttaan
            liilan värisillä rajoilla. Painamalla "suurenna karttaa" oikeasta
            yläkulmasta pääset kaupungin karttapalveluun, jossa voit katsoa oman
            osoitteesi sijainnin kartalla.
          </p>
          <p className="kartta1">
            Mikäli haluat tarkistaa ennen hakemusta, että osoitteesi on Uskelan
            alueella voit hyödyntää{" "}
            <span>
              <a href="https://kartta.salo.fi/IMS/fi/embed?layers=Opaskartta&lon=Kuntarajat%202008%20025-64&lon=Salo%201966%20025-64&cp=6697344,23509952&z=32&ui=z!g!o">
                kaupungin karttapalvelua
              </a>
            </span>
            . Vanha Salon alue ja vanhat ympäryskunnat kuten Halikko, Pertteli
            ja Muurla eivät kuulu Uskelan alueeseen. Vanha Salon alue on
            merkitty karttaan liilan värisillä rajoilla. Kaupungin
            karttapalvelussa voit myös tarkistaa oman osoitteesi sijainnin
            kartalla.
          </p>
          <p>
            Alla olevista painikkeista löydät hakemusilmoituksen,
            hakemulomakkeen ja rekisteriselosteen. Sinun tulee tulostaa ja
            täyttää hakemuslomake. Voit joko skannata tai valokuvata täytetyn
            ham hakemusta varten. Hakemus pakollisine liitteineen
            tulee lähettää sähköpostiosoitteeseemme:{" "}
            <a href="mailto: info@uskelanopintorahsto.fi">
              info@uskelanopintorahasto.fi.{" "}
            </a>
            Pakollisia liitteitä ovat jäljennös viimeisestä
            koulu/opiskelutodistuksesta sekä todistus opiskelupaikasta.
            Hakemuksen vastaanottamisesta tulee automaattinen
            vastaanottokuittaus.
          </p>
          <p className="hakemuspainike">
            <button className="btn">
              <a href={""}>
                {" "}
                <span className="linkki">Hakemusilmoitus</span>{" "}
              </a>
            </button>{" "}
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
