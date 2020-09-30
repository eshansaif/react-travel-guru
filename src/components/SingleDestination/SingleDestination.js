import React from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData.json';

const SingleDestination = () => {
    return (
            <>
                <h1>Sreemangal</h1>
                    <p style={{fontSize:'17px'}}>Sajek is a union at Baghaichari Upazila in Rangamati districts. Basically it is name of a river which separates Bangladesh from India. The river flows into the Karnafuli River in the Chittagong Hill Tracts. Sajek Valley is situated in the North angle of Rangamati, near the Mizoram border boundary area.</p>
                <Button className="yellow-btn">Booking &#8594; </Button>
            </>
                
    );
};

export default SingleDestination;