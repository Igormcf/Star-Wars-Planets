import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import logo from '../images/logo.png';
/* import logoGif from '../images/logoGifStarWars.gif'; */
import '../css/login.css';

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setTimeout(() => {
      navigate('/planets')
    }, 5000)
  };

  return(
    <div>
     {
       !loading ? (
         <main className='main-login'>
           <div className='div-stars'></div>
          <img src={ logo } alt="logo" id='img-logo-login'/>
          <button
            type="button"
            className='button'
            onClick={() => {
              setLoading(true)
              handleLogin();
            }}
          >
            START
          </button>
         </main>
       )
       : (
         <main className='main-login'>
           <div className='div-stars'></div>
           <img src={ logo } alt="logoGif" id='img-logoGif-login'/>
         </main>
       )
     }
    </div>
  )
}

export default Login;