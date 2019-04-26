import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroComponent from "../components/hero.component"
import FooterComponent from "../components/footer.component"
import TimelineComponent from "../components/timeline.component"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[]} />
    <HeroComponent/>
    <TimelineComponent/>
    <FooterComponent/>
  </Layout>
)

export default IndexPage
