
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../layouts/layout'
import SEO from '../components/seo'
import BackLaneList from '../components/backlane/list'

const DistrictTemplate = ({data}) => {
  const { 
    allMarkdownRemark: {
      totalCount,
      group
    }
  } = data

  return (
    <Layout>
      <SEO
        title="Liste des ruelles vertes de Rosemont"
      />
      <h1>Liste des <strong>{totalCount}</strong> ruelles vertes de Rosemont</h1>
      {group
        .map(date => (
          <div key={date.fieldValue}>
            <h2>{date.fieldValue}</h2>
            <p>{date.totalCount} ruelles crées.</p>
            <BackLaneList backlanes={date.nodes} />
          </div>
        ))}
    </Layout>
  )
}

DistrictTemplate.propTypes = {
  data: PropTypes.object
}
export const pageQuery = graphql`
  query($district: String!) {
    allMarkdownRemark(filter: {frontmatter: {district: {eq:$district}, type: {eq:"ruelle_verte"}}}) {
      totalCount
      group(field: frontmatter___date) {
        fieldValue
        totalCount
        nodes {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default DistrictTemplate