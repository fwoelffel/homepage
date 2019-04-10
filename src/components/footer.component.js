import React from "react"
import { Block, Container, Footer } from "rbx"
import { StaticQuery } from "gatsby"


const FooterComponent = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          buildTime
        }
      }
    `}
    render={data => (
      <Footer>
        <Container textAlign={"centered"}>
          <Block backgroundColor={"warning"} textWeight={"bold"}>Disclaimer: This is still a work in progress.</Block>
          <Block textColor={"grey-light"}>Last built {new Date(data.site.buildTime).toLocaleDateString()} at {new Date(data.site.buildTime).toLocaleTimeString()}</Block>
        </Container>
      </Footer>
    )}
  />
)

export default FooterComponent;
