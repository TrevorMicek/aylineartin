import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Product from '../storeComponents/Product'
import AboutSection from '../components/tailwindComps/AboutPage'
const IndexPage = () => {


return(
  <Layout title="About"  pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto [second] auto [third] auto [fourth] auto"}}>
    <SEO title="Home" />
   <Product />
  </Layout>
)
}
export default IndexPage