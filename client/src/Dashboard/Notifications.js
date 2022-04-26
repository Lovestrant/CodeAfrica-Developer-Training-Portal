import React from 'react'
import { Link } from 'react-router-dom'
import DashboardHeader from './DashboardHeader'
import SideNav from './SideNav'

function Notifications() {
  return (
<div>
        <DashboardHeader />
        <div>
            <div style={{textAlign: "start"}}>
            <SideNav />
            </div>
            <div style={{ marginTop: -470, marginLeft: -400}}>
            <Link to="/Payments"> <button style={{color:"white", backgroundColor: "red", textAlign: "right", marginLeft: 1500}}>PAY TO UPGRADE</button></Link>
                <h4 style={{marginLeft: -50}}>Notifications</h4>
              
                <div>
                  <a href="/GoogleNotification"><p style={{color: "blue"}}>Google Notifications</p></a>
                  <a href="/Code aFrica Notification"><p style={{color: "blue"}}>Code Africa Learning Notifications</p></a>
              
                </div>
            </div>
        </div>
    </div>
  )
}

export default Notifications