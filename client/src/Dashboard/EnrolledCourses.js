import React from 'react'
import { Link } from 'react-router-dom'
import DashboardHeader from './DashboardHeader'
import SideNav from './SideNav'

function EnrolledCourses() {
  return (
    <div>
        <DashboardHeader />
        <div>
            <div style={{textAlign: "start"}}>
            <SideNav />
            </div>
            <div style={{ marginTop: -480, marginLeft: -400}}>
            <Link to="/Payments"> <button style={{color:"white", backgroundColor: "red", textAlign: "right", marginLeft: 1500}}>PAY TO UPGRADE</button></Link>
                <h4 style={{marginLeft: -50}}>Enrolled Courses</h4>
                <div>
                  <a href="/"><p style={{color: "red"}}>Python Django Learning course</p></a>
                  <a href="/"><p style={{color: "red"}}>React Js/ NodeJs Learning Course</p></a>
                 
                </div>
            </div>
        </div>
    </div>
  )
}

export default EnrolledCourses