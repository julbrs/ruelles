import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import defaultImg from '../../images/default.png'

const Card = props => {
  const {
    backlane: {
        fields: {
            slug
        },
        frontmatter: {
            title,
            date,
            image
        }
    }
  } = props

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
        {image && (
            <Img className="w-full" fixed={image.childImageSharp.fixed} />
        )}
        {!image && (
            <img src={defaultImg}  />
        )}
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
                <Link to={slug}>{title}</Link>
                </div>
            <p className="text-gray-700 text-base">
            Un texte.
            </p>
        </div>
        <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{date}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
        </div>
    </div>
    )
}

Card.propTypes = {
    backlane: PropTypes.object
}

export default Card