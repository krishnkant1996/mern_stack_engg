import React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Container,makeStyles,Typography,Box,Grid,TextField,CssBaseline,Button,Avatar} from '@material-ui/core';
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

export  function NewPassword(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    password:'',
  });
  const handleChange= (key,value) => {
    setState({
      ...state,
      [key]: value,
    });
  };
  const {password }=state
  const handleSubmit=(e)=>{
    e.preventDefault();
    let data = {code:props.match.params.code,password}
    props.setNewPassword(data)
  }
  let authRedirect = null;
  props.onSetAuthRedirectPath()
  if (props.authRedirectPath!=="/") {
    props.history.push("/react_client")
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
          New Password
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                label="password"
                name="password"
                autoComplete="password"
                type="password"
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
            submit
          </Button>
          
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
    setNewPassword: (data) => dispatch(actions.setNewPassword(data)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))

  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPassword);

