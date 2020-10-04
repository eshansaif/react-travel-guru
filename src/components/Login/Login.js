import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase.config';
import { Container, Input, Paper } from '@material-ui/core';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';

import './Login.css';
import googleIcon from '../../resources/Icon/google.png';
import fbIcon from '../../resources/Icon/fb.png';

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

firebase.initializeApp(firebaseConfig);

const Login = () => {

    const classes = useStyles();

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    const [user, setUser] = useState({
        isLoggedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        errorMessage: '',
        successMessage: false

    })

    const [newUser, setNewUser] = useState(false);



    const handleGoogleAuth = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = {
                    isLoggedIn: true,
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
                error = errorMessage;
                setUser(error);
            });
    }

    const handleFbAuth = () => {

        var fbProvider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(fbProvider).then(function (result) {
            const { displayName, email, photoURL } = result.user;
            const signedInUser = {
                isLoggedIn: true,
                name: displayName,
                email: email,
                photo: photoURL
            }
            setUser(signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from);

            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);

        });

    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 8;
            const isPasswordNumAndLetter = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && isPasswordNumAndLetter;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    console.log(res);
                    const newUserInfo = { ...user };
                    newUserInfo.errorMessage = '';
                    newUserInfo.successMessage = 'You have signed up Successfully!';
                    setUser(newUserInfo);
                    updateUserName(user.name);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.errorMessage = error.message;
                    newUserInfo.successMessage = false;
                    setUser(newUserInfo);
                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.errorMessage = '';
                    newUserInfo.successMessage = 'You have Signed in Successfully!';
                    newUserInfo.name = res.user.displayName;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.errorMessage = error.message;
                    newUserInfo.successMessage = false;
                    setLoggedInUser(newUserInfo);
                    setUser(newUserInfo);
                });
        }
        e.preventDefault();
    }


    const updateUserName = (name) => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: name,     
        })
        .then(res => {
            // console.log('Update user name:', res);
            // console.log('User name updated successfully!');
        }).catch(function(error) {
          console.log(error);
        });
      }
    return (
        <React.Fragment >
            <Container fixed style={{ color: 'white' }} className="login">
                <Paper style={{ padding: '20px' }} className="col-md-5 m-auto">

                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            {
                                newUser ? 'Sign Up' : 'Sign In'
                            }
                        </Typography>
                        <p style={{ color: 'red' }}>{user.errorMessage}</p>
                        <p style={{ color: 'green' }}>{user.successMessage}</p>
                        <form onSubmit={handleSubmit} className={classes.form} noValidate id="form">
                            {
                                newUser &&
                                <TextField
                                    onBlur={handleBlur}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Full Name"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                />
                            }
                            <TextField
                                onBlur={handleBlur}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                onBlur={handleBlur}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />

                            <div className="d-flex justify-content-between">
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />

                                <Link style={{ color: "#F9A51A !important" }}>
                                    <p style={{ color: '#F9A51A', fontSize: '1rem', fontWeight: '400', lineHeight: '1.5' }}>Forgot Password?</p>
                                </Link>

                            </div>

                            <div className="text-center">
                                <Button
                                    id="form-btn"
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    {
                                        newUser ? 'Sign Up' : 'Sign In'
                                    }
                                </Button>
                            </div>

                            <Grid container className="d-flex justify-content-center orange-link">
                                <Grid item>
                                    <br />
                                    {
                                        newUser ?
                                            <p>
                                                Already have an account? <Link onClick={() => setNewUser(!newUser)}
                                                    style={{ color: '#F9A51A', fontSize: '1rem', fontWeight: '400', lineHeight: '1.5' }}>
                                                    Login
                                        </Link>
                                            </p>
                                            :
                                            <p>

                                                Don't have an account? <Link onClick={() => setNewUser(!newUser)}
                                                    style={{ color: '#F9A51A', fontSize: '1rem', fontWeight: '400', lineHeight: '1.5' }}>
                                                    Create an Account
                                        </Link>
                                            </p>
                                    }
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                    <Box >
                        <hr data-content="OR" className="hr-text"></hr>
                        <br />
                    </Box>

                    <div onClick={handleFbAuth} className='popupSignIn'>
                        <img src={fbIcon} alt="sign in with facebook" />
                        <button> Continue with Facebook</button>
                    </div>
                    <br />

                    <div onClick={handleGoogleAuth} className='popupSignIn'>
                        <img src={googleIcon} alt="sign in with google" />
                        <button> Continue with Google</button>
                    </div>
                </Paper>
            </Container>
        </React.Fragment>
    );
};

export default Login;