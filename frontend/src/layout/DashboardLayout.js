<<<<<<< HEAD
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  IconButton,
  useMediaQuery
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 200;

function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Box sx={{ display: "flex" }}>
      
      {/* 🔷 Navbar */}
      <AppBar position="fixed">
        <Toolbar>
          {isMobile && (
            <IconButton onClick={() => setOpen(true)} color="inherit">
              <MenuIcon />
            </IconButton>
          )}

          <Typography variant="h6">Dashboard</Typography>
        </Toolbar>
      </AppBar>

      {/* 🔷 Sidebar */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? open : true}
        onClose={() => setOpen(false)}
        sx={{
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            marginTop: "64px"
          }
        }}
      >
        <List>
          <ListItem button>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </List>
      </Drawer>

      {/* 🔷 Content */}
      <Box
        sx={{
          flexGrow: 1,
          p: 2,
          mt: 8,
          ml: isMobile ? 0 : `${drawerWidth}px`
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

=======
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  IconButton,
  useMediaQuery
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 200;

function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Box sx={{ display: "flex" }}>
      
      {/* 🔷 Navbar */}
      <AppBar position="fixed">
        <Toolbar>
          {isMobile && (
            <IconButton onClick={() => setOpen(true)} color="inherit">
              <MenuIcon />
            </IconButton>
          )}

          <Typography variant="h6">Dashboard</Typography>
        </Toolbar>
      </AppBar>

      {/* 🔷 Sidebar */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? open : true}
        onClose={() => setOpen(false)}
        sx={{
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            marginTop: "64px"
          }
        }}
      >
        <List>
          <ListItem button>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </List>
      </Drawer>

      {/* 🔷 Content */}
      <Box
        sx={{
          flexGrow: 1,
          p: 2,
          mt: 8,
          ml: isMobile ? 0 : `${drawerWidth}px`
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

>>>>>>> 4d15e83 (Vercel-ready serverless Express setup)
export default DashboardLayout;