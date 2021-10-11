import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';
function Map({ searchResult }) {
    const [selectedlocation, setsetlectedlocation] = useState({

    })

    //Transform the Search resilt obkects into the 
    // {Latitude:31.473739,Longitude:74.253135} objects
    const cordinates = searchResult.map(result => ({
        longitude: result.long,
        latitude: result.lat
    }))
    // console.log(cordinates);
    console.log(selectedlocation);
    const center = getCenter(cordinates)
    const [viewport, setviewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11

    });
    // console.log(center);
    return (
        <ReactMapGL
            mapStyle="mapbox://styles/muizzkhan/ckuhbz1b03zhi17pm5dg428hn"
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextviewport) => setviewport(nextviewport)}
        >
            {searchResult.map((result) => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p onClick={() => setsetlectedlocation(result)} className="cursor-pointer text-2xl animate-bounce "
                            aria-label="push-pin">📍</p>

                    </Marker>
                    {/* This is the pop up if we click marker */}
                    {selectedlocation.long == result.long ? (
                        <Popup closeOnClick={true}
                            onClose={() => setsetlectedlocation({})}
                            latitude={result.lat}
                            longitude={result.long}>
                            {result.title}
                        </Popup>

                    ) : (false)}
                </div>
            ))}

        </ReactMapGL>

    )

}

export default Map

