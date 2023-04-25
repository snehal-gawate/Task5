import React from "react";
import { CardContent, Typography,Card,Button, Divider,Box, 
    Stack,LinearProgress} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {styled} from '@mui/material/styles';

const StyledButton = styled(Button)({
 borderRadius:5+'vh',
 marginLeft:2+'vh'
});

const StyledHeadbutton = styled (Button)({
 color:"black",
 width:45+'vh',
 borderColor:"black",
 marginTop:3+'vh'
});

export const Projects=()=>{
    return(
        <div>
            <Card sx={{width:50+'vh',textAlign:"left"}}>
                <CardContent>
                <Typography variant="h6">Projects</Typography>
                <StyledHeadbutton variant="outlined" endIcon={< SearchIcon />}> Search Projects
                </StyledHeadbutton>
                <Divider sx={{marginTop:3+'vh'}}/>

                <Box sx={{marginTop:2+'vh'}}>
                <Stack direction="row">
                <Typography variant="h6">Economic Plastic Chiken</Typography>
                <StyledButton variant="contained" color="success" size="small"
                >Active</StyledButton>
                </Stack>
                <LinearProgress variant="determinate" value={70} sx={{marginTop:3+'vh'}} />
                <Stack direction="row" sx={{marginTop:3+'vh'}}>
                <Box sx={{marginLeft:2+'vh'}}>
                <Typography variant="h6">13%</Typography>
                <Typography variant="subtitle1">Completed</Typography>
                </Box>
                <Box sx={{marginLeft:5+'vh'}}>
                <Typography variant="h6">35</Typography>
                <Typography variant="subtitle1">My Tasks</Typography>
                </Box>
                <Box sx={{marginLeft:5+'vh'}}>
                <Typography variant="h6">6</Typography>
                <Typography variant="subtitle1">Days Due</Typography>
                </Box>
                </Stack>
                </Box>
                <Divider  sx={{marginTop:3+'vh'}}/>

                <Box sx={{marginTop:2+'vh'}}>
                <Stack direction="row">
                <Typography variant="h6">Incredible soft balls</Typography>
                <StyledButton variant="contained" color="error" size="small"
                >Rejected</StyledButton>
                </Stack>
                <LinearProgress variant="determinate" value={30} sx={{marginTop:3+'vh'}} />
                <Stack direction="row" sx={{marginTop:3+'vh'}}>
                <Box sx={{marginLeft:2+'vh'}}>
                <Typography variant="h6">6%</Typography>
                <Typography variant="subtitle1">Completed</Typography>
                </Box>
                <Box sx={{marginLeft:5+'vh'}}>
                <Typography variant="h6">87</Typography>
                <Typography variant="subtitle1">My Tasks</Typography>
                </Box>
                <Box sx={{marginLeft:5+'vh'}}>
                <Typography variant="h6">15</Typography>
                <Typography variant="subtitle1">Days Due</Typography>
                </Box>
                </Stack>
                </Box>
                <Divider  sx={{marginTop:3+'vh'}}/>

                <Box sx={{marginTop:2+'vh'}}>
                <Stack direction="row">
                <Typography variant="h6">Handcrafted Wooden </Typography>
                <StyledButton variant="contained" color="success" size="small"
                >Active</StyledButton>
                </Stack>
                <LinearProgress variant="determinate" value={10} sx={{marginTop:3+'vh'}} />
                <Stack direction="row" sx={{marginTop:3+'vh'}}>
                <Box sx={{marginLeft:2+'vh'}}>
                <Typography variant="h6">98%</Typography>
                <Typography variant="subtitle1">Completed</Typography>
                </Box>
                <Box sx={{marginLeft:5+'vh'}}>
                <Typography variant="h6">21</Typography>
                <Typography variant="subtitle1">My Tasks</Typography>
                </Box>
                <Box sx={{marginLeft:5+'vh'}}>
                <Typography variant="h6">7</Typography>
                <Typography variant="subtitle1">Days Due</Typography>
                </Box>
                </Stack>
                </Box>
                <Divider  sx={{marginTop:3+'vh'}}/>

                </CardContent>
            </Card>
        </div>
    )
}