import React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Container,makeStyles,Typography,Box,Grid,Link,TextField,CssBaseline,Button,Avatar} from '@material-ui/core';
import {Copyright} from './Copyright';
import { connect } from 'react-redux';
import * as actions from "../store/actions/index";
import { Redirect } from 'react-router-dom';

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export  function SignUp(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    first_name: '',
    last_name: '',
    email:'',
    password:''
  });
  const handleChange= (key,value) => {
    setState({
      ...state,
      [key]: value,
    });
  };
  const {first_name,last_name,email,password }=state
  const handleSubmit=(e)=>{
    e.preventDefault();
    props.setSignUp(state)
  }
  let authRedirect = null;
  props.onSetAuthRedirectPath()
  if (props.authRedirectPath!=="/") {
    authRedirect = <Redirect to={props.authRedirectPath} />;
  }

  return (
    <Container component="main" maxWidth="xs">
      {authRedirect}
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={first_name}
                onChange={(e)=>{
                  handleChange("first_name",e.target.value)
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={last_name}
                onChange={(e)=>{
                  handleChange("last_name",e.target.value)
                }}

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                type="email"
                value={email}
                onChange={(e)=>{
                  handleChange("email",e.target.value)
                }}

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e)=>{
                  handleChange("password",e.target.value)
                }}

              />
            </Grid>
           
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/sign-in" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    alert: state.alert.data,
    authRedirectPath:state.auth.authRedirectPath
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSignUp: (data) => dispatch(actions.setSignUp(data)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))

  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);