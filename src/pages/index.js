import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from "../layouts/layout"
import SEO from "../components/seo"

import BackLaneMap from '../components/backlane/map'
import BackLaneStat from '../components/backlane/stat'

const IndexPage = ({data}) => {
  const {
    map
  } = data
  return (
    <Layout>
      <SEO
        title="Acceuil"
      />
      <BackLaneMap backlanes={map.edges} />
      <BackLaneStat data={data}/>
    </Layout>
  );
}

IndexPage.propTypes = {
  data: PropTypes.object
}

export const indexQuery = graphql`
  query {
    map:allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
            containImage
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
            image {
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
    all:allMarkdownRemark {
      totalCount
      district: group(field:frontmatter___district) {
        fieldValue
        totalCount
      }
      date: group(field:frontmatter___date) {
        fieldValue
        totalCount
      }
    }
    green:allMarkdownRemark(filter: {frontmatter: {type: {eq: "ruelle_verte"}}}) {
      totalCount
    }
    warning:allMarkdownRemark(filter: {frontmatter: {type: {eq: "warning"}}}) {
      totalCount
    }
    nopic:allMarkdownRemark(filter: {frontmatter: {image: {base: {eq: "default.png"}}}}) {
      totalCount
    }
    nodate:allMarkdownRemark(filter: {frontmatter: {date: {eq: "?"}}}) {
      totalCount
    }
  }
`

export default IndexPage;
