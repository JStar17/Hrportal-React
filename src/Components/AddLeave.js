import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const AddLeave = () => {
    const [leaveType, setleaveType] = useState('')
    const [notes, setnotes] = useState('')
    const [fromdate, setfromdate] = useState('')
    const [todate, settodate] = useState('')
    const [isApproved, setisApproved] = useState('')
    const [reason, setreason] = useState('')
   
    var navigate = useNavigate()
  //   var auth = localStorage.getItem('email')
  // useEffect(() => {
  //   {
  //       if (!auth) {
  //           navigate('/login')
  //       }
  //   }
  // }, [])
  
  
    const submit =(e)=>{
      e.preventDefault()
      alert("Data saved")
      console.log("ii",e.target.value)
    
      var data = {
        user:localStorage.getItem('userId'),
        leaveType:leaveType,
        notes:notes,
        fromdate:fromdate,
        todate:todate,
        isApproved:isApproved,
        reason:reason  ,
        status:"pending"
      }
      axios.post('http://localhost:2000/leave',data).then(res=>{
          console.log(res.data)
      })
     
  }
  return (
    <div className='content-wrapper'>
    <div className='row'>
    <div class="col-lg-12 stretch-card">
    <div className="col-md-12 grid-margin stretch-card">
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Apply for Leave</h4>
        <p className="card-description">
          
        </p>
        <form className="forms-sample" onSubmit={submit}>
          <div className="form-group row">
            <label htmlFor="exampleInputUsername2" name="leaveType" className="col-sm-2 col-form-label">Leave Type</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" name="leaveType" onChange={(e)=>setleaveType(e.target.value)} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="exampleInputEmail2" name="notes" className="col-sm-2 col-form-label">Notes</label>
            <div className="col-sm-9">
      <input type="text" className="form-control" name="notes" onChange={(e)=>setnotes(e.target.value)} />
            </div>
          </div>
         
          <div className="form-group row">
            <label htmlFor="exampleInputMobile" name="dates" className="col-sm-2 col-form-label">From Date</label>
            <div className="col-sm-9">
              <input type="date" className="form-control" name="dates" onChange={(e)=>setfromdate(e.target.value)} placeholder="dd/mm/yy" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="exampleInputMobile" name="dates" className="col-sm-2 col-form-label">To Date</label>
            <div className="col-sm-9">
              <input type="date" className="form-control" name="dates" onChange={(e)=>settodate(e.target.value)} placeholder="dd/mm/yy" />
            </div>
          </div>
          
          <div className="form-group row">
            <label htmlFor="exampleInputConfirmPassword2" name="reason" className="col-sm-2 col-form-label">Reason</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" name="reason" onChange={(e)=>setreason(e.target.value)} />
            </div>
          </div>
          {/* <button type="submit" className="button2">Submit</button> */}
          <button type="submit" class="btn btn-primary btn-icon-text">
                          
                          Submit
                        </button>
           </form>
      </div>
    </div>
    </div>
    </div>
    </div>
  </div>
  )
}
