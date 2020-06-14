import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const StatItem = props => {
  const {
    text,
    value,
    link
  } = props

  return (
    <div className="border-dotted border-2 rounded ">
      {link && (
        <Link to={link}>
          <p className="text-4xl text-green-800">{value}</p>
          <p className="text-gray-400 text--base">{text}</p>
        </Link>
      )}
      {!link && (
        <>
          <p className="text-4xl text-green-800">{value}</p>
          <p className="text-gray-400 text--base">{text}</p>
        </> 
      )}
      
    </div>
    )
}

StatItem.propTypes = {
    text: PropTypes.string,
    value: PropTypes.number,
    link: PropTypes.string,
}

export default StatItem