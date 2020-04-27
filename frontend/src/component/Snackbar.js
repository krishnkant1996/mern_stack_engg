import React from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { connect } from 'react-redux';
import * as actions from "../store/actions/index";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function PositionedSnackbar(props) {
  const { open ,status, message}=props.alert;
  const state = {
    vertical: 'top',
    horizontal: 'right',
  }
  const { vertical, horizontal } = state;
  const handleClose = () => {
    props.setAlert({...props.alert,open:false})
  };

  return (
    <div>
      <Snackbar 
      open={open} 
       autoHideDuration={6000}
       anchorOrigin={{ vertical, horizontal }}  
       key={`${vertical},${horizontal}`}
       onClose={handleClose}>
       <Alert onClose={handleClose} severity={status}>
          {message}
        </Alert>
      </Snackbar>

     
    </div>
  );
}

const mapStateToProps = state => {
  return {
    alert: state.alert.data,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAlert: (data) => dispatch(actions.setAlert(data)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PositionedSnackbar);
