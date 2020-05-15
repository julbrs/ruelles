import React from 'react'
import PropTypes from 'prop-types';

const BackLaneList = props => {
    const {backlanes} = props

    return (
        <div className="container lg:px-24">
          {backlanes.map(backlane => (
            <div  key={backlane.id}>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/6  h-12">
                  <h3 className="text-2xl text-blue-500 font-bold leading-snug">
                    {backlane.name}
                  </h3>
                </div>
                
                <div className="w-full lg:w-2/6  h-12">
                  <p className="text-blue-900">
                      bla    
                  </p>
                </div>
              </div>
              <hr className="my-8 border-b-2 border-gray-200" />
            </div>
          ))}
        </div>
      )
}

BackLaneList.propTypes = {
    backlanes: PropTypes.array
}

export default BackLaneList