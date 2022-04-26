import React from 'react'
import DashboardHeader from './DashboardHeader'
import { Link } from 'react-router-dom'
import SideNav from './SideNav'

function Messages() {
  return (
<div>
        <DashboardHeader />
        <div>
            <div style={{textAlign: "start"}}>
            <SideNav />
            </div>
            <div style={{ marginTop: -480, marginLeft: -400}}>
            <Link to="/Payments"> <button style={{color:"white", backgroundColor: "red", textAlign: "right", marginLeft: 1500}}>PAY TO UPGRADE</button></Link>
                <h4 style={{marginLeft: -50}}>Messages</h4>
                <div>
                  <a href="/"><p style={{color: "blue"}}>Hey Could you please help me solve this problem?</p></a>
                  <a href="/"><p style={{color: "blue"}}>Hey Kemboi, when do we have our discussions?</p></a>
              
                </div>
            </div>
        </div>
    </div>
  )
}

export default Messages