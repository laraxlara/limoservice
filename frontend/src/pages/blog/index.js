import React from 'react'
import { Link, graphql } from 'gatsby'
import BlogLayout from '../../components/BlogLayout'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const index = ({ data }) => {
  return (
    <Layout>
    <BlogLayout>
      <ul>
      {
        data.allMdx.nodes.map((node) => (
            <article key={node.id}>
              <h3>
                <Link to={`/blog/${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h3>
              <p>Posted: {node.frontmatter.date}</p>
              <p>{node.excerpt}</p>
            </article>
        ))
      }
      </ul>
    </BlogLayout>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(filter: {frontmatter: {key: { eq: "blog" }}}, sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Blog" />

export default index
