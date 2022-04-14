import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router'

export const DeleteCele = () => {
    var celebrationId = useParams().celebrationId;
    console.log(celebrationId)
    
    const delete1 = ()=>{
        {
            axios.delete(`http://localhost:2000/celebration/${celebrationId}`).then(res=>{
              console.log(res.data.data)
                // alert("Data deleted...")
                //get ....
            })
        }

    }
    useEffect(() => {
      
        delete1()
      return () => {
        
      }
    },'' )
    

  return (
    <div>

    

    </div>

  )
}