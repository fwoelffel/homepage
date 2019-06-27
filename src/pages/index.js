import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroComponent from "../components/hero.component"
import { StaticQuery } from "gatsby"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          buildTime,
          siteMetadata {
            title,
            description,
            position
          }
        }
      }
    `}
    render={
      data => (
        <Layout>
          <SEO
            title={data.site.siteMetadata.title}
            description={data.site.siteMetadata.description}
            keywords={[]}
          />
          <HeroComponent
            title={data.site.siteMetadata.title}
            subtitle={data.site.siteMetadata.position}
          />
        </Layout>
      )
    }>
  </StaticQuery>
)

export default IndexPage
