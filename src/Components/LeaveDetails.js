import axios from 'axios'
import { data } from 'jquery'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export const LeaveDetails = () => {
    
  const [LeaveList, setLeaveList] = useState([])
  const [oneLeave, setoneLeave] = useState([])
    

  const getData = () => {
      axios.get("http://localhost:2000/leave/").then(res => {
          console.log(res.data.data)
          setLeaveList(res.data.data)
      })

  }

  useEffect(() => {
      getData()
  }, [])
  var navigate = useNavigate()
//   var auth = localStorage.getItem('email')
// useEffect(() => {
//   {
//       if (!auth) {
//           navigate('/login')
//       }
//   }
// }, []) 

  const updateLeaveStatusToReject = (leaveId) =>{
    axios.get(`http://localhost:2000/leave/${leaveId}`,data).then(res=>{
        setoneLeave(res.data.data)
        console.log(res.data.data)
        // alert("Data deleted...")

  })
    var data = {
      status:"Rejected",
      user:oneLeave.user,
      leaveType:oneLeave.leaveType,
      notes:oneLeave.notes,
      fromdate:oneLeave.fromdate,
      todate:oneLeave.todate,
      isApproved:oneLeave.isApproved,
      reason:oneLeave.reason  ,
      
    }
    axios.put(`http://localhost:2000/leave/${leaveId}`,data).then(res=>{
      console.log(res.data.data)
        
  })
}

const updateLeaveStatusToAccept = (leaveId) =>{
  axios.get(`http://localhost:2000/leave/${leaveId}`,data).then(res=>{
      setoneLeave(res.data.data)
      console.log(res.data.data)
      // alert("Data deleted...")

})
  var data = {
    status:"Approved",
    user:oneLeave.user,
    leaveType:oneLeave.leaveType,
    notes:oneLeave.notes,
    fromdate:oneLeave.fromdate,
    todate:oneLeave.todate,
    isApproved:oneLeave.isApproved,
    reason:oneLeave.reason  ,
    
  }
  axios.put(`http://localhost:2000/leave/${leaveId}`,data).then(res=>{
    console.log(res.data.data)
})
  setTimeout(() => {
    navigate('/leavedetails')
  }, 1000);
}
  return (
    <div className='content-wrapper'>
    <div className='row'>
    <div className="col-lg-12 grid-margin stretch-card">
  <div className="card">
    <div className="card-body">
      <h4 className="card-title"> Leave Applications</h4>
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
                          <tr class="">
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
                          <button onClick={()=>{updateLeaveStatusToReject(leave._id)}} className = "btn btn-danger">Reject</button>
                          <button onClick={()=>{updateLeaveStatusToAccept(leave._id)}} className  = "btn btn-primary">Approve</button>
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
