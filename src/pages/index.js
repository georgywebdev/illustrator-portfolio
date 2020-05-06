import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import ImageColumn from "../components/imageColumn"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Work" />
      <h1>I'm a designer.</h1>
      <ImageColumn />
    </Layout>
  )
}

export default IndexPage
