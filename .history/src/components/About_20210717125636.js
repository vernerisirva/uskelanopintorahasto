import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Title from "../components/Title"
import { StaticImage } from "gatsby-plugin-image"

const query = graphql`
  {
    file(relativePath: { eq: "icon.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <section className="about-page">
      <div className="section-center about-center">
        <article className="about-text">
          <StaticImage src="" className="about-img"></StaticImage>
          <p id="tietoasaatiosta"></p> <Title title="Tietoa säätiöstä" />
          <p>
            Uskelan opintorahastosäätiön tarkoituksena on opintoavustusten ja
            -lainojen jakaminen. Tarkoituksensa toteuttamiseksi säätiö ylläpitää
            opintorahastoa, josta annetaan entisen Uskelan kunnan alueella
            vakinaisesti asuville lahjakkaille nuorille lukio-, ammattikoulu-,
            ammattikorkeakoulu-, korkeakoulu- ja muihin niihin verrattavia
            opintoja varten opintoavustuksia ja -lainoja sen mukaan kuin näissä
            säännöissä lähemmin määrätään.
          </p>
          <p>
            Avustuksia voidaan säätiön hallituksen harkinnan mukaan antaa myös
            tieteelliseen tutkimustyöhön, opetus- ja kasvatustyötä käsittelevän
            kirjallisen tuotannon tukemiseen sekä kotiseututyöhön ja sellaiseen
            liittyvään taidehankintaan tai taiteen harjoittajan työn tukemiseen
            ensinnäkin siltä osin, kuin edellä tarkoitetulla tutkimustyöllä tai
            muulla toiminnalla on liittymäkohta entiseen Uskelan kuntaan, sen
            alueeseen tai asukkaisiin ja toiseksi ilman tällaista
            liittymäkohtaakin, mikäli edellä tarkoitettu tutkija, kirjallisen
            tuotannon tekijä tai taiteen harjoittaja asuu vakinaisesti entisen
            Uskelan kunnan alueella.
          </p>
          <p>
            Edelleen avustuksia voidaan säätiön hallituksen harkinnan mukaan
            antaa myös vuosien 1939-1945 sotiin osallistuneiden
            Rintamasotilastunnuksen tai Rintamapalvelutunnuksen omaavien
            veteraanien kuntoutukseen. Tässä kappaleessa tarkoitettujen
            avustusten saajien tulee olla entisen Uskelan kunnan alueella
            vakinaisesti asuvia tai sieltä kotoisin olevia. Hallituksen on
            vuosittain määräämänään aikana julistettava opintoavustukset ja
            mahdolliset opintolainat haettaviksi sekä hakemusten perusteella ne
            harkintansa mukaan myöntää. Säätiön hallituksen tulee
            opintoavustuksia ja -lainoja myöntäessään kiinnittää huomiota
            siihen, onko takeita hakijan kyvystä ja taidosta opintojensa
            menestykselliseen suorittamiseen sekä opintojen edistymiseen ja
            niiden vaiheeseen.
          </p>
          <div className="about-stack">
            {/* {stack.map(item => {
                                return <span key={item.id}>{item.title}</span>
                            })} */}
          </div>
        </article>
      </div>
    </section>
  )
}

export default About
