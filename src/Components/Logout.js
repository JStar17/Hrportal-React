import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Logout = () => {
 
     
        toast('Logout Completed')
  
        localStorage.clear()

  return (
    <div>
   
                
     <ToastContainer
                    position="top-right"
                    autoClose={100}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />


    </div>
  )
}
