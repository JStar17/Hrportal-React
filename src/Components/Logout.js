import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Logout = () => {
 
  var navigate = useNavigate();
  setTimeout(() => {
    navigate('/')
}, 1500);

        toast.success('Logout Completed')
        
  
        localStorage.clear()

  return (
    <div>
   
                
     {/* <ToastContainer
                    position="top-right"
                    autoClose={1500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                /> */}
                 <ToastContainer
                    
                    position="bottom-right"
				          	autoClose={5000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick={true}
                    rtl={false}
                    pauseOnHover={true}
                    draggable={true}
                    progress={0}
                  
				
                /> 


    </div>
  )
}
