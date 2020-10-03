import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Jumbotron, Row } from 'react-bootstrap';
import Container from '@material-ui/core/Container';
import './Home.css';
import HomeDestination from '../HomeDestination/HomeDestination';
import fakeData from '../../fakeData/fakeData.json';
import SingleDestination from '../SingleDestination/SingleDestination';


const Home = () => {
    
    const [destination, setDestination] = useState(fakeData);

    const[singleDestination, setSingleDestination] = useState({});

    const showSingleDestination = (singleDest) => {
        setSingleDestination(singleDest);
    }

    return (
        <React.Fragment>
        <Container fixed>
            <div className="row">
                <div style={{color: 'white'}} className="col-md-4 text-justify">
                    <SingleDestination singleDestination={singleDestination} ></SingleDestination>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        
                        {
                            destination.map(dt => <HomeDestination destination={dt} showSingleDestination={showSingleDestination}></HomeDestination> )
                        }
                        
                    </div>
                </div>
            </div>
        </Container>
        </React.Fragment>
    );
};

export default Home;


