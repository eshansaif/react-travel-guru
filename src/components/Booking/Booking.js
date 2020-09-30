import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData.json';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Form,Button, Col } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      height: theme.spacing(43),
    },
  },
}));

const Booking = () => {
  
  const classes = useStyles();
    const {dest_id} = useParams();
    const selectedDestination = fakeData.find(dt => dt.destination_id === parseFloat(dest_id));
    return (
    <React.Fragment>
      <Container fixed style={{color: 'white'}}>
        <div className="row">
            <div className="col-md-6">
                    <h1>{selectedDestination.destination_name}</h1>
                    <p style={{fontSize:'17px'}}>{selectedDestination.destination_desc}</p>

            </div>
            <div className="col-md-6">
                <div className={classes.root}>
                {/* <Paper elevation={0} /> */}
                <Paper className="w-60" style={{padding: '20px',marginLeft: '20%'}}>
                <Form className="form" >
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Origin</Form.Label>
                  <Form.Control className="font-weight-bold" type="text" value={selectedDestination.origin} placeholder="Origin" disabled/>
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Destination</Form.Label>
                  <Form.Control className="font-weight-bold" type="text" value={selectedDestination.destination_name} placeholder="Destination" disabled/>
                </Form.Group>
                <Form.Row>
                <Col>
                <Form.Label>From</Form.Label>
                  <Form.Control className="font-weight-bold"  value={selectedDestination.start_date}  />
                </Col>
                <Col>
                <Form.Label>To</Form.Label>
                  <Form.Control className="font-weight-bold" value={selectedDestination.end_date} />
                </Col>
              </Form.Row>
              <br/>
              <Button style={{width:'100%'}} className="yellow-btn" variant="primary" type="submit">
                Start Booking
              </Button>
              </Form>
              
                </Paper>
                  
              </div>
            </div>
        </div>
      </Container>
    </React.Fragment>
    );
};

export default Booking;