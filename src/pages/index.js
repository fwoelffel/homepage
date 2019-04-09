import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[]} />
    <ul>
      <li><a href={`https://github.com/fwoelffel`}>Github</a></li>
      <li><a href={`https://www.linkedin.com/in/fredericwoelffel/`}>Linkedin</a></li>
      <li><a href={`https://twitter.com/fwoelffel`}>Twitter</a></li>
      <li><a href={`https://frdricwoelffel.typeform.com/to/TgRdLj`}>Get in touch</a></li>
    </ul>
    <p>This is still under construction, come back later!</p>
  </Layout>
)

export default IndexPage
