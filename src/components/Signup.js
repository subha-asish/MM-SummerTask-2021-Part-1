import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { authunticateSignup } from '../service/api';










const useStyles = makeStyles((theme) => ({

    paper: {

        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(80),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {

        width: '100%',

        marginTop: theme.spacing(3),

    },

    submit: {

        margin: theme.spacing(3, 0, 2),

    },

}));



export default function SignUp() {


    const signupUser = async () => {
        await authunticateSignup(signup);
    }


    const signupInitialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }


    const [signup, setSignup] = useState(signupInitialValues);


    const classes = useStyles();




    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
        console.log(signup);
    }



    return (

        <Container component="main" maxWidth="xs">

            <CssBaseline />

            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    New to NaviNews
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField onChange={(e) => onInputChange(e)} autoComplete="fname" name="firstName"
                                variant="outlined" required fullWidth id="firstName" label="First Name" autoFocus />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField onChange={(e) => onInputChange(e)}
                                variant="outlined" required fullWidth id="lastName"
                                label="Last Name" name="lastName" autoComplete="lname" />

                        </Grid>

                        <Grid item xs={12}>

                            <TextField onChange={(e) => onInputChange(e)}
                                variant="outlined" required fullWidth id="email" label="Email Address"
                                name="email" autoComplete="email"

                            />

                        </Grid>
                        <Grid item xs={12}>

                            <TextField variant="outlined" required

                                onChange={(e) => onInputChange(e)}

                                name="password"

                                label="Password"

                                type="password"

                                id="password"

                                autoComplete="current-password"

                            />

                        </Grid>

                    </Grid>

                    <Button onClick={() => signupUser()}

                        type="submit"

                        fullWidth

                        variant="contained"

                        color="primary"

                        className={classes.submit}

                    >

                        Sign Up

                    </Button>

                    <Grid container justify="flex-end">

                        <Grid item>

                            <Link href="#" variant="body2">

                                Already have an account? Sign in

                            </Link>

                        </Grid>

                    </Grid>

                </form>

            </div>

        </Container>

    );

}