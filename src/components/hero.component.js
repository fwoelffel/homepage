import { graphql, StaticQuery } from "gatsby"
import { Container, Hero, Title } from "rbx"
import React from "react"

const HeroComponent = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          buildTime
          siteMetadata {
            title,
            description
          }
        }
      }
    `}
    render={data => (
      <Hero gradient color={"primary"} size={"fullheight"}>
        <Hero.Body>
          <Container textAlign={"centered"}>
            <Title size={1}>{data.site.siteMetadata.title}</Title>
            <Title subtitle>
              {data.site.siteMetadata.description}
            </Title>
          </Container>
        </Hero.Body>
      </Hero>
    )}
  />
)


export default HeroComponent
