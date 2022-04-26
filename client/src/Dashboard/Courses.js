import React from 'react'
import { Link } from 'react-router-dom'
import DashboardHeader from './DashboardHeader'
import SideNav from './SideNav'

function Courses() {
  return (
    <div>
        <DashboardHeader />
        <div>
            <div style={{textAlign: "start"}}>
            <SideNav/>
            </div>
            <div style={{ marginTop: -470, marginLeft: -400}}>
            <Link to="/Payments"> <button style={{color:"white", backgroundColor: "red", textAlign: "right", marginLeft: 1500}}>PAY TO UPGRADE</button></Link>
                <h4 style={{marginLeft: -50}}>Courses</h4>
              
                <div>
                  <a href="/MY Courses"><p style={{color: "red"}}>Python Django Learning Course</p></a>
                  <a href="/MY Courses"><p style={{color: "red"}}>React Nodejs web development Course</p></a>
                  <a href="/MY Courses"><p style={{color: "red"}}>PHP Laravel Course</p></a>
                  <a href="/MY Courses"><p style={{color: "red"}}>Java android Course</p></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Courses