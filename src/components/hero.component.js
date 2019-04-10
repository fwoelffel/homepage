import { graphql, StaticQuery } from "gatsby"
import { Block, Container, Hero, Title } from "rbx"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

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
            <Block>
              <Title size={1}>{data.site.siteMetadata.title}</Title>
              <Title subtitle>
                {data.site.siteMetadata.description}
              </Title>
            </Block>
            <Block>
              <a className={"social"} href={"https://www.linkedin.com/in/fredericwoelffel/"} target={"_blank"}>
                <FontAwesomeIcon icon={faLinkedin} size="4x" />
              </a>
              <a className={"social"} href={"https://twitter.com/fwoelffel"} target={"_blank"}>
                <FontAwesomeIcon icon={faTwitter} size="4x" />
              </a>
              <a className={"social"} href={"https://github.com/fwoelffel"} target={"_blank"}>
                <FontAwesomeIcon icon={faGithub} size="4x" />
              </a>
              <a className={"social"} href={"https://frdricwoelffel.typeform.com/to/TgRdLj"} target={"_blank"}>
                <FontAwesomeIcon icon={faEnvelope} size="4x" />
              </a>
            </Block>
          </Container>
        </Hero.Body>
      </Hero>
    )}
  />
)


export default HeroComponent
