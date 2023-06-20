import React from 'react';
import { Container, Grid, AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Menu, Favorite, Search, MoreVert, Dashboard, Person, Notifications, Settings } from '@mui/icons-material';
import './Dashboard.scss';

const Dashboard = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="dashboard">
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleDrawerToggle}>
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Favorite />
          </IconButton>
          <IconButton color="inherit">
            <Search />
          </IconButton>
          <IconButton color="inherit">
            <MoreVert />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        classes={{
          paper: 'drawer-paper',
        }}
      >
        <div className="drawer-header">
          <Typography variant="h6" component="div">
            Dashboard
          </Typography>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Notifications />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>
      <Container maxWidth="lg" className="content">
        <Grid container spacing={3}>
          {/* Place your dashboard content here */}
          <Grid item xs={12}>
            <Typography variant="h4" component="h1">
              Welcome to the Dashboard!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
