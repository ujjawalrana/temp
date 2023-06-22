import React, { useState } from "react";
import bingeBox from '../../../assets/bingeBox.svg'
import useStyles from "./styles";
import { Box, Button, Table, Typography } from "@material-ui/core";

const PremiumPlan = () => {
  const classes = useStyles();

  return (
    <Box className={classes.signInOuterContainer}>
      <Box style={{background:'white',width:'60%',display:'flex',justifyContent:'flex-start',flexDirection:'column'}}>
        <img src={bingeBox} style={{height:50}}/>
        <Box style={{}}>
          <Box>
            <Typography style={{fontSize:30,fontStyle:'bold',color:'#DB304B'}}>Premium Plan</Typography>
            <Typography>Hi Govind, here is your subscription plan details</Typography>
            <Typography>Validity: 1 July, 2019</Typography>
          </Box>

          <Box style={{display:'flex',flexDirection:'row'}}>
            <Typography>Price</Typography>
            <Typography>Resolution</Typography>
            <Typography>Video Quality</Typography>
            <Typography>Suported Files</Typography>
          </Box>

          <Box style={{display:'flex',flexDirection:'row'}}>
            <Typography>Rs 1499/yr</Typography>
            <Typography>4k (Ultra HD) + HDR</Typography>
            <Typography>Best</Typography>
            <Typography>TV, Computer, Mobile</Typography>
          </Box>

          <Box>
            <Button>Back</Button>
            <Button>Proceed to Payment</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PremiumPlan