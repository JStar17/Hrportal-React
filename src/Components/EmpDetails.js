import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
  
  export const EmpDetails = ()=>{
    const [userList, setuserList] = useState([])
    const [user, setuser] = useState('')
    const getData = () => {
      axios.get("http://localhost:2000/users/").then(res => {
          console.log(res.data.data)
          setuserList(res.data.data)
      })

  }
  console.log("this is user",userList)

  useEffect(() => {
      getData()
  }, [])
    return (
  <div className="content-wrapper">
    <div className="row">
    <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Personal Detail</h4>
            <p className="card-description">
            
            </p>
            <img
                      className="userimg"
                      src={userList ? userList[0]?.profile_pic :""}
                      alt=""
                      srcset=""
                    />
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>
                      User Name
                    </th>
                    <th>
                      First name
                    </th>
                    <th>
                      Last Name
                    </th>
                    <th>
                      Designation
                    </th>
                    <th>
                      Email
                    </th>
                    <th>
                      Mobile Number
                    </th>
                    <th>
                      Gender
                    </th>
                    <th>
                      D.O.B
                    </th> 
                    <th>
                      Salary
                    </th>
                  </tr>
                </thead>
                <tbody>
                {userList.map((user)=>{
                  return(
                  <tr>
                    <td>
                      {user.userName}
                    </td>
                    <td>
                      {user.firstName}
                    </td>
                    <td>
                    {user.lastName}
                    </td>
                    <td>
                    {user?.role?.roleName}
                    </td>
                    <td>
                    {user.email}
                    </td>
                    <td>
                    {user.mobileNo}
                    </td>
                    <td>
                    {user.gender}
                    </td>
                    <td>
                    {user.dateOfBirth}
                    </td>
                    <td>
                    {user.salary}
                    </td>
                  </tr>
                  )
                })}
                  </tbody>
                <thead>
                  <tr>
                    <th>
                      Address
                    </th>
                    <th>
                      Country
                    </th>
                   </tr>
                </thead>
                <tbody>
                {userList.map((user)=>{
                  return(
                  <tr>
                    <td>
                      {user.address}
                    </td>
                    <td>
                      {user.country}
                    </td>
                </tr>
                  )
                })}
                  </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Bank Detail</h4>
            <p className="card-description">
              
            </p>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Bank Name</th>
                    <th>AccountNo.</th>
                    <th>IFSC Code</th>
                    <th>Pan Number</th>
                  </tr>
                </thead>
                <tbody>
                {userList.map((user)=>{
                  return(
                  <tr>
                    <td>
                      {user.bankName}
                    </td>
                    <td>
                      {user.accountNo}
                    </td>
                    <td>
                      {user.ifsc}
                    </td>
                    <td>
                      {user.panno}
                    </td>
                </tr>
                  )
                })}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Emergency Contact</h4>
            <p className="card-description">
              
            </p>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Relative Name</th>
                    <th>Relation</th>
                    <th>Contact</th>
                   
                  </tr>
                </thead>
                <tbody>
                {userList.map((user)=>{
                  return(
                  <tr>
                    <td>
                      {user.relativename}
                    </td>
                    <td>
                      {user.relation}
                    </td>
                    <td>
                      {user.emnumber}
                    </td>
                    
                </tr>
                  )
                })}
                
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
     
     </div>
     </div>
            
  )
  }
