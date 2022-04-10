import React from 'react';
import GoogleMapReact from 'google-map-react';
 import {Paper,Typography,useMediaQuery} from '@material-ui/core';
import Rating from '@mui/material/Rating';
import useStyles from './styles'

export default function Map() {
  const coordinates={lay:0 , lng:0};
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{key:''}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={''}
        onChange={''}
        onChildClick={''}
      >

      </GoogleMapReact>

    </div>
  )
}
