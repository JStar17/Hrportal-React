import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



export const UserDetail = () => {
  const [userList, setuserList] = useState([])
    

  const getData = () => {
      axios.get("http://localhost:2000/users").then(res => {
          console.log(res.data.data)
          setuserList(res.data.data)
      })

  }
  useEffect(() => {
      getData()
  }, [])
  
  return (
      // <div className='main-panel'>
      <div className='content-wrapper'>
      <div className='row'>
      <div class="col-lg-10 stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Employee Details</h4>
                  <p class="card-description">
                  </p>
                  <div class="table-responsive pt-1">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>
                            #
                          </th>
                          <th>
                            First name
                          </th>
                          <th>
                            Last name
                          </th>
                          <th>
                            User name
                          </th>
                          <th>
                            Email
                          </th>
                          <th>
                            Gender
                          </th>
                          <th>
                            Mobile Number
                          </th>
                          <th>
                            D.O.B
                          </th>
                          <th>
                            Address
                          </th>
                          <th>
                            Role
                          </th>
                          <th>
                            Salary
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                      {userList.map((user,index)=>{
                        return(
                          <tr class="table-info">
                          <td scope="row">{index+1}
                          </td>
                          <td>
                            {user.firstName}
                          </td>
                          <td>
                          {user.lastName}  
                          </td>
                          <td>
                          {user.userName}
                          </td>
                          <td>
                          {user.email}
                          </td>
                          <td>
                          {user.gender}
                          </td>
                          <td>
                          {user.mobileNo}
                          </td>
                          <td>
                          {user.dateOfBirth}
                          </td>
                          <td>
                          {user.address}
                          </td>
                          <td>
                          {user.roleName}
                          </td>
                          <td>
                          {user.salary}
                          </td>
                          <td>
                                        <Link  to={`/delete/${user._id}`} className = "btn btn-danger">DELETE</Link>
                                        <Link  to={`/update/${user._id}`} className  = "btn btn-primary">UPDATE</Link>
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
      // </div>
    
  )
}
