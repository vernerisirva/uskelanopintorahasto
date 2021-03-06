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
    text: "Uskelan vaakuna",
    url: "/#uskelanvaakuna",
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
