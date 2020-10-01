import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase.config';
import { Container } from '@material-ui/core';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    const [user,setUser] = useState({
        isLoggedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false

    })

    const handleGoogleAuth = () => {
        var googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
            const {displayName, email, photoURL} = result.user;
            const signedInUser = {
                isLoggedIn: false,
                name: displayName, 
                email: email,
                photo: photoURL
            }
            setUser(signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from);
          })
          .catch((error) => {
            const errorMessage = error.message;
            error  = errorMessage;
            console.log(errorMessage);
            setUser(error);
          });
    }
    return (
        <React.Fragment>
        <Container fixed style={{color: 'white'}}>
            <button onClick={handleGoogleAuth}>Continue with Google</button>
        </Container>
        </React.Fragment>
    );
};

export default Login;