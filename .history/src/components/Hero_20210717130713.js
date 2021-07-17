import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundSlider from "gatsby-image-background-slider"

const Hero = ({ children }) => (
  <>
    <main>{children}</main>
    <BackgroundSlider
      initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
      transition={4} // transition duration between images
      duration={8} // how long an image is shown
      // specify images to include (and their order) according to `relativePath`
      images={[
        "kuva1.jpg",
        "kuva2.jpg",
        "kuva3.jpg",
        "kuva4.jpg",
        "kartta_kuva.jpg",
      ]}

      // pass down standard element props
      // style={{
      //     transform: "rotate(-2deg) scale(.9)",
      // }}
    >
      {/* Captions in sync with background images*/}
      <>
        {/* Giraffes don't talk; [they aren't real](https://chivomengro.com/2017/10/23/the-truth-comes-out-giraffes-are-a-hoax/) */}
      </>
    </BackgroundSlider>
  </>
)
export default Hero
