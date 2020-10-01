import React from 'react';
import { useParams } from 'react-router-dom';
import starIcon from '../../resources/Icon/star_1_.png';


const HotelDetails = (props) => {
    const {hotel_image,
        hotel_title, 
        guest_capacity, 
        bedrooms, 
        bed_per_rooms,
        bathroom, 
        other_facilities, 
        cancellation_flexibility, 
        rating, 
        num_of_review, 
        rent_per_night } = props.hotel;
    return (
        <>
        <div className="row">
            <div className="col-md-5">
                <img className="img-fluid"  src={hotel_image} alt=""/>
            </div>
            <div className="col-md-7">
                <h4>{hotel_title}</h4>
                <p>{`${guest_capacity} Guests | ${bedrooms} Bedrooms | ${bed_per_rooms} Beds | ${bathroom} Baths`}</p>
                <p>{other_facilities}</p>
                <p>{cancellation_flexibility}</p>
                <h5><img width="16px" height="15px" src={starIcon} alt=""/> {` ${rating}(${num_of_review})    $${rent_per_night}/night`}</h5>
            </div>

        </div>
        <br/>
        <br/>
        </>
    );
};

export default HotelDetails;