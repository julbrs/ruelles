import React, {useState} from 'react'
import PropTypes from 'prop-types'
import ReactMapboxGl, { Layer, Feature, ZoomControl, Image } from 'react-mapbox-gl'
import { getCenter } from 'geolib'
import StyledPopup from './map-popup'
import pinGreen from "../../images/pin-green.png"
import pinBlue from "../../images/pin-light-blue.png"
import pinYellow from "../../images/pin-yellow.png"

let Map = false

// Gatsby specific config
if (typeof window !== `undefined`) {
  Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoianVsaWVuYnJhcyIsImEiOiJja2E0czQyb3cwOXN3M3BtYmRsOHo4aDNjIn0.qkQ144JPcqHqm-h6ZqN-zg',
    scrollZoom: false,
    dragRotate: false,
  })
}

const toGeoJson = (obj) => {
  if(obj.latitude) {
    return [obj.longitude, obj.latitude]
  }
  else {
    return [obj.lng, obj.lat]
  }
}

const BackLaneMap = props => {
  const [backlane, setBackLane] = useState(null);
  const [center, setCenter] = useState([-73.590148, 45.543964]);
  const {backlanes} = props

  const handleClick = (backlane) => {
    setBackLane(backlane)
    setCenter(backlane.frontmatter.geojson)
  }

  const switchCursor = (evt, bool) => {
    if(bool) {
      evt.map.getCanvas().style.cursor = 'pointer'
    }
    else {
      evt.map.getCanvas().style.cursor = ''
    }
  }

  const blTransform = (backlane) => {
    if(backlane.frontmatter.position) {
      backlane.frontmatter.geojson = toGeoJson(backlane.frontmatter.position)
    }
    if(backlane.frontmatter.fill) {
      backlane.frontmatter.geojson = toGeoJson(getCenter(backlane.frontmatter.fill))
    }
    return backlane
  }

  return (
    <>
    {Map && <Map className="h-screen w-full"
      style="mapbox://styles/mapbox/light-v8"
      center={center}
      onClick={(map, evt) =>{
        console.log(evt.lngLat)
        setBackLane(null)
      }}
    >
      <Image id='pin-green' url={pinGreen}/>
      <Image id='pinBlue' url={pinBlue} />
      <Image id='pinYellow' url={pinYellow} />

      <Layer  type="symbol" layout={{
        'icon-image': 'pinYellow',
        'icon-size': 0.75,
        'icon-allow-overlap': true
        }}>
          {/* Print warning backlanes */}
        {backlanes
          .map(e => e.node)
          .filter(e => e.frontmatter.type == 'warning')
          .map(blTransform)
          .map(backlane => (
          <Feature key={backlane.id}
            coordinates={backlane.frontmatter.geojson}
            onMouseEnter={(evt) => switchCursor(evt, true)}
            onMouseLeave={(evt) => switchCursor(evt, false)}
            onClick={() => handleClick(backlane)}
            />
        ))}
      </Layer>

      <Layer  type="symbol" layout={{
        'icon-image': 'pin-green',
        'icon-size': 0.75,
        'icon-allow-overlap': true
        }}>
          {/* Print green backlanes */}
        {backlanes
          .map(e => e.node)
          .filter(e => e.frontmatter.type == 'ruelle_verte')
          .map(blTransform)
          .map(backlane => (
          <Feature key={backlane.id}
            coordinates={backlane.frontmatter.geojson}
            onMouseEnter={(evt) => switchCursor(evt, true)}
            onMouseLeave={(evt) => switchCursor(evt, false)}
            onClick={() => handleClick(backlane)}
            />
        ))}
      </Layer>

      <Layer  type="symbol" layout={{
        'icon-image': 'pinBlue',
        'icon-size': 0.75,
        'icon-allow-overlap': true
        }}>
          {/* Print blue backlanes */}
        {backlanes
          .map(e => e.node)
          .filter(e => e.frontmatter.type == 'ruelle')
          .map(blTransform)
          .map(backlane => (
          <Feature key={backlane.id}
            coordinates={backlane.frontmatter.geojson}
            onMouseEnter={(evt) => switchCursor(evt, true)}
            onMouseLeave={(evt) => switchCursor(evt, false)}
            onClick={() => handleClick(backlane)}
            />
        ))}
      </Layer>

      {/* handle popup */}
      {backlane && (
        <StyledPopup backlane={backlane} />
      )}
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