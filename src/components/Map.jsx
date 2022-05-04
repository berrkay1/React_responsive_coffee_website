import React from 'react'
import {GoogleMap,useLoadScript,Marker} from '@googlemaps/react-wrapper';

function Map() {

    const {isLoaded} = useLoadScript({
        googleMapsKey:process.env.GOOGLE_MAPS_KEY,
    })
    
    if(!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap 
    zoom={10}
    center={{lat:44,lng:-80}}
    mapContainerClassName='map-container'
    >
        <Marker position={{lat:44,lng:-80}} />
        
    </GoogleMap>
  )
}

export default Map