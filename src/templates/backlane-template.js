
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../layouts/layout'
import SEO from '../components/seo'

const BackLaneTemplate = ({data}) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, image } = markdownRemark

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
      />
      <Img className="h-78 mb-8" fluid={image.childImageSharp.fluid} />
      <h1 className="text-2xl text-green-700 font-bold leading-snug">
      {frontmatter.title}
      </h1>
        
        <h2>{frontmatter.date}</h2>
        <div
          className="backlane-content markdown"
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
      image {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        } 
      }
      fields {
          slug
      }
      frontmatter {
        date
        title
      }
    }
  }
`

export default BackLaneTemplate