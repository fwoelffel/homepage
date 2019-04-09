/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import "./style.scss"
import { Container, Hero, HeroBody, HeroFooter, HeroHeader, Title } from "bloomer"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          buildTime
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Hero isFullHeight={true} isColor='info' isSize='medium'>
        <HeroHeader>
        </HeroHeader>

        <HeroBody>
          <Container hasTextAlign='centered'>
            <Title>Title</Title>
          </Container>
        </HeroBody>

        <HeroFooter>

        </HeroFooter>
      </Hero>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
