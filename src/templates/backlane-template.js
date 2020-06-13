
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../layouts/layout'
import SEO from '../components/seo'
// import EvaluationItem from '../components/backlane/evaluation-item'

const BackLaneTemplate = ({data}) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
      />
      <article className="max-w-4xl py-4 mx-auto md:px-4 md:py-8">
        {frontmatter.image && (
          <Img className="h-48 mb-8" fluid={frontmatter.image.childImageSharp.fluid} />
        )}
        {/* <div className="grid md:grid-cols-2 gap-4">
          
          <ul className="flex   flex-col p-4">
            <EvaluationItem icon="🛣️" text="Surface" value={frontmatter.surface} />
            <EvaluationItem icon="🌱" text="Végétal" value={frontmatter.vegetal} />
            <EvaluationItem icon="⛏️" text="Entretien" value={frontmatter.entretien} />
            <EvaluationItem icon="🎨" text="Art" value={frontmatter.art} />
            <EvaluationItem icon="⭐" text="Note" value={star} important />
          </ul>
          <ul className="flex flex-col p-4">
            <EvaluationItem icon="🛣️" text="Surface" value={frontmatter.surface} />
            <EvaluationItem icon="🌱" text="Végétal" value={frontmatter.vegetal} />
            <EvaluationItem icon="⛏️" text="Entretien" value={frontmatter.entretien} />
            <EvaluationItem icon="🎨" text="Art" value={frontmatter.art} />
            <EvaluationItem icon="⭐" text="Note" value={star} important />
          </ul>
        </div> */}
        
        <h1 className="text-2xl text-green-700 font-bold leading-snug">
          {frontmatter.title}
        </h1>

        <div className="container flex mx-auto w-full items-center justify-center">
          
        </div>
        
        <h2>{frontmatter.date}</h2>
        <div
          className="backlane-content markdown"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
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
      star 
      fields {
          slug
      }
      frontmatter {
        date
        title
        surface
        vegetal
        entretien
        art
        image {
          childImageSharp {
            fluid(maxWidth: 1280, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          } 
        }
      }
    }
  }
`

export default BackLaneTemplate