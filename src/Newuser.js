import { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';
import { CommentsDisabledOutlined, Login } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';



const theme = createTheme();

function Form() {

// States for registration
// const [first_name, setFirst_Name] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [users, setUser] = useState([])
// const [refresh,setRefresh] = useState();

//   const [name, setName] = useState("");
    //  const [email, setEmail] = useState("");
//   const [last_name, setLast_Name] = useState("");
//   const [userId,setUserId]=useState(null);
const [user, setUser] = useState([]);
const [email, setEmail] = useState('');
const [last_name, setLast_Name] = useState('');
const [first_name, setFirst_Name] = useState('');
const [post, setPost] = useState('');
const [password, setPassword] = useState('');
const [rePass, setRePass] = useState('');
const [isVisible, setIsVisible] = useState(false);
const [refresh,setRefresh] = useState('');
const [isVisibleRe, setIsVisibleRe] = useState(false);
const navigate = useNavigate();
const [errorLogin, setErrorLogin] = useState('');
const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ open: true, ...newState });
  }

  const handleClose = () => {
    setState({ ...state, open: false });
}
const handleClickShowPassword = () => {
   setIsVisible(!isVisible);
   //    // setValues({ ...values, showPassword: !values.showPassword });
 };

 const handleMouseDownPassword = (event) => {
   event.preventDefault();
 }

  
 
// // States for checking the errors
// const [submitted, setSubmitted] = useState(false);
// const [error, setError] = useState(false);



  const login =() => {
	  navigate('/Login')
  }

  const check =() => {

  }
 // // const handlePasswordChange = (prop) => (event) => {
   // //   setValues({ ...values, [prop]: event.target.value });
 // // };

  const handleSubmit = (event) => {
	event.preventDefault();
    const fetchData = async () => {
const response = await axios.get("http://localhost:3333/data").then((response) => {

         console.log(response.data);
        let flag = '';
        let errorFlag = '';
        let userData = '';

        response.data.map((index) => {
			if (index.email !== email) {
				if (password == rePass) {
				  flag = 1
				  				  
				//   localStorage.setItem('userData', JSON.stringify(userData))   //localStorage
				  sessionStorage.setItem('userData',JSON.stringify(userData))     //SessionStorage
				}
				else {
				  console.log('password is wrong');
				}
			  } else {
				errorFlag = 2
			  }
	
	
			})
			if (errorFlag == 2) {
			  console.log("email id is already exits")
			}
			if (flag == 1) {
			  console.log("Successfully")
			  console.log(sessionStorage);
			  axios.post('http://localhost:3333/data',{first_name,last_name,email,password}).then(response)
			  navigate('/Login');
	
			} else {
			  setErrorLogin("Login Error!")
			  console.log("Unsuccessful")
			}
			// setUser(response.data);
		  })
		};
		fetchData();
		console.log(email);
	
	  }

// 		      if(index.email !== email ) 
// 			{
// 			 errorFlag = 2
				
// 			  }else{
// 				console.log("please enter id");
// 			  }
// 		 if(errorFlag == 2){
// 			console.log("email is already exit")
		   
// 		 }
// 		 if ( pass == rePass) 
// 		 { 
// 			console.log('Registration Successfully');
// 			navigate('/Login');
// 		 }else{
// 			alert('password is wrong');
// 		 }
	
// 		if (flag == 1) {
// 			alert('Register Successfully')
// 		   console.log("Successfully")
// 		   navigate('/login');
		  
// 	  } else {
// 		   setErrorLogin("Password is not match")
// 	   console.log("Unsuccessful")
// 		 }
// 		 setUser(response.data);
// 	  })
// 	})
	

// 	 fetchData();
// console.log(email);

//   }

