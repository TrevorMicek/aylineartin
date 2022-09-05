import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import About from '../components/tailwindComps/About'
const IndexPage = () => {


return(
  <Layout title="About"  pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto [second] auto [third] auto [fourth] auto"}}>
    <SEO title="Home" />
    about page
  </Layout>
)
}
export default IndexPage