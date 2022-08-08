import React from "react";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import {Home, Settings,AccountBox,Groups,Storefront,Person,Pages,ModeNight} from "@mui/icons-material";

const Sidebar = () => {
    return (  
        <Box  flex={1} 
        p={2}
        sx={{display:{xs:"none",sm:"block" }}}>
            <Box position="fixed">
           <List>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#home">
                    <ListItemIcon>
                        <Home/>
                    </ListItemIcon>
                    <ListItemText primary="Homepage"/>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon>
                        <Pages/>
                    </ListItemIcon>
                    <ListItemText primary="Pages"/>
                </ListItemButton>
            </ListItem>
  
            <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon>
                        <Groups/>
                    </ListItemIcon>
                    <ListItemText primary="Groups"/>
                </ListItemButton>
            </ListItem> 

            <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon>
                        <Storefront/>
                    </ListItemIcon>
                    <ListItemText primary="Marketplace"/>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon>
                        <Person/>
                    </ListItemIcon>
                    <ListItemText primary="Friends"/>
                </ListItemButton>
            </ListItem>         

            <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon>
                        <Settings/>
                    </ListItemIcon>
                    <ListItemText primary="Settings"/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon>
                        <AccountBox/>
                    </ListItemIcon>
                    <ListItemText primary="profile"/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon>
                        <ModeNight/>
                    </ListItemIcon>
                 <Switch/>
                </ListItemButton>
            </ListItem>

           </List>
            </Box>
            </Box>
    );
}
 
export default Sidebar;