import React, {useState} from 'react'
import PropTypes from 'prop-types'
import ReactMapboxGl, { Layer, Feature, ZoomControl } from 'react-mapbox-gl'
import { getCenter } from 'geolib'
import StyledPopup from './map-popup'

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
    console.log(backlane.image)
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
        <Layer type="circle" paint={{
          'circle-radius': {
            'type': 'identity',
            'property': 'radius'
          },
          'circle-color': {
            'type': 'identity',
            'property': 'color'
          },
          'circle-stroke-width': 1,
          'circle-blur': 0.2, 
          'circle-stroke-color': {
            'type': 'identity',
            'property': 'border'
          },
          'circle-opacity': {
            'type': 'identity',
            'property': 'opacity'
          }
          }}>
          {backlanes
            .map(e => e.node)
           // .filter(e => e.frontmatter.type == layer.filter)
            .map(blTransform)
            .map(backlane => (
            <Feature key={backlane.id}
              coordinates={backlane.frontmatter.geojson}
              properties={{
                color: backlane.frontmatter.type=='ruelle_verte'?'green':'blue',
                radius: 10,
                opacity: backlane.image.childImageSharp.fixed.src.includes('default.png')?0.6:1
              }}
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