import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData.json';

const SingleDestination = (props) => {
    // console.log(props.singleDestination);
    const {destination_name, destination_desc, destination_id} = props.singleDestination;
    return (
            <>
                {
                    destination_name ?
                    <div>
                        <h1>{destination_name.toUpperCase()}</h1>
                        <p style={{fontSize:'17px'}}>{destination_desc}</p>
                        <Link to={`/booking/${destination_id}`}>
                            <Button className="yellow-btn">Booking &#8594; </Button>
                        </Link>
                    </div>
                     :
                    <div>
                        <h1>{fakeData[0].destination_name.toUpperCase()}</h1>
                        <p style={{fontSize:'17px'}}>{fakeData[0].destination_desc}</p>
                        <Link to={`/booking/${fakeData[0].destination_id}`}>
                            <Button className="yellow-btn">Booking &#8594; </Button>
                        </Link>
                    </div>
                }          
            </>
                
    );
};

export default SingleDestination;