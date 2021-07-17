import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Title from "../components/Title"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <section className="about-page">
      <div className="section-center about-center">
        <article className="about-text">
          <div className="container">
            <div>
              <StaticImage
                src="../images/icon.png"
                className="about-img"
              ></StaticImage>
            </div>
            <div className=>
              <p>
                Vuonna 1952 Uskelan kunnanvaltuusto valitsi kolmesta
                ehdotuksesta Gustav von Numersin suunnitteleman vaakunan, jossa
                punaisessa kentässä kaksi hopeista häränsarvea muodostaa
                U-kirjaimen. Sarvien välissä on kultainen lilja.
              </p>
            </div>
          </div>
          <div>
            <p id="tietoasaatiosta"></p> <Title title="Tietoa säätiöstä" />
            <p>
              Uskelan opintorahastosäätiön tarkoituksena on opintoavustusten ja
              -lainojen jakaminen. Tarkoituksensa toteuttamiseksi säätiö
              ylläpitää opintorahastoa, josta annetaan entisen Uskelan kunnan
              alueella vakinaisesti asuville lahjakkaille nuorille lukio-,
              ammattikoulu-, ammattikorkeakoulu-, korkeakoulu- ja muihin niihin
              verrattavia opintoja varten opintoavustuksia ja -lainoja sen
              mukaan kuin näissä säännöissä lähemmin määrätään.
            </p>
            <p>
              Avustuksia voidaan säätiön hallituksen harkinnan mukaan antaa myös
              tieteelliseen tutkimustyöhön, opetus- ja kasvatustyötä
              käsittelevän kirjallisen tuotannon tukemiseen sekä kotiseututyöhön
              ja sellaiseen liittyvään taidehankintaan tai taiteen harjoittajan
              työn tukemiseen ensinnäkin siltä osin, kuin edellä tarkoitetulla
              tutkimustyöllä tai muulla toiminnalla on liittymäkohta entiseen
              Uskelan kuntaan, sen alueeseen tai asukkaisiin ja toiseksi ilman
              tällaista liittymäkohtaakin, mikäli edellä tarkoitettu tutkija,
              kirjallisen tuotannon tekijä tai taiteen harjoittaja asuu
              vakinaisesti entisen Uskelan kunnan alueella.
            </p>
            <p>
              Edelleen avustuksia voidaan säätiön hallituksen harkinnan mukaan
              antaa myös vuosien 1939-1945 sotiin osallistuneiden
              Rintamasotilastunnuksen tai Rintamapalvelutunnuksen omaavien
              veteraanien kuntoutukseen. Tässä kappaleessa tarkoitettujen
              avustusten saajien tulee olla entisen Uskelan kunnan alueella
              vakinaisesti asuvia tai sieltä kotoisin olevia. Hallituksen on
              vuosittain määräämänään aikana julistettava opintoavustukset ja
              mahdolliset opintolainat haettaviksi sekä hakemusten perusteella
              ne harkintansa mukaan myöntää. Säätiön hallituksen tulee
              opintoavustuksia ja -lainoja myöntäessään kiinnittää huomiota
              siihen, onko takeita hakijan kyvystä ja taidosta opintojensa
              menestykselliseen suorittamiseen sekä opintojen edistymiseen ja
              niiden vaiheeseen.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default About
