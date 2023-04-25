import React from "react";
import { CardContent,Card, Typography, Button,Checkbox
  ,List,ListItem,ListItemText,Divider, Stack} from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SearchIcon from '@mui/icons-material/Search';
import {styled} from '@mui/material/styles';

const StyledButton = styled(Button)({
  color:"black",
 width:45+'vh',
 borderColor:"black",
 marginTop:3+'vh'

});

export const Tasks=()=>{

    const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

    return(
        <div>
        <Card sx={{width:50+'vh',textAlign:"left"}}> 
        <CardContent>
        <Typography variant="h5">Task</Typography>
        
        <StyledButton variant="outlined" endIcon={<SearchIcon />}>Search tasks...</StyledButton>

        <Divider sx={{marginTop:3+'vh'}} />

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
      <Checkbox  />
      <Stack direction="row">
        <ListItemText
          primary="Compressing the array won't do anything.we need to copy the digital USB circuit !"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              > 
              </Typography>
              {"sun Aug 07 2022 12.08.15)"} <br/>
              {" GMT+0530(India Standard Time"}
            </React.Fragment>
          }
        /><FiberManualRecordIcon sx={{marginTop:1+'vh'}} color="success"/> </Stack>
      </ListItem>

      <Divider  />
      <ListItem alignItems="flex-start">
      <Checkbox  />
      <Stack direction="row">
        <ListItemText
          primary="I'll be generate the nuetral EXE interface,they should capacitor the RSS alaram !"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {"sun dec 18 2022 02.52.55)"} <br/>
              {" GMT+0530(India Standard Time"}
            </React.Fragment>
          }
        />    <FiberManualRecordIcon sx={{marginTop:1+'vh'}} color="error"/> </Stack>
      </ListItem>
      <Divider  />

      <ListItem alignItems="flex-start">
      <Checkbox  />
      <Stack direction="row">
        <ListItemText
          primary="We need to synthesize the auxillary AGP feed !"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {"sat jul 30 2022 09.55.36)"} <br/>
              {" GMT+0530(India Standard Time"}
            </React.Fragment>
          }
        /> <FiberManualRecordIcon sx={{marginTop:1+'vh'}} color="warning"/> </Stack>
      </ListItem>
      <Divider  />
     
      <ListItem alignItems="flex-start">
      <Checkbox  />
      <Stack direction="row">
        <ListItemText
          primary="I'll be generate the nuetral EXE interface,they should capacitor the RSS alaram !"
         /> <FiberManualRecordIcon sx={{marginTop:1+'vh'}}/> </Stack>
         </ListItem>
      </List>

      </CardContent>  
        </Card>
        
        </div>
    )
}