import React from 'react'
import DashboardHeader from './DashboardHeader'
import { Link } from 'react-router-dom'
import SideNav from './SideNav'

function Dashboard() {
  return (
    <div>
        <DashboardHeader />
        <div>
            <div style={{textAlign: "start"}}>
            <SideNav />
            </div>
            <div style={{ marginTop: -480, marginLeft: -400}}>
            <Link to="/Payments"> <button style={{color:"white", backgroundColor: "red", textAlign: "right", marginLeft: 1500}}>PAY TO UPGRADE</button></Link>
                <h4 style={{marginLeft: -50}}>Communities</h4>
                <div>
                  <a href="/"><p style={{color: "red"}}>Python Django Learning Community</p></a>
                  <a href="/"><p style={{color: "red"}}>React Js/ NodeJs Learning Community</p></a>
                  <a href="/"><p style={{color: "red"}}>PHP Laravel Community</p></a>
                  <a href="/"><p style={{color: "red"}}>Java android Community</p></a> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard