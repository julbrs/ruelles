import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from "../layouts/layout"
import SEO from "../components/seo"

import BackLaneList from '../components/backlane/list'

const ListPage = ({data}) => {
  return (
    <Layout>
      <SEO
        title="Liste des ruelles"
      />
      <BackLaneList backlanes={data.allMarkdownRemark.edges} />
    </Layout>
  );
}

ListPage.propTypes = {
  data: PropTypes.object
}

export const listQuery = graphql`
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
          }
        }
      }
    }
  }
`

export default ListPage;
