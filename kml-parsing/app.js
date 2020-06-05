const parseKML = require('parse-kml')
var fs = require('fs')
var slugify = require('slugify')
var geolib = require('geolib')
var districts = require('../content/districts.json')

const isPointInMultiPolygon = (point, multipolygon) => {
    return multipolygon.find(polygon => {
        return geolib.isPointInPolygon(point, polygon[0])
    })
}

// read backline
const readBackLane = (feature) => {
    // generate content
    let content = "---\n"
    content += "title: " + feature.properties.name.replace(':', '') + "\n"
    content += "type: ruelle_verte\n"

    // check district
    currentDistrict = districts.features.find(district => {
        return district.geometry && isPointInMultiPolygon(geolib.getCenter(feature.geometry.coordinates), district.geometry.coordinates)
    })

    let district
    if(currentDistrict == undefined) {
        district = "unknown"
    }
    else {
        district = slugify(currentDistrict.properties.NOM, {
            replacement: '-',  // replace spaces with replacement character, defaults to `-`
            remove: /[*+~/.()'"!:@]/g, // remove characters that match regex, defaults to `undefined`
            lower: true,      // convert to lower case, defaults to `false`
            strict: false,     // strip special characters except replacement, defaults to `false`
        })
    }

    try {
        fs.mkdirSync('out/' + district)
    }
    catch (e) {
    }
    content += "district: " + district + "\n"

    // read geometry
    let geometry = feature.geometry.coordinates.map(point => ({lat: point[1], lng: point[0]}))
    content += "fill: "+ JSON.stringify(geometry) + "\n"

    content += "---\n\n"
    content += feature.properties.description

    // generate file name
    const file = slugify(feature.properties.name, {
        replacement: '-',  // replace spaces with replacement character, defaults to `-`
        remove: /[*+~/.()'"!:@]/g, // remove characters that match regex, defaults to `undefined`
        lower: true,      // convert to lower case, defaults to `false`
        strict: false,     // strip special characters except replacement, defaults to `false`
    })
    fs.writeFileSync("out/" + district + "/" + file + ".md", content)
}

// Read KML From URL
try {
    fs.mkdirSync('out')
}
catch (e) {
}

parseKML
  .toJson('./ruelle_version_2019.kml')
  .then(data => {
    // read backlanes
    data.features
    .filter(feature => feature.properties.stroke !== "#0000ff")
    //.filter(feature => feature.properties.name === "Ruelle Milton")
    .forEach(feature => readBackLane(feature))
  })
  .catch(console.error)
 