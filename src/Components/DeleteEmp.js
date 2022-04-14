import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router'

export const DeleteEmp = () => {
    var userId = useParams().userId;
    console.log(userId)
    
    const delete1 = ()=>{
        {
            axios.delete(`http://localhost:2000/users/${userId}`).then(res=>{
                alert("Data deleted...")
                //get ....
            })
        }

    }
    useEffect(() => {
      
        delete1()
      return () => {
        
      }
    }, )
    

  return (
    <div>

    

    </div>

  )
}