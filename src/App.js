import * as React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Login from './Login';
import {
  Route,
  Routes,
} from "react-router-dom";
import Home from './Home';
import { useEffect } from 'react';
import Newuser from './Newuser';

export default function App() {
  const navigate = useNavigate();
  let userData = JSON.parse(localStorage.getItem('userData'));
  useEffect(() => {
    if((userData) == null)
    {
      navigate('/Login');  
    }
    else{
      navigate('/Home');
    }
  
  },[]);

  
    return (
      <>
      <Routes>
      {/* <Route path='/' element={<App/>}></Route> */}
      {/* <Route path='Login' element={<Login/>}></Route> */}
      {/* <Route path='App' element={<App/>}></Route> */}
      <Route path='home' element={<Home/>}></Route>
      <Route path='Login' element={<Login/>}></Route>
      <Route path='Newuser' element={<Newuser/>}></Route>
    </Routes>   
      </>
    )
  }


// function App(){
//   //  const abc(){
//     const navigate = useNavigate();

   

//     navigate('/Logged');
//   return(
// {/* <button onClick={abc}>click</button> */}
//   )

// };
// export default App;