import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData.json';
import './Booking.css';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Form, Col } from 'react-bootstrap';

//MUI
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));



const Booking = () => {

  const classes = useStyles();
  const { dest_id } = useParams();
  console.log(dest_id);
  const selectedDestination = fakeData.find(dt => dt.destination_id === parseFloat(dest_id));

  return (
    <React.Fragment>
      <Container fixed style={{ color: 'white' }}>
        <div className="row">
          <div className="col-md-6">
            <h1>{selectedDestination.destination_name}</h1>
            <p style={{ fontSize: '17px' }}>{selectedDestination.destination_desc}</p>

          </div>

          <div className="col-md-6">
            <div className={classes.root}>
              <Paper className="w-60" style={{ padding: '20px', marginLeft: '20%' }}>
                <Form className="form">

                  <Form.Group controlId="origin">
                    <Form.Label>Origin</Form.Label>
                    <Form.Control name="origin" className="font-weight-bold" type="text" defaultValue={selectedDestination.origin} placeholder="Origin" disabled />
                  </Form.Group>

                  <Form.Group controlId="dest_name">
                    <Form.Label>Destination</Form.Label>
                    <Form.Control name="dest_name" className="font-weight-bold" type="text" defaultValue={selectedDestination.destination_name} placeholder="Destination" disabled />
                  </Form.Group>

                  <Form.Group>
                    <Form.Row className="row">
                      <Col className="col-6">
                        <Form.Label>From</Form.Label>
                        <form className={classes.container} noValidate>
                          <TextField
                            name="start_date"
                            id="date"
                            type="date"
                            defaultValue={selectedDestination.start_date}
                            className={classes.textField}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </form>

                        {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} placeholderText="Select End Date"/> */}
                      </Col>
                      <Col className="col-6">
                        <Form.Label>To</Form.Label>
                        <form className={classes.container} noValidate>
                          <TextField
                            name="end_date"
                            id="date"
                            // label="Birthday"
                            type="date"
                            defaultValue={selectedDestination.end_date}
                            className={classes.textField}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </form>
                      </Col>
                    </Form.Row>
                  </Form.Group>

                  <br />
                  <Link to={`/hotel/${dest_id}`}>
                    <input style={{ width: '100%' }} variant="primary" className="yellow-btn" type="submit" value="Start Booking" />
                  </Link>
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