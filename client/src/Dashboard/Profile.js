import React from 'react'
import { Link } from 'react-router-dom'
import DashboardHeader from './DashboardHeader'
import SideNav from './SideNav'

function Profile() {
  return (
    <div>
    <DashboardHeader />
    <div>
        <div style={{textAlign: "start"}}>
        <SideNav />
        </div>
        <div style={{ marginTop: -480, marginLeft: -400}}>
        <Link to="/Payments"> <button style={{color:"white", backgroundColor: "red", textAlign: "right", marginLeft: 1500}}>PAY TO UPGRADE</button></Link>
            <h4 style={{marginLeft: -50}}>Profile</h4>
            <div>
              <p><label style={{color: "red", marginRight: 10}}>Name: </label><label style={{color: "blue"}}> Kemboi Lovestrant</label> </p>
              <p><label style={{color: "red", marginRight: 10}}>Email: </label><label style={{color: "blue"}}> Kemboilovestrant@gmail.com</label> </p>
            
            </div>
        </div>
    </div>
</div>
  )
}

export default Profile