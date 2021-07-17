import React from "react"
import { Link } from "gatsby"

const data = [
  {
    id: 1,
    text: "Etusivu",
    url: "/",
  },
  {
    id: 2,
    text: "Tietoa säätiöstä",
    url: "/#vaakuna",
  },
  {
    id: 3,
    text: "Tietoa säätiöstä",
    url: "/#tietoasaatiosta",
  },
  {
    id: 4,
    text: "Ajankohtaista",
    url: "/#Ajankohtaista",
  },
  {
    id: 5,
    text: "Hakemus",
    url: "/#hakemus",
  },
  {
    id: 6,
    text: "Kuvia",
    url: "/kuvia",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
