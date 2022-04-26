import React from 'react'
import DashboardHeader from './DashboardHeader'
import SideNav from './SideNav'
import { Link } from 'react-router-dom'


function Payments() {
  return (
    <div>
    <DashboardHeader />
    <div>
        <div style={{textAlign: "start"}}>
        <SideNav />
        </div>
        <div style={{ marginTop: -480, marginLeft: -400}}>
        <Link to="/Payments"> <button style={{color:"white", backgroundColor: "red", textAlign: "right", marginLeft: 1500}}>PAY TO UPGRADE</button></Link>
            <h4 style={{marginLeft: -50}}>Upgrade Now to access Courses</h4><br></br>
            <div>
              <button style={{backgroundColor: "lightgreen", width: 200}}>Pay with M-Pesa</button> <br></br> <br></br>
              <button style={{backgroundColor: "lightblue", width: 200}}>Pay with PayPal</button> <br></br> <br></br>
              <button style={{backgroundColor: "brown", width: 200}}>Pay with Credit Card</button> 
            </div>
        </div>
    </div>
</div>
  )
}

export default Payments