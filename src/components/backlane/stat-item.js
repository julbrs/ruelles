import React from 'react'
import PropTypes from 'prop-types'

const StatItem = props => {
  const {
    text,
    value,
  } = props

  return (
    <div className="border-dotted border-2 rounded ">
      <p className="text-4xl text-green-800">{value}</p>
      <p className="text-gray-400 text--base">{text}</p>
    </div>
    )
}

StatItem.propTypes = {
    text: PropTypes.string,
    value: PropTypes.string
}

export default StatItem