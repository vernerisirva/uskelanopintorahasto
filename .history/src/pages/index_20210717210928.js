import * as React from "react"
import Layout from "../components/Layout"

// markup
const IndexPage = ({ children }) => {
  console.log(process.env.CLOUDINARY_API_KEY)
  return (
    <>
      <Layout></Layout>
    </>
  )
}

export default IndexPage
