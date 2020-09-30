import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import hotelData from '../../fakeData/hotelData.json';
import HotelDetails from '../HotelDetails/HotelDetails';
import { GoogleMap } from '@react-google-maps/api';
import GoogleMapComp from '../GoogleMapComp/GoogleMapComp';

const Hotel = () => {
    const [hotels,setHotels] = useState(hotelData);
    return (
        <React.Fragment>
        <Container fixed style={{color: 'white'}}>
            <h1>This is a hotel</h1>
            <div className="row">
                <div className="col-7">
                    {
                        hotels.map(hotel => <HotelDetails hotel={hotel}></HotelDetails> )
                    }
                </div>
                <div className="col-5">
                    <GoogleMapComp></GoogleMapComp>
                </div>
            </div>
        </Container>
      </React.Fragment>

    );
};

export default Hotel;