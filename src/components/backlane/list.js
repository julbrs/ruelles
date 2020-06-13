import React from 'react'
import PropTypes from 'prop-types'
import Card from './card'

const BackLaneList = props => {
    const {backlanes} = props

    return (
        <div className="container lg:px-8 grid md:grid-cols-3 gap-4">
          {backlanes
            .map(backlane => (
              <Card key={backlane.id} backlane={backlane} />
          ))}
        </div>
      )
}

BackLaneList.propTypes = {
    backlanes: PropTypes.array
}

export default BackLaneList