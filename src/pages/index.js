import React, { useEffect } from "react"
import {Helmet} from "react-helmet"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import About from '../components/tailwindComps/AboutSection'
import Music from '../components/tailwindComps/Music'
import PerformedAt from '../components/tailwindComps/Perform'
import Contact from '../components/tailwindComps/Contact'
import Vid from '../components/tailwindComps/Video'
const IndexPage = () => {

  return (
  <Layout title="Small Business Web Design & Development" pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto [second] auto [third] auto [fourth] auto [fifth] auto [sixth] auto"}}>
    <SEO title="Home" />

    <Vid />
    <About />
    <Music />
    <PerformedAt />
    <Contact  />
  </Layout>
  )
}
export default IndexPage
