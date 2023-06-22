import React, { useState } from "react";
import bingeBox from '../../../assets/bingeBox.svg'
import useStyles from "./styles";
import { Box, Button, Table, Typography } from "@material-ui/core";

const AllPlan = () => {
  const classes = useStyles();

  return (
    <Box className={classes.signInOuterContainer}>
      <Box style={{width:'38%',display:'flex',flexDirection:'column'}}>
        <img src={bingeBox} style={{height:50}}/>
        <Typography style={{fontSize:60,color:'#DB304B',fontWeight:'bold'}}>"Unleash Your</Typography>
        <Typography style={{fontSize:60,color:'#DB304B',fontWeight:'bold'}}>Movie Magic"</Typography>
        <Typography style={{fontSize:28,color:'white'}}>Subscription Plans for Endless</Typography>
        <Typography style={{fontSize:28,color:'white'}}>Streaming Delight!"</Typography>
      </Box>

      <Box style={{ backgroundColor:'white',width:'17%',height:'40%',display:'flex',flexDirection:'column'}}>
        <Typography>Premium</Typography>
        <Typography>Rs 1499/yr</Typography>
        <Typography>4 Devices</Typography>
        <Typography>Resolution</Typography>
        <Typography>4k (Ultra HD) + HDR</Typography>
        
        <Typography>Video Quality</Typography>
        <Typography>Best</Typography>

        <Typography>Supported device</Typography>
        <Typography>Tv, computer, mobile, tablet</Typography>
      </Box>
    </Box>
  );
};

export default AllPlan