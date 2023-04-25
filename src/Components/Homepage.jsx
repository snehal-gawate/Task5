import React from "react";
import {Appbar} from "./Appbar";
import { styled } from '@mui/material/styles';
import { Box,Button, Stack, Typography, Divider } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Tasks } from "./Tasks";
import { Projects } from "./Projects";
import Timeline from "./Timeline";

const StyledDivider = styled(Divider)({
 width:35+'vh'
});


const StyledButton = styled(Button)({
 borderRadius:5+'vh',
 marginLeft:1+'vh'
});

  const myImage = require('./Images/pie1.png')
  const myImage2 = require('./Images/pie2.png')

export const Homepage=()=>{

return(
        <div>
            <Appbar/>
           <Typography variant="h3" 
           sx={{textAlign:"left",marginLeft:30+'vh'}}>
          Projects</Typography>

          <Typography variant="subtitle2" sx={{textAlign:"left",marginLeft:30+'vh'}}>Lorem, ipsum dolor sit
           amet consectetur adipisicing elit. Optio animi eveniet nihil rerum, 
           cum dolor labore ipsam.</Typography>

       <Stack direction="row" sx={{marginLeft:30+'vh'}}>
           <StyledDivider>payment</StyledDivider>
           <StyledDivider>All task</StyledDivider> 
           <StyledDivider>All project </StyledDivider>
           <StyledDivider>My status</StyledDivider>
           </Stack>

     <Box sx={{marginTop:5+'vh',marginLeft:30+'vh'}}>
       <Stack direction="row">

        <Box> 
      <Stack direction="column">

      <Box>
      <Stack direction="row">
      <Box><Stack direction="row">
      <FiberManualRecordIcon color="primary"/> 
      <Typography variant="subtitle1">Today</Typography>
      </Stack><Typography variant="h5">$3,267</Typography>
      </Box>
      
      <Box sx={{marginLeft:9+'vh'}}>
      <Stack direction="row"><FiberManualRecordIcon color="success"/>
      <Typography variant="subtitle1">This month</Typography>
      </Stack><Typography variant="h5">$8,091</Typography>
      </Box>
      </Stack>
      </Box>

      <StyledDivider sx={{marginTop:3+'vh'}}>invoices</StyledDivider>
      <Box><Stack direction="row">
      <Box><Stack direction="row">
      <FiberManualRecordIcon color="warning"/> <Typography variant="subtitle1">deu</Typography>
      </Stack><Typography variant="h5">$3,267</Typography>
      </Box>
      
      <Box sx={{marginLeft:9+'vh'}}>
      <Stack direction="row"><FiberManualRecordIcon color="error"/>
      <Typography variant="subtitle1">Overdue</Typography>
      </Stack><Typography variant="h5">$8,091</Typography>
      </Box></Stack></Box>
      </Stack>
      </Box>


      <Box sx={{marginLeft:4+'vh'}}>
      <Stack direction="row">
      <Box component='img' src={ myImage} alt='' height={90} />
      <Box>

      <Stack direction="row"><FiberManualRecordIcon color="warning" /> 
      <Typography variant="subtitle1">23pending</Typography>
      </Stack><Stack direction="row">
      <FiberManualRecordIcon color="error" /> <Typography variant="subtitle1">3pending
      </Typography></Stack>

      <Stack direction="row"><FiberManualRecordIcon color="success" /> 
      <Typography variant="subtitle1">34completed</Typography>
      </Stack>
     </Box>
      
     <Box sx={{marginLeft:10+'vh'}}> <Stack direction="row">
     <Box component='img' src={ myImage2} alt='' />
     <Box>

      <Stack direction="row"><FiberManualRecordIcon color="success" /> 
      <Typography variant="subtitle1">23pending</Typography>
      </Stack><Stack direction="row">
      <FiberManualRecordIcon  color="primary"/> <Typography variant="subtitle1">3pending
      </Typography></Stack>

      <Stack direction="row"><FiberManualRecordIcon color="secondary"/> 
      <Typography variant="subtitle1">34completed</Typography>
      </Stack></Box></Stack></Box>

      <Box sx={{marginLeft:10+'vh',textAlign:"left"}}>
        <Typography>Active projects <StyledButton variant="contained" size="small"  color="success">
          5</StyledButton> </Typography> 
        <Divider sx={{marginTop:1+'vh'}} />

        <Typography sx={{marginTop:1+'vh'}}>Open task <StyledButton variant="contained"
         size="small" sx={{marginLeft:5+'vh'}}>6</StyledButton> </Typography>
        <Divider sx={{marginTop:1+'vh'}} />

        <Typography sx={{marginTop:1+'vh'}}>Support tickets <StyledButton variant="contained"
         size="small" color="success">15</StyledButton> </Typography>
        <Divider sx={{marginTop:1+'vh'}} />

        <Typography sx={{marginTop:1+'vh'}}>Active timers<StyledButton variant="contained" 
        size="small" sx={{marginLeft:5+'vh'}}>4</StyledButton></Typography>
        <Divider sx={{marginTop:1+'vh'}} />

      </Box>
     </Stack>
   
      </Box>
      </Stack>

     </Box> 
     
    <Stack direction="row" spacing={3} sx={{marginTop:8+'vh',marginLeft:25+'vh'}}>
     <Tasks/>
    <Timeline/>
    <Projects/>
   </Stack>
    </div>
    )
}