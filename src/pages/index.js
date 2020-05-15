import React from "react"
import { Link } from "gatsby"

import div from "../components/layout"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Header from "../components/Header"

const IndexPage = () => (
  <Layout>
    <div className="hero">
      <div className="hero-group">
        <h1>
          Learn to design and code <span>modern apps</span>
        </h1>
        <p>
          Complete courses about the best tools and design systems. Prototype
          and build apps with React and Swift.
        </p>
        <Link to="/page-2/">Watch the video</Link>
      </div>
    </div>
    <SEO title="Home" />
  </Layout>
)

export default IndexPage
