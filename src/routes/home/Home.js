import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import TodayIcon from "@mui/icons-material/Today";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";

import DataTable from "./DataTable";
import RegisterUser from "./RegisterUser";

const drawerWidth = 240;

const Home = () => {
  const [isItemSelected, setIsItemSelected] = useState(0);

  const handleDrawerItemClick = (text) => {
    switch (text) {
      case "Today": {
        return setIsItemSelected(0);
      }
      case "Register": {
        return setIsItemSelected(1);
      }
      case "Users": {
        return setIsItemSelected(2);
      }
      default: {
        return console.log("Log out user");
      }
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Visitors Today
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem
            button
            key="today"
            style={isItemSelected === 0 ? { backgroundColor: "blue" } : {}}
            onClick={() => handleDrawerItemClick("Today")}
          >
            <ListItemIcon>
              <TodayIcon />
            </ListItemIcon>
            <ListItemText primary="Today" />
          </ListItem>
          <Divider />

          <ListItem
            button
            key="register"
            style={isItemSelected === 1 ? { backgroundColor: "blue" } : {}}
            onClick={() => handleDrawerItemClick("Register")}
          >
            <ListItemIcon>
              <GroupAddIcon />
            </ListItemIcon>
            <ListItemText primary="Register New User" />
          </ListItem>
          <Divider />

          <ListItem
            button
            key="users"
            style={isItemSelected === 2 ? { backgroundColor: "blue" } : {}}
            onClick={() => handleDrawerItemClick("Users")}
          >
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
          <Divider />

          <ListItem
            button
            key="logout"
            onClick={() => handleDrawerItemClick("Logout")}
          >
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
          <Divider />
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        {isItemSelected === 0 && <DataTable />}
        {isItemSelected === 1 && <RegisterUser />}
        {isItemSelected === 2 && <DataTable />}
      </Box>
    </Box>
  );
};

export default Home;
