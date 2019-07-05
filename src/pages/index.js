import React from "react"

import Layout from "../components/layout"
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
        <Layout
          description={data.site.siteMetadata.description}
        >
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
