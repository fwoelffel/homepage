import React from "react"
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const HeroComponent = ({ title, description }) => (
  <section class="hero is-fullheight is-bold is-info">
    <div class="hero-body has-text-centered">
      <div class="container">
        <h1 class="title is-1 is-spaced">{title}</h1>
        <h2 class="subtitle">{description}</h2>
        <div class="is-block">
          <a className="social"
             href="https://www.linkedin.com/in/fredericwoelffel/"
             target="_blank"
             rel="noopener noreferrer">
            <FaLinkedin size="4em"/>
          </a>
          <a className="social"
             href="https://twitter.com/fwoelffel"
             target="_blank"
             rel="noopener noreferrer">
            <FaTwitter size="4em"/>
          </a>
          <a className="social"
             href="https://github.com/fwoelffel"
             target="_blank"
             rel="noopener noreferrer">
            <FaGithub size="4em"/>
          </a>
          <a className="social"
             href="https://frdricwoelffel.typeform.com/to/TgRdLj"
             target="_blank"
             rel="noopener noreferrer">
            <FaEnvelope size="4em"/>
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default HeroComponent;
