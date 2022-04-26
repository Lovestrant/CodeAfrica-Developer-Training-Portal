import React from 'react'
import { Link } from 'react-router-dom'

function SideNav() {
  return (
    <div className='SideDiv' style={{backgroundColor: "grey", width: 180, padding: 5}}>

            <Link to="/Dashboard" activeClassName="SideActive" style={{color: "black"}}>
            <div  className='communities' style={{backgroundColor: "rgb(59, 156, 189)", width: 160, padding: 10}}>
                Communities
            </div>
            </Link> <br></br>

            <Link to="/Courses" activeClassName="SideActive" style={{color: "black"}}>
            <div className='communities' style={{backgroundColor: "rgb(59, 156, 189)", width: 160, padding: 10}}>
            Courses
            </div>
            </Link><br></br>

            <Link to="/Projects" activeClassName="SideActive" style={{color: "black"}}>
            <div className='communities' style={{backgroundColor: "rgb(59, 156, 189)", width: 160, padding: 10}}>
               Projects
            </div>
            </Link><br></br>

            <Link to="/Articles" activeClassName="SideActive" style={{color: "black"}}>
            <div className='communities' style={{backgroundColor: "rgb(59, 156, 189)", width: 160, padding: 10}}>
               Articles
            </div>
            </Link><br></br>

            <Link to="/EnrolledCourses" activeClassName="SideActive" style={{color: "black"}}>
            <div className='communities' style={{backgroundColor: "rgb(59, 156, 189)", width: 160, padding: 10}}>
              Enrolled Courses
            </div>
            </Link><br></br>
            <Link to="/DeveloperCourses" activeClassName="SideActive" style={{color: "black"}}>
            <div className='communities' style={{backgroundColor: "rgb(59, 156, 189)", width: 160, padding: 10}}>
              Enrolled Projects
            </div>
            </Link><br></br>
            <Link to="/ReferFriends" activeClassName="SideActive" style={{color: "black"}}>
            <div className='communities' style={{backgroundColor: "rgb(59, 156, 189)", width: 160, padding: 10}}>
              Refer Friends
            </div>
            </Link><br></br>
        
    </div>
  )
}

export default SideNav