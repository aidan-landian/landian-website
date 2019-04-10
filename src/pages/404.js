import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Banner bannerText="Page not found"/>
  </Layout>
)

export default NotFoundPage
