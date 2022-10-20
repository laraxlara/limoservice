import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import ServiceLayout from '../../components/ServiceLayout'
import Seo from '../../components/seo'

const Service = ({ data, children }) => {
  return (
    <>
      <ServiceLayout>
        <h1>{data.mdx.frontmatter.title}</h1>
        {children}
      </ServiceLayout>
    </>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
      }
    }
  }
`

export const Head = () => <Seo title="Service" />

export default Service
