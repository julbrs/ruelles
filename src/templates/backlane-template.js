
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../layouts/layout'
import SEO from '../components/seo'

const BackLaneTemplate = ({data}) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
      />
      {
        frontmatter.cover && (
          <Img className="h-48 mb-8" fluid={frontmatter.cover.childImageSharp.fluid} />
        )
      }
      <h1 className="text-2xl text-green-700 font-bold leading-snug">
      {frontmatter.title}
      </h1>
        
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
    </Layout>
  )
}

BackLaneTemplate.propTypes = {
  data: PropTypes.object
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
          slug
      }
      frontmatter {
        date
        title
        cover {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          } 
        }
      }
    }
  }
`

export default BackLaneTemplate