import { Email, Logout } from '@mui/icons-material'
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { style } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
// import App from './App'



function Home() {

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();


  const handleChange = (event) => {
    setAuth(event.target.checked);
    navigate('/Login');
    let userData = JSON.parse(localStorage.removeItem('userData'));

    
  };

  const remove = () =>{
 let userData = JSON.parse(localStorage.removeItem('userData'));
  }


  const Logout = () => {
    
        navigate('/Login');
    let userData = JSON.parse(localStorage.removeItem('userData'));

    
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
      //localStorage
   let userData = JSON.parse(localStorage.getItem('userData'));
  // console.log(userData)

  //session storage
  //let userData = JSON.parse(sessionStorage.getItem('userData'))
  return (
    <>
       
    <Box sx={{ flexGrow: 1 }}>
    <FormGroup style={{alignItems:'flex-end'}}>
      <FormControlLabel
        control={ 
          <Switch
            checked={auth}
            onChange={handleChange}
            aria-label="login switch"
             
            
          />
        }
        label={auth ? 'Logout' : 'Login'}
      />
    </FormGroup>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Dashborad
        </Typography>
        {auth && (
          <div style={{ display:'flex', alignItems:'center'}}>
             <div>
               {userData.email}
            </div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
            
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={Logout}>Logout</MenuItem>
            </Menu>
            </div>
        )}
      </Toolbar>
    </AppBar>
      <h3>{userData.id}</h3>
      <h3>{userData.first_name + userData.last_name}</h3>
      <h3>{userData.email}</h3>
      <button onClick={remove}>delete</button>

  </Box>
  </>

);
}


export default Home
