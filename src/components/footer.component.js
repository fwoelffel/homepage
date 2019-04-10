import React from "react"
import { Container, Footer } from "rbx"
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
          <p className={"has-text-grey-light"}>Last built {new Date(data.site.buildTime).toLocaleDateString()} at {new Date(data.site.buildTime).toLocaleTimeString()}</p>
        </Container>
      </Footer>
    )}
  />
)

export default FooterComponent;
