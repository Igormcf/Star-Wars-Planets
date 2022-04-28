import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import logo from '../images/logo.png';
import '../css/login.css';
import audio from '../pages/sabre.mp3';
import audioStarWars from '../pages/theme.mp3';

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setTimeout(() => {
      navigate('/planets')
    }, 9000)
  };

  let playSound = () => new Audio(audio).play();
  
  return(
    <body className='container-login'>
      <audio autoPlay preload='metadata' loop id='playAudio'>
        <source src={ audioStarWars } type="audio/mpeg"/>
      </audio>
     {
       !loading ? (
         <main className='main-login'>
           <div className='div-stars'></div>
          <img src={ logo } alt="logo" id='img-logo-login'/>
          <button
            type="button"
            className='button'
            onClick={() => {
              setLoading(true);
              playSound();
              handleLogin();
            }}
          >
            PLANETS
          </button>
         </main>
       )
       : (
         <main className='main-login'>
          <div className='div-stars'></div>
          <img src={ logo } alt="logoGif" id='img-logoGif-login'/>
          <audio autoPlay preload='metadata' loop id='playAudio'>
            <source src={ audioStarWars } type="audio/mpeg"/>
          </audio>
         </main>
       )
     }
    </body>
  )
}

export default Login;