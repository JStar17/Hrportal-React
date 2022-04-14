import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





export const Login = () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    var navigate = useNavigate();

    const login = async (e) => {

        e.preventDefault();
        //api -- > response --> localstorage..
        
            var data = {
                email: email,
                password: password
            }
        
        await axios.post('http://localhost:2000/login', data).then((res) => {


            if (res.data.status = 200 ) {

                localStorage.setItem('email', res.data.data.email)
                localStorage.setItem('firstName', res.data.data.firstName)
                localStorage.setItem('role', res.data.data.role.roleName)
                toast(res.data.msg)
                
                setTimeout(() => {
                    navigate('/')
                }, 2000);

            }
            
            else {
              toast(res.data.msg)
              console.log(res.data.msg)
                setTimeout(() => {

                    navigate('/login')
                }, 2000);

                
            }

        })

    }
  return (
  //   <div className="container-scroller">
  // <div className="container-fluid page-body-wrapper full-page-wrapper">
  //   <div className="content-wrapper d-flex align-items-center auth px-15">
      <div className="row w-100 mx-0">
        <div className="col-lg-4 mx-auto">
          <div className="auth-form-light text-left py-5 px-4 px-sm-5"> 
            <div className="brand-logo">
              <img src="../../images/hr2.jfif" alt="logo" />
            </div>
            <h4>Hello! let's get started</h4>
            <h6 className="font-weight-light">Sign in to continue.</h6>
            <form className="pt-3" onSubmit={login}>
              <div className="form-group">
                <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email"  onChange={(e) => { setemail(e.target.value) }} />
              </div>
              <div className="form-group">
                <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password"  onChange={(e) => { setpassword(e.target.value) }}/>
              </div>
              {/* <div className="mt-3">
                <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="../../index.html">SIGN IN</a>
              </div> */}
              <button type="submit" class="btn btn-primary">Login</button>
              <ToastContainer
                    position="top-right"
                    autoClose={1800}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
              <div className="my-2 d-flex justify-content-between align-items-center">
                <div className="form-check">
                  <label className="form-check-label text-muted">
                    <input type="checkbox" className="form-check-input" />
                    Keep me signed in
                  </label>
                </div>
                {/* <a href="#" className="auth-link text-black">Forgot password?</a> */}
                <Link to="/forgotPassword" className="text-body">Forgot password?</Link>
              </div>
              
              <div className="text-center mt-4 font-weight-light">
                Don't have an account? <Link to="/adduser" className="text-primary">Create</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      // </div>
      // </div>
      // </div>

 
   
  )
}
