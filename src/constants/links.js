import React from "react";
import { Link } from "gatsby"

const data = [
    {
        id: 1,
        text: "Etusivu",
        url: "/"
    },
    {
        id: 2,
        text: "Tietoa säätiöstä",
        url: "/#tietoasaatiosta"
    },
    {
        id: 3,
        text: "Ajankohtaista",
        url: "/#ajankohtaista"
    },
    {
        id: 4,
        text: "Hakemus",
        url: "/#hakemus"
    },
    {
        id: 5,
        text: "Kuvia",
        url: "/#kuvia"
    }
]


const tempLinks = ({ styleClass }) => {
    return (
        <ul className={`page-links ${styleClass ? styleClass : ""}`}>
            {data.map((link) => {
                <li key={link.id}>
                    <Link to={link.url}> {link.text}</Link>
                </li>
            })}
        </ul>
    )
}
export default tempLinks;