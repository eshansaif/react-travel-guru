import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import hotelData from '../../fakeData/hotelData.json';
import HotelDetails from '../HotelDetails/HotelDetails';
import GoogleMapComp from '../GoogleMapComp/GoogleMapComp';

import fakeData from '../../fakeData/fakeData.json';
import { useParams } from 'react-router-dom';

const Hotel = () => {
    const [hotels,setHotels] = useState(hotelData);
    const { dest_id } = useParams();
  const selectedDestination = fakeData.find(dt => dt.destination_id === parseFloat(dest_id));
    return (
        <React.Fragment>
        <Container fixed style={{color: 'white'}}>
            <p>252 Stays April 13-17 3 Guests </p>
            <h1>Stay in {selectedDestination.destination_name}</h1>
            <div className="row">
                <div className="col-md-7">
                    {
                        hotels.map(hotel => <HotelDetails hotel={hotel}></HotelDetails> )
                    }
                </div>
                <div className="col-md-5">
                    <GoogleMapComp></GoogleMapComp>
                </div>
            </div>
        </Container>
      </React.Fragment>

    );
};

export default Hotel;