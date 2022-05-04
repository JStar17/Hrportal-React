import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

export const Login1 = () => {
	const [email, setemail] = useState('')
	const [password, setpassword] = useState('')
	var navigate = useNavigate();

	const login = async (e) => {
		e.preventDefault();
		var data = {
			email: email,
			password: password
		}
		await axios.post('http://localhost:2000/login', data).then(res => {
			console.log(res.data)
			if (res.data.status == 200) {
				localStorage.setItem('userId',res.data.data._id)
				localStorage.setItem('email',res.data.data.email);
				localStorage.setItem('role',res.data.data.role.roleName);
				localStorage.setItem('firstName',res.data.data.firstName)
				localStorage.setItem('lastName',res.data.data.lastName)
				localStorage.setItem('isLoggedIn',true)
				toast.success(res.data.msg, {
					position: "bottom-right",
					autoClose: 5000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: 0,
				});
				setTimeout(() => {
					navigate('/')
				}, 1000);
			}
			else{
				toast.error(res.data.msg, {
					position: "bottom-right",
					autoClose: 5000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: 0,
				});
				setTimeout(() => {
					navigate('/login')
				}, 2000);
			}
		})
	}
	return (
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
                    autoClose={1500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
              <div className="my-2 d-flex justify-content-between align-items-center">
                
                {/* <a href="#" className="auth-link text-black">Forgot password?</a> */}
                <Link to="/passreset" className="text-body">Forgot password?</Link>
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
