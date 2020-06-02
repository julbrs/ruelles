import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { Popup } from 'react-mapbox-gl'
import Img from 'gatsby-image'

const StyledPopup = (props) => {
    const {backlane} = props

    return (
        <Popup key={`popup-${backlane.id}`} coordinates={backlane.frontmatter.geojson}>
            <div className="w-48">
                <Link to={backlane.fields.slug}>
                    <Img fixed={backlane.image.childImageSharp.fixed} />
                    <div className="px-2 py-2">
                        <div className="text-gray-700 font-bold text-sm">{backlane.frontmatter.title}</div>
                    </div>
                </Link>
                <div className="px-2 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">{backlane.frontmatter.date}</span>

                </div>
            </div>
        </Popup>
    )
}

StyledPopup.propTypes = {
    backlane: PropTypes.object
}

export default StyledPopup