import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'


export const ForgetPassButton = () => {
    
        const [email, setemail] = useState('')
        var navigate = useNavigate()
    
        const resetPasswordLink = (e) => {
            e.preventDefault();
            var data = {
                email: email
            }
            axios.post('http://localhost:2000/forgotPassword', data).then(res => {
                console.log(res.data.data)
                toast.info("LInk Send", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: 0,
                });
                if(res.data.data!=null){
                    navigate('/login')
                }
                
            }).catch(err => {
                console.log(err)
            })
        }
  return (
    <div className="row w-100 mx-0">
        <div className="col-lg-4 mx-auto">
          <div className="auth-form-light text-left py-5 px-4 px-sm-5"> 
            <div className="brand-logo">
              <img src="../../images/hr2.jfif" alt="logo" />
            </div>
            <h4>Enter your Email to get the Link</h4>
            
            <form className="pt-3" onSubmit={resetPasswordLink}>
              <div className="form-group">
                <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email"  onChange={(e) => { setemail(e.target.value) }} />
              </div>
             
              <button type="submit" class="btn btn-primary">Send Email</button>
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
  )
}
