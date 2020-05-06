import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import imagecolumnStyles from "./imagecolumn.module.scss"

const ImageColumn = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSitePost(sort: { fields: postOrderNumber, order: ASC }) {
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
    <div className={imagecolumnStyles.container}>
      <ul className={imagecolumnStyles.ul}>
        {data.allContentfulSitePost.edges.map(edge => {
          return (
            <li className={imagecolumnStyles.li}>
              <Link to={`/work/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <img
                  className={imagecolumnStyles.img}
                  alt={""}
                  src={edge.node.preview.file.url}
                />
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ImageColumn
