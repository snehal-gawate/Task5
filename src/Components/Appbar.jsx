import React from "react";
import { Toolbar,Breadcrumbs,Link,Typography,Badge } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import NotificationsIcon from '@mui/icons-material/Notifications';

export const Appbar=()=>{
  return(
    <div>
      <Toolbar>
        <MenuIcon/>
      <Breadcrumbs aria-label="breadcrumb" sx={{marginLeft:3+'vh'}}>
      <Link underline="hover" color="inherit" href="/">
        <HomeIcon/>
      </Link>
      <Link
    underline="hover"
    color="inherit"
    href=""
  >
    Start
  </Link>
  <Typography color="text.primary">Page link</Typography>
</Breadcrumbs>

<Badge badgeContent={6} color="primary" sx={{marginLeft:130+'vh'}}>
  <NotificationsIcon color="action" />
</Badge>

<Badge badgeContent={4} color="primary" sx={{marginLeft:2+'vh'}}>
  <EmailIcon color="action" />
</Badge>

<PowerSettingsNewIcon sx={{marginLeft:2+'vh'}} />
      </Toolbar>
    </div>
  )
}