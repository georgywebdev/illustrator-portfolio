import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSitePost {
        edges {
          node {
            title
            slug
            preview {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Work" />
      <h1>I'm a designer.</h1>
      <ul>
        {data.allContentfulSitePost.edges.map(edge => {
          return (
            <li>
              <Link to={`/work/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <img alt={""} src={edge.node.preview.file.url} />
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default IndexPage
