import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export const EmpDetails = () => {
  const [userList, setuserList] = useState([])
    

  const getData = () => {
      axios.get("http://localhost:2000/users").then(res => {
          console.log(res.data.data)
          setuserList(res.data.data)
      })

  }
  var navigate = useNavigate()
    var auth = localStorage.getItem('email')
  useEffect(() => {
    {
        if (!auth) {
            navigate('/login')
        }
    }
}, [])
  useEffect(() => {
      getData()
  }, [])
  
  return (
      <div className='main-panel'>
      <div className='content-wrapper'>
      <div className='row'>
      <div class="col-lg-12 stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Employee Details</h4>
                  <p class="card-description">
                  </p>
                  <div class="table-responsive ">
                    <table class="table table-striped">
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
                          {user.role.roleName}
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
     
       </div>
    
  )
}
