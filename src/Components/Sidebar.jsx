import React from "react";
import { Card,CardContent, Typography, Avatar,Box, Stack,Badge } from "@mui/material";
import List from '@mui/material/List';
import HomeIcon from '@mui/icons-material/Home';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import PieChartIcon from '@mui/icons-material/PieChart';
import FormatOverlineIcon from '@mui/icons-material/FormatOverline';
import TableChartIcon from '@mui/icons-material/TableChart';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';



const Styledtypo =styled(Typography)({
 color:"#4fc3f7",
 fontWeight:"bolder",
}) ;

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const Sidebar = () => {
  return (
  
    <Card sx={{height:160+'vh',width:35+'vh',textAlign:'left'}}>
             <CardContent>
          < Styledtypo  variant="h5">airframe </ Styledtypo > 
          <Box height={2}/>
            < StyledBadge 
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot">
          <Avatar src="https://th.bing.com/th/id/OIP.m3XRzsyMpdQ12IbDf-vplAHaE7?w=235&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"/>
          </StyledBadge>
           <Stack direction="row">
          <Typography sx={{marginTop:1+'vh'}}>Jelfy Bogan </Typography>
          <ExpandMoreIcon sx={{marginTop:1+'vh'}}/>
          </Stack>
          <Typography>Dynamic Marketing anyalyst</Typography>
         <List sx={{marginTop:2+'vh'}}>
       <ListItem button>
        <ListItemIcon>
        <HomeIcon className="icon"/>
        </ListItemIcon>
        <ListItemText primary="  Dashboard"  />  <ExpandMoreIcon />
        </ListItem>
        <ListItem>
        <ListItemIcon></ListItemIcon>
          <ListItemText >Analytics</ListItemText>
        </ListItem>
        <ListItem>
        <ListItemIcon></ListItemIcon>
          <ListItemText >Projects</ListItemText>
        </ListItem>
        <ListItem>
        <ListItemIcon></ListItemIcon>
          <ListItemText >Systems</ListItemText>
        </ListItem>
        <ListItem>
        <ListItemIcon></ListItemIcon>
          <ListItemText >Monitor</ListItemText>
        </ListItem>
        <ListItem>
        <ListItemIcon></ListItemIcon>
          <ListItemText >Financiel</ListItemText>
        </ListItem>
        <ListItem>
        <ListItemIcon></ListItemIcon>
          <ListItemText >Stack</ListItemText>
        </ListItem>
        <ListItem>
        <ListItemIcon></ListItemIcon>
          <ListItemText >Reports</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon >
     < WidgetsIcon className="icon" />
          </ListItemIcon>
          <ListItemText primary="Widgets" />
        </ListItem>
        </List>
      <ListItem button>
          <ListItemIcon>
            <ContentCopyIcon className="icon" />
          </ListItemIcon>
          <ListItemText primary="Cards" /> <ExpandMoreIcon />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AutoAwesomeMosaicIcon className="icon"/>
          </ListItemIcon>
          <ListItemText primary="Layouts" /> <ExpandMoreIcon />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ToggleOnIcon className="icon"/>
          </ListItemIcon>
          <ListItemText primary="Interface" /> <ExpandMoreIcon />
      </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PieChartIcon  className="icon"/>
          </ListItemIcon>
          <ListItemText primary="Graphs" />  <ExpandMoreIcon />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            < FormatOverlineIcon className="icon" />
          </ListItemIcon>
          <ListItemText primary="Forms" /> <ExpandMoreIcon />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            < TableChartIcon className="icon" />
          </ListItemIcon>
          <ListItemText primary="Tables" /> <ExpandMoreIcon />
        </ListItem>
        <Stack direction="row">
        <Typography sx={{marginTop:2+'vh'}}>React.js V0.90</Typography>  <ExpandMoreIcon sx={{marginTop:2+'vh'}}/>
        </Stack>
        <Typography>Mon jan 3,2019,2:53:24 pm</Typography>
        <Box height={7}/>
        <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum sint earum tempore harum quam officiis officia eos magnam ea iure ducimus quos aut </Typography>
    </CardContent>
            </Card>
  );
};

export default Sidebar;
