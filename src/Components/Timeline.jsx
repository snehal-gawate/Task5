import React from 'react';
import { Stepper, Step, StepLabel, StepContent, Typography, Card, CardContent, Button, Divider, StepIcon } from "@mui/material";
import {styled} from '@mui/material/styles';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';

const StyledButton =styled(Button)({
 color:"white",
 backgroundColor:"gray",
 marginTop:3+'vh',
 borderRadius:5+'vh',
 fontWeight:"bolder"
});


const Styledtypo =styled(Typography)({
 fontSize:16,
 fontWeight:'bold'
});

function Timeline() {
 

  return (
   <div>
    <Card sx={{width:50+'vh',textAlign:"left"}}>
        <CardContent>
    <Typography variant='h6'>Timeline</Typography>
    <StyledButton variant='contained'>2 days ago</StyledButton>
    <Stepper  orientation="vertical" sx={{marginTop:3+'vh'}}>
      <Step>
        
        <StepLabel StepIconComponent={ClearIcon } >
        <Button variant='contained' color='error' sx={{borderRadius:2+'vh'}} size='small'>Alert</Button> 
        </StepLabel >
        <StepContent>
        <Styledtypo variant='subtitle2' >Public key responsive focus group</Styledtypo>
          <Typography variant='subtitle2'>sun Dec 25,2022 00.29.39 GMT+0530 (India Standard Time).</Typography>
        </StepContent>
      </Step>
      <Divider sx={{marginTop:3+'vh',marginLeft:3+'vh'}}/>
      <Stepper orientation="vertical" sx={{marginTop:3+'vh'}}>
      <Step>
        <StepLabel StepIconComponent={QuestionMarkIcon }> 
        <Button variant='contained' color='warning' sx={{borderRadius:2+'vh'}} size='small'>warning</Button> 
        </StepLabel>
        <StepContent>
               <Styledtypo variant='subtitle2' >Compatible 3rd generation focus group</Styledtypo>
          <Typography variant='subtitle2'>Tue Jan 28,2022 10.27.45 GMT+0530 (India Standard Time).</Typography>
        </StepContent>
      </Step>
     
      <Divider sx={{marginTop:3+'vh',marginLeft:3+'vh'}}/>
      <Stepper  orientation="vertical" sx={{marginTop:3+'vh'}}>
      <Step>
        <StepLabel StepIconComponent={CheckIcon}>
        <Button variant='contained' color='success' sx={{borderRadius:2+'vh'}} size='small'>Safe</Button> 
        </StepLabel>
        <StepContent>
               <Styledtypo variant='subtitle2' >Reversed Engineered explicit pricing structure</Styledtypo>
          <Typography variant='subtitle2'>sun Dec 25,2022 00.29.39 GMT+0530 (India Standard Time).</Typography>
        </StepContent>
      </Step>
     </Stepper>
      </Stepper>
    </Stepper>
    </CardContent>
    </Card>
    </div>
  );
}

export default Timeline;
