import React from "react"

const FooterComponent = ({ buildDate }) => (
  <div class="footer has-text-centered">
    <div class="container">
      <div class="has-background-warning has-text-weight-bold block">Disclaimer: This is still a work in progress.</div>
      <div class="has-text-grey-light"> Last built {buildDate.toLocaleDateString()} at {buildDate.toLocaleTimeString()}.</div>
    </div>
  </div>
)

export default FooterComponent;
