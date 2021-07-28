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
            <h4 style={}>Kartta Uskelan rajoista</h4>
            Mikäli haluat tarkistaa ennen hakemusta, että osoitteesi on Uskelan
            alueella voit hyödyntää yllä olevaa kaupungin karttaa. Vanha Salon
            alue ja vanhat ympäryskunnat kuten Halikko, Pertteli ja Muurla eivät
            kuulu Uskelan alueeseen. Entinen Uskelan kunta on kartan keskellä.
            Uskelan kunnan rajanaapureita olivat entiset Halikon, Kuusjoen,
            Perttelin, Muurlan ja Perniön kunnat, joiden alueet eivät siis
            olleet osa Uskelaa. Myöskään vanha Salon kauppalan alue ei kuulunut
            Uskelaan. Tämä, vanhan kauppalan alueen vuoden 1966 raja, on
            merkitty karttaan violetilla rajaviivalla. Kaupungin
            karttapalvelussa, sen hakutoiminnolla, voit tarkistaa oman
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
            hakemuslomakkeen ja rekisteriselosteen. Sinun tulee tulostaa ja
            täyttää hakemuslomake sekä ottaa valokuva tai skannata täytetty
            hakemuslomake. Hakemuslomake pakollisine liitteineen tulee lähettää
            sähköpostiosoitteeseemme:{" "}
            <a href="mailto: info@uskelanopintorahasto.fi">
              info@uskelanopintorahasto.fi.{" "}
            </a>
            Pakollisia liitteitä ovat jäljennös viimeisestä
            koulu/opiskelutodistuksesta sekä todistus opiskelupaikasta.
            Hakemuksen vastaanottamisesta tulee automaattinen
            vastaanottokuittaus.
          </p>
          <p>
            Hakemuksen liitteineen voi myös palauttaa OP Lounaismaan Salon
            konttorin neuvontaan viimeistään torstaina 30.9. klo 16.30 mennessä.
          </p>
          <p>Vain määräaikaan mennessä palautetut hakemukset käsitellään.</p>
          <p>Ongelmatilanteessa ota yhteyttä jaakko.halkilahti@mtk.fi</p>
          <p>
            Jos hakemuksen sähköisessä lähetyksessä on ongelmia tai et saa
            vastaanottokuittausta, hakemus on syytä palauttaa paperisena OP
            Lounaismaan Salon konttoriin.
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
