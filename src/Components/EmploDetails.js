import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export const EmploDetails = () => {
    const [userList, setuserList] = useState([])

    const getData = () => {
        axios.get("http://localhost:2000/users").then(res => {
            console.log(res.data.data)
            setuserList(res.data.data)
        })
  
    }
    var navigate = useNavigate()
  //     var auth = localStorage.getItem('email')
  //   useEffect(() => {
  //     {
  //         if (!auth) {
  //             navigate('/login')
  //         }
  //     }
  // }, [])
    useEffect(() => {
        getData()
    }, [])
     
  return (
    <div className='main-panel'>
    <div className='content-wrapper'>
    <div className='row'> 
    <div className="col-lg-12 grid-margin stretch-card">
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Employee Details</h4>
        <p className="card-description">
         
        </p>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>
                  User
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
                  Designation
                </th>
                
              </tr>
            </thead>
            <tbody>
            {userList.map((user,index)=>{
                        return(
                          <tr class="">
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
                          {user?.role?.roleName}
                          </td>
                         
                          <td> 
                          <Link  to={`/empdetails/${user._id}`} className = "btn btn-info">DETAILS</Link>
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
