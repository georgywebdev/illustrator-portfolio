import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulSitePost(slug: { eq: $slug }) {
      title
      body {
        json
      }
    }
  }
`

const Work = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <Head title={props.data.contentfulSitePost.title} />
      <h1>{props.data.contentfulSitePost.title}</h1>
      {documentToReactComponents(
        props.data.contentfulSitePost.body.json,
        options
      )}
    </Layout>
  )
}

export default Work
