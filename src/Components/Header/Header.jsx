import { Container, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


import './header.scss'

function Header() {
  const [lightMode, setLightMode] = useState(false)

  console.log(!lightMode);

  const changeMode = () =>{
    setLightMode(!lightMode)
  }

  return (
    <div className={`headerTop ${lightMode ? 'active':''}`}>
      <Container>
        <Grid container alignItems={'center'}>
          <Grid item lg={2}>
            <div className="logoArea">
              <img className='logoImage' src='https://compar.edu.az/staticfiles/defaults/img/compar%20logo1%402x.png' />
            </div>
          </Grid>
          <Grid item lg={6}>
            <div className="searchArea">
              <TextField label="Search" fullWidth />
            </div>
          </Grid>
          <Grid item lg={4}>
            <div className="iconArea">
              <span>
                <LoginIcon />
                Login
              </span>
              {/* <span>
                <PersonIcon />
              </span> */}
              <span>
                <ShoppingCartIcon />
                Cart
              </span>
              <span onClick={() => setLightMode(!lightMode)}>
                <DarkModeIcon />
                Dark mode
              </span>
              {/* <span>
                <LightModeIcon />
              </span> */}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Header