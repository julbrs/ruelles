import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from "../layouts/layout"
import SEO from "../components/seo"

import BackLaneMap from '../components/backlane/map'

const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO
        title="Acceuil"
      />
      <BackLaneMap backlanes={data.allMarkdownRemark.edges} />
    </Layout>
  );
}

IndexPage.propTypes = {
  data: PropTypes.object
}

export const indexQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date
            title
            type
            fill {
              lat
              lng
            }
            position {
              lat
              lng
            }
            cover {
              childImageSharp {
                fixed(width: 192, height: 128) {
                  ...GatsbyImageSharpFixed
                }
              } 
            }
          }
        }
      }
    }
  }
`

export default IndexPage;
