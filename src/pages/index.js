import React from "react"
import { Link } from "gatsby"

import div from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Learn to design and code modern apps</h1>
      <p>
        Complete courses about the best tools and design systems. Prototype and
        build apps with React and Swift.
      </p>
      <Link to="/page-2/">Watch the video</Link>
    </div>
  </Layout>
)

export default IndexPage
