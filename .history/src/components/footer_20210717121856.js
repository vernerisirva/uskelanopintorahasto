import React from "react"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h5>
          copyright&copy;{new Date().getFullYear()}
          <span> Uskelan opintorahastosäätiö </span> Kaikki oikeudet pidätetään
        </h5>
      </div>
    </footer>
  )
}

export default Footer