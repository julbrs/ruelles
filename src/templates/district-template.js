
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../layouts/layout'
import SEO from '../components/seo'
import BackLaneList from '../components/backlane/list'

const DistrictTemplate = ({data}, district) => {
  const { 
    allMarkdownRemark: {
      totalCount,
      group
    }
  } = data
  console.log(district)

  return (
    <Layout>
      <SEO
        title={`Liste des ruelles vertes de ${district}`}
      />
      <article className="max-w-6xl py-4 mx-auto md:px-4 md:py-8">
      <h1>Liste des <strong>{totalCount}</strong> ruelles vertes de xxx</h1>
      {group
        .map(date => (
          <div key={date.fieldValue}>
            <h2>{date.fieldValue}</h2>
            <p>{date.totalCount} ruelles crées.</p>
            <BackLaneList backlanes={date.nodes} />
          </div>
        ))}
      </article>
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
            image {
              childImageSharp {
                fixed(width: 320, height: 200) {
                  ...GatsbyImageSharpFixed
                }
              } 
            }
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