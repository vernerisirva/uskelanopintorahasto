import React from "react"
import Title from "../components/Title"
import { Button } from "react-bootstrap"
const hakemus = () => {
  return (
    <>
      <section className="hakemus">
        <div className="section about-text section-center about-center">
          <p id="hakemus"></p>
          <Title title="Apurahahakemus" />
          <p>Pääset hakuohjeisiin alla olevasta painikkeesta.</p>
          <p>
            <Button variant="danger">Danger</Button>{" "}
            <Button variant="info">Info</Button>{" "}
          </p>
        </div>
      </section>
    </>
  )
}

export default hakemus
