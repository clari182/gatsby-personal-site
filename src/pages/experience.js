import React from "react"

import SEO from "../components/seo"
import Helmet from "react-helmet";
import Button from "../components/common/button";
import Navbar from "../containers/navbar";

const ExperiencePage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Clara Youdale</title>
      <link rel="canonical" href="https://clarayoudale.com" />
    </Helmet>
    <SEO title="404: Not found" />

    <div className="main-wrapper">
      <Navbar />
      <div id="main-content">
        <section className="">
          <div className="container" style={{ display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", alignItems: "center" }}>
            <div className="main-title-wrapper">
              <div className="sub-title-wrapper">
                <h4 className="site-subtitle">Oops!</h4>
              </div>
              <h4 className="sitemain-subtitle">Page <span>not found</span></h4>
              <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
              <a href="/">
                <Button
                  Class="button1 btn button2 gradient-color"
                  Name="Go back home"
                  BtnIcon="btn-icon"
                  style={{ margin: "auto" }} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  </>
)

export default ExperiencePage
