import React, { useState } from "react";
import { Box, Button, Checkbox, FormControlLabel, IconButton, InputAdornment, TextField, Typography } from "@material-ui/core";
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

import bingeBox from '../../../assets/bingeBox.svg'
import useStyles from "./styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const SignIn = () => {
	const classes = useStyles();

	const [checked, setChecked] = React.useState(false);

	const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChangePassword = (event:any) => {
        setPassword(event.target.value);
    };
	
	const handleChange = (event:any) => {
    setChecked(event.target.checked);
  };

	return (
		<Box className={classes.signInOuterContainer}>
			<Box className={classes.signInContainer}>

				<img src={bingeBox} style={{height:60}}/>

				<Typography 
					style={{
						paddingTop:20,
						fontSize:25,
						color:'white',
    			}}
				>Login</Typography>

				<TextField
					id='sign-in-user-name'
					name='sign-in-user-name'
					placeholder='govindYadav@gmail.com'
					variant='outlined'
					style={{
						backgroundColor:'white',
						borderRadius:4,
						marginTop:10,
					}}
				/>

				<Box 
					style={{
						display:"flex",
						flexDirection:'row',
						justifyContent:'space-between',
						marginTop:16
					}}
				>
					<Typography>Email Address</Typography>
					<Typography className={classes.ForgotButtonColor}>Forget Password?</Typography>
				</Box>

				<TextField
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handleChangePassword}
                    placeholder="Password"
                    variant='outlined'
					style={{
						backgroundColor:'white',
						borderRadius:4,
						marginTop:10,
    			    }}
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                            onClick={handleTogglePasswordVisibility}
                            edge="end"
                            aria-label="toggle password visibility"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        ),
                    }}
                />

				<FormControlLabel
					control={<Checkbox checked={checked} onChange={handleChange} style={{color:'white'}}/>}
					label="Remember Me"
					style={{
						display: 'flex',
						justifyContent:'flex-start',
						color:'white',
					}}
      	/>

				<Button 
					color='default'
					variant='outlined'
					style={{
						backgroundColor: '#DB304B',
						color: 'white',
						marginTop:20,
						fontSize: '1.2rem',
					}}
				>
					Login
				</Button>
				
				<Box style={{display:'flex',justifyContent:'center',marginTop:35,marginBottom:35}}>
					<Typography style={{color:'white'}}>Do you have account?</Typography>
					<Typography style={{color:'#DB304B',textDecoration: 'underline',fontSize:16}}>Sign UP ?</Typography>
				</Box>

				<Box style={{
					display: 'flex',
					alignItems: 'center',
				}}>
					<Box style={{
						flex: '1',
						borderBottom: '2px solid #DB304B',
					}}/>
						<span style={{
							margin: '0 10px',
							color: 'white',
							fontSize:12,
						}}>Or Login With</span>
					<Box style={{
						flex: '1',
						borderBottom: '2px solid #DB304B',
					}}/>
      	</Box>

				<Box style={{
					display: 'flex',
					justifyContent:'center',
					marginTop: 35
					}}
				>	
					<Button color='secondary' variant='outlined' style={{
						backgroundColor: 'white',
						color: 'Black',
						borderColor: 'black',
						marginRight:20,
						fontSize: '1.1rem',
						width:120
					}}> <GoogleIcon /> Google</Button>

					<Button color='secondary' variant='outlined' style={{
						backgroundColor: 'white',
						color: 'Black',
						borderColor: 'black',
						marginLeft:20,
						fontSize: '1.1rem',
						width:120
					}}> <AppleIcon />Apple</Button>

				</Box>
			</Box>
		</Box>
	);
};

export default SignIn