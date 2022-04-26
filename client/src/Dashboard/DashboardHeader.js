import React from 'react'
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Header from '../Auth/header';
import '../Auth/css/header.css'
import { NavLink } from 'react-router-dom';
import { Box } from '@material-ui/core';


function DashboardHeader() {
  return (
    <div>
        <AppBar position='static' style={{backgroundColor: "#9494E9"}}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box display='flex' flexGrow={1}>
            {/* whatever is on the left side */}
            <div> <Header /></div>
        </Box>
        
              <Typography >
              <div className='HorizontalDiv' style={{display: "flex", alignItems: "right"}}>
             <div className='TheDiv' >
             <NavLink activeClassName="active"  to="/Notifications">Notifications</NavLink>
             </div>
             <div className='TheDiv'>
              <NavLink activeClassName="active" to="/Profile">Profile</NavLink>
              </div>

              <div className='TheDiv'>
              <NavLink activeClassName="active" to="/Messages">Messages</NavLink>
              </div>
              </div>
     {/* <div style={{display: "flex", alignItems: "flex-end"}}><button style={{color: "red", backgroundColor: "rgb(208, 195, 195)"}}>Log Out</button></div> */}
                    
              </Typography>
             
          </Toolbar>
          
        </AppBar>
    </div>
  )
}

export default DashboardHeader



