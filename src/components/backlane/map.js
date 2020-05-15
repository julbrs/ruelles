import React from 'react'
import PropTypes from 'prop-types';
import ReactMapboxGl, { Layer, Feature, ZoomControl, Image } from 'react-mapbox-gl';
import pinGreen from "../../images/pin-green.png";
// import pinBlue from "../../images/pin-light-blue.png";

const AllShapesPolygonCoords = [
  [
    [-73.584094, 45.548877],
    [-73.583708, 45.549395],
    [-73.581128, 45.548617],
    [-73.58145, 45.548065],
  ]
]

const polygonPaint = {
  'fill-color': '#6F788A',
  'fill-opacity': 0.7
}

let Map = false

// Gatsby specific config
if (typeof window !== `undefined`) {
  Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoianVsaWVuYnJhcyIsImEiOiJja2E0czQyb3cwOXN3M3BtYmRsOHo4aDNjIn0.qkQ144JPcqHqm-h6ZqN-zg'
  })
}

const BackLaneMap = props => {
    const {backlanes} = props

    return (
      <>
      {Map && <Map
        style="mapbox://styles/mapbox/streets-v8"
        center={{
          lat: 45.543964,
          lng: -73.590148
      }}
        containerStyle={{
          height: '80vh',
          width: '100%'
        }}
      >
        <Image id='pinGreen' url={pinGreen} />
        {backlanes.map(backlane => (
          <Layer key={backlane.id} type="symbol" layout={{
              'icon-image': 'pinGreen'
              }}
             >
            <Feature 
              coordinates={[backlane.position.lng, backlane.position.lat]}
              onClick={() => {
                alert('bla')
              }}
              />
          </Layer>
        ))}
        {/* test */}
        <Layer type="fill" paint={polygonPaint}>
          <Feature coordinates={AllShapesPolygonCoords} />
        </Layer>
        <ZoomControl />
      </Map>
      }
      </>
      )
}

BackLaneMap.propTypes = {
    backlanes: PropTypes.array
}

export default BackLaneMap