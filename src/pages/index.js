import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroComponent from "../components/hero.component"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[]} />
    <HeroComponent/>
  </Layout>
)

export default IndexPage
