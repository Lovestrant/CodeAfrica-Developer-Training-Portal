import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import DashboardHeader from './DashboardHeader'
import SideNav from './SideNav'

function Courses() {
    const [data, setData] = useState([{
        id: '',
        course: '',
        
    }]);

    useEffect(() => {
        axios.get("http://localhost:3000/users")
        .then((response) =>{
            setData(response.data);
        })
      },[])
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
                  {data.map(courses => (
                   <div> 
                    
                     <h6>
                     <label style={{color:"red"}}> {courses.id}</label>
                         {courses.course}  
                     </h6> 
                     
                   
                   </div>
                  ))}
                     </div>
            </div>
        </div>
    </div>
  )
}

export default Courses