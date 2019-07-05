/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import "./style.scss"
import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import { config } from '@fortawesome/fontawesome-svg-core'
import FooterComponent from "./footer.component"
import SEO from "./seo"
config.autoAddCss = false;

const Layout = ({ children, description }) => {
  console.log(description);
  return <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            description
          }
          buildTime
        }
      }
    `}
    render={data => (
      <>
        <SEO
          title={data.site.siteMetadata.title}
          description={description || data.site.siteMetadata.description}
          keywords={[]}
        />
        <main>{children}</main>
        <FooterComponent
          buildDate={new Date(data.site.buildTime)}
        />
      </>
    )}
  />
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
