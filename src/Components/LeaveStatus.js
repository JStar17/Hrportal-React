import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'



export const LeaveStatus = () => {
    const [LeaveList, setLeaveList] = useState([])

    const getData = () => {
        axios.get("http://localhost:2000/leave/").then(res => {
            console.log(res.data.data)
            setLeaveList(res.data.data)
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
    <div className='content-wrapper'>
    <div className='row'>
    <div className="col-lg-12 grid-margin stretch-card">
  <div className="card">
    <div className="card-body">
      <h4 className="card-title"> Leave Details</h4>
      <p className="card-description">
        {/* Add class <code>.table-striped</code> */}
      </p>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
            <th>
                #
              </th>
              <th>
                Leave Type
              </th>
              <th>
                Description
              </th>
              <th>
                From Date
              </th>
              <th>
                To Date
              </th>
              
              <th>
               Reason
              </th>
              <th>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
          {LeaveList.map((leave,index)=>{
                        return(
                          <tr class="table-info">
                          <td scope="row">{index+1}
                          </td>
                          <td>
                            {leave.leaveType}
                          </td>
                          <td>
                          {leave.notes}  
                          </td>
                          <td>
                          {leave.fromdate}
                          </td>
                          <td>
                          {leave.todate}
                          </td>
                         
                          <td>
                          {leave.reason}
                          </td>

                          <td>
                          {leave.status=="pending"?<>
                          {/* <button onClick={()=>{updateLeaveStatusToReject(leave._id)}} className = "btn btn-danger">Reject</button>
                          <button onClick={()=>{updateLeaveStatusToAccept(leave._id)}} className  = "btn btn-primary">Approve</button> */}
                          </>:leave.status}
                                        
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
  
