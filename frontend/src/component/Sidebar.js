import React from 'react';
import {ListItem,ListItemText,ListItemIcon} from '@material-ui/core';
import Home from '@material-ui/icons/Home';
import {PlusOne} from '@material-ui/icons';
import { Link } from 'react-router-dom';

export const Sidebar = (
  <div>
    <ListItem button component={Link} to="/">
      <ListItemIcon>
        <Home />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
   
    <ListItem button component={Link} to="/product">
      <ListItemIcon>
        <PlusOne />
      </ListItemIcon>
      <ListItemText primary="Product"  />
    </ListItem>
    
  </div>
);

