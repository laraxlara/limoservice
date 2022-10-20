import * as React from "react"
import PropTypes from "prop-types"
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, title, children, slug, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author
            keywords
          }
        }
        favicon: file(name: { eq: "favicon" }) {
          publicURL
        }
        social: file(name: { eq: "timsmith-social" }) {
          publicURL
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const keywords = site.siteMetadata.keywords

  return (
    <>
    <Helmet htmlAttributes={{ lang: `en` }} titleTemplate={`%s | ${site.siteMetadata.title}`}>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <link rel='canonical' href={`${site.siteMetadata.siteUrl}${slug}`} />
      {/* <link rel='shortcut icon' href={site.favicon.publicURL} /> */}
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {/* <meta name='og:image' content={`${site.siteMetadata.siteUrl}${image || site.social.publicURL}`} /> */}
      <meta name='og:url' content={`${site.siteMetadata.siteUrl}/${slug}`} />
      <meta name='og:site_name' content={site.siteMetadata.title} />
      {children}
    </Helmet>
    </>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  slug: PropTypes.string,
}

export default Seo
