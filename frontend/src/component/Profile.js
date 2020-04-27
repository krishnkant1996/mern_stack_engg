import React,{useEffect} from 'react';
import { Card ,Grid,Paper,makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actions from "../store/actions/index";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paperTitle: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  Cardroot: {
    minWidth: 275,
    padding:theme.spacing(5)

  },
}));

export  function Profile(props) {
  const { getUserDetails,user } = props;

  useEffect(() => {
    getUserDetails();
  }, [getUserDetails]);
  console.log(user)
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.Cardroot}>
      <Grid container spacing={3}>
        
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paperTitle}>Full Name :- </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
  <Paper className={classes.paper}>{user.first_name} {" "} {user.last_name}</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paperTitle}>Email :- </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>{user.email}</Paper>
        </Grid>
       
      </Grid>
      </Card>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getUserDetails: () => dispatch(actions.getUserDetails()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
