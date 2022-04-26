import axios from 'axios' 
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export const GenerateSalary = () => {
  const [User, setUser] = useState([])
var userId = useParams().userId


const getData = () => {
  axios.get(`http://localhost:2000/users/${userId}`).then(res=>{

      console.log(res.data.data)
      setUser(res.data.data)
  })

}

useEffect(() => {
  getData()
}, [])
  return( 
    <div className='content-wrapper'>
    <div className='row'>
    <div class="col-lg-12 stretch-card">
    <div className="col-md-12 grid-margin stretch-card">
    <div className="card">
      <div className="card-body">
        
        <p className="card-description">
          </p>
<div className="container mt-5 mb-5">
  <div className="row">
    <div className="col-md-12">
      <div className="text-center lh-1 mb-2">
      
        <h3 className="fw-bold">Payslip</h3> <div><span >Payment slip for the month of June 2021</span> </div>
       
      </div>
      <div className="d-flex justify-content-end">  </div>
      <div className="row">
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-6">
              <div> <span className="fw-bolder">EMP Code</span> <small className="ms-3">{User._id}</small> </div>
            </div>
          
          </div>
          <div className="row">

            <div className="col-md-6">
              <div> <span className="fw-bolder">EMP Name</span> <small className="ms-3">{User.firstName}</small> </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div> <span className="fw-bolder">PF No.</span> <small className="ms-3">101523065714</small> </div>
            </div>
            
          </div>
          <div className="row">
            
            <div className="col-md-6">
              <div> <span className="fw-bolder">Mode of Pay</span> <small className="ms-3">SBI</small> </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div> <span className="fw-bolder">Designation</span> <small className="ms-3">{User.role.roleName}</small> </div>
            </div>
           
          </div>
          <div className="row">
            
            <div className="col-md-6">
              <div> <span className="fw-bolder">Ac No.</span> <small className="ms-3">*******0701</small> </div>
            </div>
          </div>
        </div>
        <table className="mt-4 table table-bordered">
          <thead className="bg-dark text-white">
            <tr>
              <th scope="col">Earnings</th>
              <th scope="col">Amount</th>
              <th scope="col">Deductions</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Basic</th>
              <td>16250.00</td>
              <td>PF</td>
              <td>1800.00</td>
            </tr>
            <tr>
              <th scope="row">DA</th>
              <td>550.00</td>
              <td>ESI</td>
              <td>142.00</td>
            </tr>
            <tr>
              <th scope="row">HRA</th>
              <td>1650.00 </td>
              <td>TDS</td>
              <td>0.00</td>
            </tr>
            <tr>
              <th scope="row">WA</th>
              <td>120.00 </td>
              <td>LOP</td>
              <td>0.00</td>
            </tr>
            <tr>
              <th scope="row">CA</th>
              <td>0.00 </td>
              <td>PT</td>
              <td>0.00</td>
            </tr>
            <tr>
              <th scope="row">CCA</th>
              <td>0.00 </td>
              <td>SPL. Deduction</td>
              <td>500.00</td>
            </tr>
            <tr>
              <th scope="row">MA</th>
              <td>3000.00</td>
              <td>EWF</td>
              <td>0.00</td>
            </tr>
            <tr>
              <th scope="row">Sales Incentive</th>
              <td>0.00</td>
              <td>CD</td>
              <td>0.00</td>
            </tr>
            <tr>
              <th scope="row">Leave Encashment</th>
              <td>0.00</td>
              <td colSpan={2} />
            </tr>
            <tr>
              <th scope="row">Holiday Wages</th>
              <td>500.00</td>
              <td colSpan={2} />
            </tr>
            <tr>
              <th scope="row">Special Allowance</th>
              <td>100.00</td>
              <td colSpan={2} />
            </tr>
            <tr>
              <th scope="row">Bonus</th>
              <td>1400.00</td>
              <td colSpan={2} />
            </tr>
            <tr>
              <th scope="row">Individual Incentive</th>
              <td>2400.00</td>
              <td colSpan={2} />
            </tr>
            <tr className="border-top">
              <th scope="row">Total Earning</th>
              <td>25970.00</td>
              <td>Total Deductions</td>
              <td>2442.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="col-md-4"> <br /> <span className="fw-bold">Net Pay : 24528.00</span> </div>
       
      </div>
      <div className='center' >
      <button  type="button"  class="btn btn-info btn-icon-text">
                          Print
                          <i class="ti-printer btn-icon-append"></i>                                                                              
                        </button>
                        </div>
      <div className="d-flex justify-content-end">
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


  )
}
