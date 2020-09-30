import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const GoogleMapComp = () => {
    

    const [ currentPosition, setCurrentPosition ] = useState({});
  
  const success = position => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setCurrentPosition(currentPosition);
  };
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  })

    const mapStyles = {        
        height: "100vh",
        width: "100%"};
      
      const defaultCenter = {
        lat: 41.3851, lng: 2.1734
      }
      

      const locations = [
        {
          name: "Location 1",
          location: { 
            lat: 23.405918,
            lng: 92.278693 
          },
        }
        // ,
        // {
        //   name: "Location 2",
        //   location: { 
        //     lat: 41.3917,
        //     lng: 2.1649
        //   },
        // },
        // {
        //   name: "Location 3",
        //   location: { 
        //     lat: 41.3773,
        //     lng: 2.1585
        //   },
        // }
      ];

      const [ selected, setSelected ] = useState({});
  
        const onSelect = item => {
            setSelected(item);
        }

        const onMarkerDragEnd = (e) => {
            const lat = e.latLng.lat();
            const lng = e.latLng.lng();
            setCurrentPosition({ lat, lng})
          };
    return (
        <LoadScript
            googleMapsApiKey='AIzaSyDx0mU-Jplaux4ObidC-Gm2l0dTp06DYu0'>
            {/* <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
            /> */}

        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
         {
            locations.map(item => {
              return (
              <Marker key={item.name} position={item.location}/>
              )
            })
         }

{
            locations.map(item => {
              return (
              <Marker key={item.name} 
                position={item.location}
                onClick={() => onSelect(item)}
              />
              )
            })
         }
        {
            selected.location && 
            (
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <p>{selected.name}</p>
            </InfoWindow>
            )
         }

            {
            currentPosition.lat ? 
            <Marker
            position={currentPosition}
            onDragEnd={(e) => onMarkerDragEnd(e)}
            draggable={true} /> :
            null
          }
        </GoogleMap>

            
     </LoadScript>
    );
};

export default GoogleMapComp;