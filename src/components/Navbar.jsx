import { AppBar, Toolbar,styled,Typography,Box, InputBase, Badge, Avatar, Menu, MenuItem} from "@mui/material";
import {Mail, Notifications, Pets} from "@mui/icons-material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) =>({
    backgroundColor:"white",
    padding:"0,10px",
    borderRadius: theme.shape.borderRadius,
    width:"40%",
}));

const Icons = styled(Box)(({ theme }) =>({
   display:"flex",
   alignItems:"center",
   gap:"20px",
   [theme.breakpoints.up("sm")]:{
    display:"flex"
   }
}));

const UserBox = styled(Box)(({ theme }) =>({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{
        display:"none"
       }
 }));


const Navbar = () => {
    const [open,setOpen] = useState(false)
    return (  
        <AppBar position = "sticky">
           <StyledToolbar>
           <Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}}>SHEKI DEV</Typography>
            <Pets  sx={{display:{xs:"block",sm:"none"}}}/>
            <Search><InputBase placeholder="search..."/></Search>
            <Icons>
            <Badge badgeContent={4} color="error">
          <Mail/>
        </Badge>
            <Badge badgeContent={4} color="error">
        <Notifications/>
        </Badge>
       <Avatar sx={{width:30,height:30,}} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" 
        onClick={e=>setOpen(true)}/>
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
        <Avatar sx={{width:30,height:30,}}src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
        <Typography variant="span">Manyi</Typography>
        </UserBox>
            </StyledToolbar>

    <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
        </AppBar>
    );
}
 
export default Navbar;