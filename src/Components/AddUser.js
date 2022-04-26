import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const AddUser = () => {
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [UserName, setUserName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [Gender, setGender] = useState('')
  const [MobileNumber, setMobileNumber] = useState('')
  const [dob, setdateofbirth] = useState('')
  const [Role, setRole] = useState('')
  const [Salary, setSalary] = useState('')
  const [Address, setAddress] = useState('')
  const [Country, setCountry] = useState('')
  const [roleList, setroleList] = useState([])


  const submit =(e)=>{
    e.preventDefault()
    alert("Data saved")
    console.log("ii",e.target.value)
  
    var data = {
      firstName :FirstName,
      lastName:LastName,
      userName:UserName,
        email :Email,
        gender:Gender,
        mobileNo:MobileNumber,
        dateOfBirth:dob,
        address:Address,
        role:Role,
        salary:Salary,
        country:Country,
        password:Password,
                
    }
    axios.post('http://localhost:2000/users',data).then(res=>{
        console.log(res.data)
    })
}
      var navigate = useNavigate()
    var auth = localStorage.getItem('email')
//   useEffect(() => {
//     {
//         if (!auth) {
//             navigate('/login')
//         }
//     }
// }, [])
const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);
  
    const handleImageUpload = e => {
      const [file] = e.target.files;
      if (file) {
        const reader = new FileReader();
        const { current } = uploadedImage;
        current.file = file;
        reader.onload = e => {
          current.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };
    const getroles = () => {
      axios.get('http://localhost:2000/roles').then(res=>{
          console.log(res.data.data)
          setroleList(res.data.data)
      }).catch(err=>{
          console.log(err)
      })
  }
  useEffect(() => {
    getroles()
  },[])

  return (
    <div className='content-wrapper'>
    <div className='row'>
    <div class="col-lg-12 stretch-card">
    <div className="col-12 grid-margin">
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Add User Details</h4>
      <form className="form-sample" onSubmit={submit}>
        <p className="card-description">
          Personal info
        </p>
        <div
    style={{
      display: "flex",
      flexDirection: "column",
      // alignItems: "center",
      // justifyContent: "center"
    }}
  >
    <input
      type="file"
      accept="image/*"
      onChange={handleImageUpload}
      ref={imageUploader}
      style={{
        display: "none"
      }}
    />
    <div
      style={{
        height: "120px",
        width: "120px",
        border: "1px dashed black"
      }}
      onClick={() => imageUploader.current.click()}
    >
      <img
        ref={uploadedImage}
        style={{
          width: "120px",
          height: "120px",
          position: "absolute"
        }}
      />
    </div>
    Click to upload Image
  </div>
        <div className="row">
          <div className="col-md-6  ">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">User Name</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="userName" onChange={(e)=>setUserName(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Email</label>
              <div className="col-sm-9">
                <input type="email" className="form-control" name="email" onChange={(e)=>setEmail(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mobile Number</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="mobileNo" onChange={(e)=>setMobileNumber(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Password</label>
              <div className="col-sm-9">
                <input type="password" className="form-control" name="password" onChange={(e)=>setPassword(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">First Name</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="firstName" onChange={(e)=>setFirstName(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Last Name</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="lastName" onChange={(e)=>setLastName(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label" name="gender">Gender</label>
              <div className="col-sm-9">
                <select className="form-control" name="gender" onChange={(e)=>setGender(e.target.value)}>
                <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label" name="dob">Date of Birth</label>
              <div className="col-sm-9">
                <input type="date" className="form-control" name="dob" onChange={(e)=>setdateofbirth(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Role</label>
              <div className="col-sm-9">
                <select className="form-select" name="role" onChange={(e)=>setRole(e.target.value)}>
                   { 
                     roleList.map((role)=>{
                         return (
                         <option value={role._id} key={role._id}>{role.roleName}</option>
                           )
                      })
                   }   
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Salary</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="salary" onChange={(e)=>setSalary(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
       
        <p className="card-description">
          Address
        </p>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Address </label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="address" onChange={(e)=>setAddress(e.target.value)}/>
              </div>
            </div>
          </div>
          </div>
       
        <div className="row">
         
          <div className="col-md-6">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Country</label>
              <div className="col-sm-9">
                <select className="form-select" name="country"  onChange={(e)=>setCountry(e.target.value)}>
                <option value="">Select</option>
                  <option value="India">India</option>
                  <option value="Italy" >Italy</option>
                  <option value="Russia">Russia</option>
                  <option value="Britian">Britain</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div>
  {/* <button className='button2'  type='submit'>Submit</button> */}
    <button type="submit" class="btn btn-primary btn-icon-text">
                          
                          Submit
                        </button>
</div>
      </form>
    </div>
  </div>
  </div>
  </div>
  </div>
  
</div>

  )
}
