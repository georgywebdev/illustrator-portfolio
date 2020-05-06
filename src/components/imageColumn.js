import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const ImageColumn = () => {
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
  )
}

export default ImageColumn