return (
	<>
	<ThemeProvider theme={theme}>
	<Container component="main" maxWidth="xs">
	  <CssBaseline />
	  <Box
		sx={{
		  marginTop: 6,
		  display: 'flex',
		  flexDirection: 'column',
		  alignItems: 'center',
		}}
	  >
		<Avatar sx={{ m: 1, bgColor: 'secondary.main' }}>
		  <LockOutlinedIcon />
		</Avatar>
		<Typography component="h1" variant="h5">
		 Sing Up
		</Typography>
		<span style={{color:'red'}}>{errorLogin}</span>
		<Box component="form" onSubmit={handleSubmit} onClick={check} noValidate sx={{ mt: 1 }}>
		  <TextField 
			margin="normal"
			required
			fullWidth
			id="Name"
			label="Name"
			name="Name"
			autoComplete="Name"
			autoFocus
			onChange={e => setFirst_Name(e.target.value)}
		    
		  />
		 
		  <TextField 
			margin="normal"
			required
			fullWidth
			id="last"
			label="Last name"
			name="last"
			autoComplete="Last"
			autoFocus
			onChange={e => setLast_Name(e.target.value)}
		  
		  />
		    <TextField 
			margin="normal"
			required
			fullWidth
			id="email"
			label="Email Address"
			name="email"
			autoComplete="email"
			// autoFocus
			onChange={e => setEmail(e.target.value)}
		  
		  />
		  <FormControl sx={{mt:1,width:'50ch'}} variant="outlined">
		  <InputLabel htmlFor="outlined-adornment-password">
			  Password
		  </InputLabel>
		  <OutlinedInput
			// margin="normal"
			required
			fullWidth
			name="password"
			label="Password"
			type={isVisible ? "text" : "password"}        
			// // type={value.showPassword ? "text" : "password"}        
			id="password"
			autoComplete="current-password"
			// autoFocus
			onChange={e => setPassword(e.target.value)}
			value={password}
			//onChange={e => setPass(e.target.value)}
			 
			endAdornment={
			  <InputAdornment position="end">
				<IconButton
				  onClick={handleClickShowPassword}
				  onMouseDown={handleMouseDownPassword}
				>
				  {isVisible ? <Visibility /> : <VisibilityOff />}
				  {/* {value.Show.password ? <Visibility /> : <VisibilityOff />} */}
				</IconButton>
			  </InputAdornment>
			  
			}
			
			
		   // label="password"
		  />
		
		  </FormControl>
		  
		  
		  <FormControl sx={{mt:1,width:'50ch'}} variant="outlined">
		  <InputLabel htmlFor="outlined-adornment-password">
			  Password
		  </InputLabel>
		  <OutlinedInput
			// margin="normal"
			required
			fullWidth
			name="password"
			label="Password"
			type={isVisibleRe ? "text" : "password"}        
			// // type={value.showPassword ? "text" : "password"}        
			id="password"
			autoComplete="current-password"
			// autoFocus
			onChange={e => setRePass(e.target.value)}
			value={rePass}
			//onChange={e => setPass(e.target.value)}
			 
			endAdornment={
			  <InputAdornment position="end">
				<IconButton
				  onClick={handleClickShowPasswordRe}
				  onMouseDown={handleMouseDownPassword}
				>
				  {isVisibleRe ? <Visibility /> : <VisibilityOff />}
				  {/* {value.Show.password ? <Visibility /> : <VisibilityOff />} */}
				</IconButton>
			  </InputAdornment>
			  
			}
			
			
		   // label="password"
		  />
		
		  </FormControl>
		  
		  <FormControlLabel
			control={<Checkbox value="remember" color="primary" />}
			label="Remember me"
		  />
		  <Button
			type="submit"
			fullWidth
			variant="contained"
			sx={{ mt: 3, mb: 2 }}
			onClick={handleSubmit}

		  >
			Sign In
		  </Button>
		  <Grid container>
			<Grid item xs>
			  <Link href="#" variant="body2">
				Forgot password?
			  </Link>
			</Grid>
			<Grid item>
			  <a style={{cursor:"pointer"}} onClick={login} variant="body2">
				{"Login "}
			  </a>
			</Grid>
		  </Grid>
		</Box>
	  </Box>
	  {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
	</Container>
  </ThemeProvider>
  <div>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="Registration Successfully"
        key={vertical + horizontal}
      />
    </div>
  {/* <div>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        onClose={handleClose}
        key={vertical + horizontal}
      />
    </div> */}
	     
    </>
);
}
export default Form