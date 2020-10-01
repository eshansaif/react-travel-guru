import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomeDestination.css';

const HomeDestination = (props) => {
    // console.log(props.destination);
    const showSingleDestination = props.showSingleDestination;
    const {destination_name, destination_image} = props.destination;
    return (
        <div className="col-md-4 " >   
            <Link onClick={() => showSingleDestination(props.destination)} >  
            <Card className=" text-white home-component">
                <Card.Img className="img-fluid" src={destination_image} alt="Card image" />
                <Card.ImgOverlay  className="d-flex align-items-end">
                    <Card.Title> <h3>{destination_name}</h3> </Card.Title>
                </Card.ImgOverlay>
            </Card>
            </Link>
            
        </div>
        
    );
};

export default HomeDestination;