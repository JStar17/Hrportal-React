import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const AddRole = () => {
    const [rolename,setrolename ] = useState('')
    
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
        roleName:rolename,
      }

      axios.post('http://localhost:2000/roles',data).then(res=>{
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
        <h4 className="card-title">Role</h4>
        <p className="card-description">
          
        </p>
        <form className="forms-sample" onSubmit={submit}>
          <div className="form-group row">
            <label htmlFor="exampleInputUsername2" name="rolename" className="col-sm-2 col-form-label">Add Role</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" name="leaveType" onChange={(e)=>setrolename(e.target.value)} />
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
