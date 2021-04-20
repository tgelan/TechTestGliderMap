import React, { useState, useEffect } from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

const BELFAST_DEFAULT_LOCATION = {
  lat: 54.607868,
  lng: -5.926437
}

const GliderMap = withScriptjs(withGoogleMap((props) => {
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={BELFAST_DEFAULT_LOCATION}
    >
     {props.stops.map( (stop)=><Marker
        position={{'lat':stop.lat,'lng':stop.lng}}
        label={stop.name}
        onClick={()=>{props.fetchStopInfo(stop.id)}}
      />
    
      )}
    </GoogleMap>
  )
}))

export default GliderMap;
