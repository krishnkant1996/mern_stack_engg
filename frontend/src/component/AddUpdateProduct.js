import React, { useEffect } from "react";
import { connect } from 'react-redux';
import * as actions from "../store/actions/index";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  formControl: {
    width: "100%",
    marginTop: theme.spacing(2),

  },

}));

export function AddUpdateProduct(props) {
  const classes = useStyles();
  const {category,addProduct } = props;
  const [state, setState] = React.useState({
    id:"",
    product_name:'',
    category_id:''
  });
  const handleChange= (key,value) => {
    setState({
      ...state,
      [key]: value,
    });
  };
  const {product_name,category_id }=state
  useEffect(() => {
    if(props.category.length===0){
      props.getCategory()
    }
    if (props.edit) {
      setState(props.data)
    }else{
      setState({
        id:"",
        product_name:'',
        category_id:''
      })
    }
  }, [props])


  return (
    <>
      <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add/Update Product</DialogTitle>
        <DialogContent>

          <form className={classes.root} noValidate autoComplete="off">
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="component-outlined">product name</InputLabel>
              <OutlinedInput id="component-outlined" value={product_name} onChange={(e) => { handleChange("product_name",e.target.value) }} label="Item name" />
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="select-category"
                value={category_id}
                onChange={(e) => { handleChange("category_id",e.target.value) }}
              >
                {category.map((row) =>
                  (
                    <MenuItem key={row.id} value={row.id}>{row.category_name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={()=>{props.handleClose();
           setState({
            id:"",
            product_name:'',
            category_id:''
          })}} >
            Cancel
          </Button>
          <Button variant="outlined" onClick={()=>{
            addProduct(state)
            setState({
              id:"",
              product_name:'',
              category_id:''
            })
            props.handleClose();
            }} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}


const mapStateToProps = state => {
  return {
    error: state.category.error,
    category: state.category.category,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategory: (response) => dispatch(actions.getCategory(response)),
    addProduct: (data) => dispatch(actions.addProduct(data)),
  }
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUpdateProduct);
