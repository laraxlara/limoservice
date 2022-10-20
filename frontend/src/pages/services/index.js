import React from 'react'
import { Link, graphql } from 'gatsby'
import ServiceLayout from '../../components/ServiceLayout'
import Seo from '../../components/seo'

const index = ({ data }) => {
  return (
    <ServiceLayout>
      <ul>
      {
        data.allMdx.nodes.map((node) => (
            <article key={node.id}>
              <h3>
                <Link to={`/services/${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h3>
              <p>{node.excerpt}</p>
            </article>
        ))
      }
      </ul>
    </ServiceLayout>
  )
}

export const query = graphql`
query {
  allMdx (filter: {frontmatter: {key: { eq: "service" }}}) {
    nodes {
      frontmatter {
        title
        slug
      }
      id
    }
  } 
}
`

export const Head = () => <Seo title="Services" />

export default index
