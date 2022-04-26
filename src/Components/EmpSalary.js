import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GenerateSalary } from './GenerateSalary'


export const EmpSalary = () => {
 
    
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
                          {user.role.roleName}
                          </td>
                          <td>
                          {user.salary}
                          </td>
                          <td>
                              <Link to={`/generatesalary/${user._id}`} className  = "btn btn-primary">Genrate Slip</Link>
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
      <footer className="footer">
      <div className="d-sm-flex justify-content-center justify-content-sm-between">
        <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2021. </span>
        
      </div>
    </footer>
       </div>
    
  )
}
