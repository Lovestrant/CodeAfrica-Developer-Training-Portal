import React from 'react'
import { Link } from 'react-router-dom'
import DashboardHeader from './DashboardHeader'
import SideNav from './SideNav'

function Projects() {
  return (
    <div>
    <DashboardHeader />
    <div>
        <div style={{textAlign: "start"}}>
        <SideNav />
        </div>
        <div style={{ marginTop: -480, marginLeft: -400}}>
        <Link to="/Payments"> <button style={{color:"white", backgroundColor: "red", textAlign: "right", marginLeft: 1500}}>PAY TO UPGRADE</button></Link>
            <h4 style={{marginLeft: -50}}>Projects</h4>
            <div>
              <a href="/"><p style={{color: "red"}}>Python Django Web Project</p></a>
              <a href="/"><p style={{color: "red"}}>React Js/ web Project</p></a>
              <a href="/"><p style={{color: "red"}}>PHP, HTML, CSS BOOTSTRAP PROJECT</p></a>
              <a href="/"><p style={{color: "red"}}>Java android project</p></a> 
            </div>
        </div>
    </div>
</div>
  )
}

export default Projects