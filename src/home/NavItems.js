import React from 'react';
import { Link } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FaceIcon from '@material-ui/icons/Face';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
  <div>
    <Link to="/" style={{ textDecoration: 'none', color: '#404040' }}>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>
    <Link to="/boards" style={{ textDecoration: 'none', color: '#404040' }}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Boards" />
      </ListItem>
    </Link>
    <Link to="/friends" style={{ textDecoration: 'none', color: '#404040' }}>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Friends" />
      </ListItem>
    </Link>
    <Link to="/profile" style={{ textDecoration: 'none', color: '#404040' }}>
      <ListItem button>
        <ListItemIcon>
          <FaceIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Pinned Boards</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);