import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import BlogLayout from '../../components/BlogLayout'
import Seo from '../../components/seo'

const BlogPost = ({ data, children }) => {
  return (
    <Layout  pageTitle={data.mdx.frontmatter.title}>
      <BlogLayout>
        <h1>{data.mdx.frontmatter.title}</h1>
        <p>{data.mdx.frontmatter.date}</p>
        {children}
      </BlogLayout>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost