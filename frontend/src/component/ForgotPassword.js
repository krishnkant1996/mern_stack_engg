import React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Container,makeStyles,Typography,Box,Grid,TextField,CssBaseline,Button,Avatar,Link} from '@material-ui/core';
import {Copyright} from './Copyright';
import { connect } from 'react-redux';
import * as actions from "../store/actions/index";

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

export  function ForgotPassword(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    email:'',
  });
  const handleChange= (key,value) => {
    setState({
      ...state,
      [key]: value,
    });
  };
  const {email }=state
  const handleSubmit=(e)=>{
    e.preventDefault();
    props.setForgotPassword(state)
  }
  let authRedirect = null;
  props.onSetAuthRedirectPath()
  if (props.authRedirectPath!=="/") {
    props.history.push("/")
    window.location.reload(false)  
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
          Sign In
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
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
           
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            submit
          </Button>
          <Grid container>
            <Grid item xs>
            <Link href="/sign-in" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
            <Grid item>
              <Link href="/sign-up" variant="body2">
                {"Don't have an account? Sign Up"}
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
    setForgotPassword: (data) => dispatch(actions.setForgotPassword(data)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))

  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword);

