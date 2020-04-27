import React, { useEffect } from "react";
import { connect } from 'react-redux';
import * as actions from "../store/actions/index";
import Pagination from '@material-ui/lab/Pagination';

import {
  makeStyles,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Table,
  Button,TextField,Grid
} from "@material-ui/core";
import AddUpdateProduct from "./AddUpdateProduct";
import { DeleteOutlineRounded, EditOutlined } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  deleteIcon: {
    marginLeft: theme.spacing(2),
  },
 
}));

export function ProductList(props) {
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [productData, setProductData] = React.useState([]);
  const classes = useStyles();
  const { getProduct, products,deleteProduct } = props;
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState("");
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    getProduct({page:1,search:""});
  }, [getProduct]);

  let pageCount = parseInt(props.count/10);
  console.log(props.count%10===0)
  pageCount=props.count%10===0?pageCount:pageCount+1;

  return (
    <React.Fragment>
                <Grid container spacing={2}>
            <Grid item xs={8}>
            <TextField
              id="standard-full-width"
              label="Search"
              style={{ margin: 8 }}
              placeholder="Search Here"
              fullWidth
              value={search}
              onChange={(e)=>{
                setSearch(e.target.value);
                getProduct({search:e.target.value,page});
              }}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            </Grid>
            <Grid item xs={4}>
            <Button variant="outlined" color="primary" onClick={() => {
              setEdit(false);
              setOpen(true);
              setProductData("");
            }}>
              Add Product
            </Button>
            </Grid>
           
          </Grid>

     
     
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell>Category Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        {products.length===0?
                  <caption>No records foundP</caption>

          :""}
        <TableBody>
         
          {products.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.product_name}</TableCell>
              <TableCell>{row.category.category_name}</TableCell>
              <TableCell>{row.createdAt}</TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    setOpen(true);
                    setEdit(true);
                    setProductData(row)
                  }}
                  variant="outlined" color="primary"
                >
                  <EditOutlined />
                </Button>
                <Button
                  onClick={() => {
                    deleteProduct(row.id)
                  }}
                  variant="outlined" color="secondary"
                  className={classes.deleteIcon}
                >
                  <DeleteOutlineRounded />
                </Button>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
       
      </Table>
      <Pagination count={pageCount} page={page} onChange={handleChange} />

      <AddUpdateProduct open={open} handleClose={() => { setOpen(false) }} edit={edit} data={productData} />
    </React.Fragment>
  );
}
const mapStateToProps = state => {
  return {
    error: state.product.error,
    products: state.product.products,
    count: state.product.count,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProduct: (data) => dispatch(actions.getProduct(data)),
    deleteProduct:(id)=>dispatch(actions.deleteProduct(id)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
