import React, { useState } from "react";
import { Box, Button, Checkbox, FormControlLabel, IconButton, InputAdornment, TextField, Typography } from "@material-ui/core";
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import bingeBox from '../../../assets/bingeBox.svg'
import useStyles from "./styles";

const SignOut = () => {
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

    const [showPasswordforVerify, setShowPasswordforVerify] = useState(false);
    const [passwordforVerify, setPasswordforVerify] = useState('');

    const handleTogglePasswordVisibilityforVerify = () => {
        setShowPasswordforVerify(!showPasswordforVerify);
    };

    const handleChangePasswordforVerify = (event:any) => {
        setPasswordforVerify(event.target.value);
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
				>Sign Up</Typography>

				<TextField
					id='sign-in-name'
					name='sign-in-name'
					placeholder='Name'
					variant='outlined'
					style={{
						backgroundColor:'white',
						borderRadius:12,
						marginTop:10,
					}}
				/>

                <TextField
					id='sign-in-email'
					name='sign-in-email'
					placeholder='Email'
					variant='outlined'
                    type='email'
					style={{
						backgroundColor:'white',
						borderRadius:12,
						marginTop:10,
					}}
				/>

                <TextField
					id='sign-in-number'
					name='sign-in-number'
					placeholder='Number'
					variant='outlined'
                    type='number'
					style={{
						backgroundColor:'white',
						borderRadius:12,
						marginTop:10,
					}}
				/>

                <TextField
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handleChangePassword}
                    placeholder="Password"
                    variant='outlined'
					style={{
						backgroundColor:'white',
						borderRadius:12,
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

                <TextField
                    type={showPasswordforVerify ? 'text' : 'password'}
                    value={passwordforVerify}
                    onChange={handleChangePasswordforVerify}
                    placeholder="Password"
                    variant='outlined'
					style={{
						backgroundColor:'white',
						borderRadius:12,
						marginTop:10,
    			    }}
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                            onClick={handleTogglePasswordVisibilityforVerify}
                            edge="end"
                            aria-label="toggle password visibility"
                            >
                            {showPasswordforVerify ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        ),
                    }}
                />

				<FormControlLabel
					control={<Checkbox checked={checked} onChange={handleChange} style={{color:'white'}}/>}
					label="By signing up, you agree to our private policy"
					style={{
						display: 'flex',
						justifyContent:'flex-start',
						color:'white',
                        marginTop:20
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
                        borderRadius:8
					}}
				>
					Sign Up
				</Button>
				
			</Box>
		</Box>
	);
};

export default SignOut