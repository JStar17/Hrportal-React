import React, { useState } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'


export const ForgetPassword = () => {
    
        const [password, setpassword] = useState('')
        const [email, setemail] = useState('')
    
        const resetPassword = (e) => {
            e.preventDefault();
            var data = {
                password: password,
                email: email
            }
            axios.post('http://localhost:2000/reset', data).then(res => {
                console.log(res.data)
                toast.info(res.data.msg, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: 0,
                });
            }).then(err => {
                console.log(err)
            })
        }
    
  return (
    // <div className="container-scroller">
    // <div className="container-fluid page-body-wrapper full-page-wrapper">
    //   <div className="content-wrapper d-flex align-items-center auth px-15">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5"> 
              <div className="brand-logo">
                <img src="../../images/hr2.jfif" alt="logo" />
              </div>
              <h4>Reset Password</h4>
              {/* <h6 className="font-weight-light">Sign in to continue.</h6> */}
              <form className="pt-3" onSubmit={resetPassword}>
                <div className="form-group">
                
                  <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email"  onChange={(e) => { setemail(e.target.value) }} />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="New Password"  onChange={(e) => { setpassword(e.target.value) }}/>
                </div>
                {/* <div className="mt-3">
                  <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="../../index.html">SIGN IN</a>
                </div> */}
                <button type="submit" class="btn btn-primary">Reset Password</button>
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
               
                
              
              </form>
            </div>
          </div>
        </div>
        // </div>
        // </div>
        // </div>
  
   
     
  )
}
