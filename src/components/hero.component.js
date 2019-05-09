import { graphql, StaticQuery } from "gatsby"
import { Block, Container, Hero, Title } from "rbx"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import * as Trianglify from "trianglify"

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
    render={data => {
      // TODO Handle resize
      const height = window.innerHeight;
      const width = window.innerWidth;
      const pattern = Trianglify({
        width,
        height,
        x_colors: 'YlGnBu',
        cell_size: 40,
        variance: 0.80,
      });
      return (
        <Hero color={"primary"} size={"fullheight"}>
          <svg height={height} width={width} style={{ position: "absolute" }}>
            {
              pattern.polys.map((poly, index) => (
                <path
                  key={index}
                  d={`M${poly[1].join('L')}Z`}
                  fill={poly[0]}
                  stroke={poly[0]}
                  strokeWidth={pattern.opts.stroke_width}
                />
              ))
            }
          </svg>
          <Hero.Body>
            <Container textAlign={"centered"}>
              <Block>
                <Title className={"is-uppercase"} size={1} spaced textColor={"darkslategray"}>{data.site.siteMetadata.title}</Title>
                <Title subtitle>
                  {data.site.siteMetadata.description}
                </Title>
              </Block>
              <Block>
                <a className={"social"} href={"https://www.linkedin.com/in/fredericwoelffel/"} target={"_blank"}>
                  <FontAwesomeIcon className={"tablet"} icon={faLinkedin} size="3x" />
                </a>
                <a className={"social"} href={"https://twitter.com/fwoelffel"} target={"_blank"}>
                  <FontAwesomeIcon icon={faTwitter} size="3x" />
                </a>
                <a className={"social"} href={"https://github.com/fwoelffel"} target={"_blank"}>
                  <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
                <a className={"social"} href={"https://frdricwoelffel.typeform.com/to/TgRdLj"} target={"_blank"}>
                  <FontAwesomeIcon icon={faEnvelope} size="3x" />
                </a>
              </Block>
            </Container>
          </Hero.Body>
        </Hero>
      )
    }}
  />
)


export default HeroComponent
