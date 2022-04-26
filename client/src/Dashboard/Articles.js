import React from 'react'
import { Link } from 'react-router-dom'
import DashboardHeader from './DashboardHeader'
import SideNav from './SideNav'

function Articles() {
  return (
    <div>
    <DashboardHeader />
    <div>
        <div style={{textAlign: "start"}}>
        <SideNav />
        </div>
        <div style={{ marginTop: -480, marginLeft: -400}}>
        <Link to="/Payments"> <button style={{color:"white", backgroundColor: "red", textAlign: "right", marginLeft: 1500}}>PAY TO UPGRADE</button></Link>
            <h4 style={{marginLeft: -50}}>Articles</h4>
            <div>
              <a href="/"><p style={{color: "red"}}>Python Django web Project article</p></a>
              <a href="/"><p style={{color: "red"}}>React Js article</p></a>
              <a href="/"><p style={{color: "red"}}>PHP article</p></a>
              <a href="/"><p style={{color: "red"}}>Android Development Article</p></a> 
            </div>
        </div>
    </div>
</div>
  )
}

export default Articles