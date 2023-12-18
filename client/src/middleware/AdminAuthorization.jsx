import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAccessToken } from '../utils/token';

function AdminAuthorization({children}) {
    const navigate=useNavigate();
    useEffect(()=>{
      const accessToken = getAccessToken();
      if(!accessToken){
        navigate('/');
      }
      return
    })
  return (
    <div>{children}</div>
  )
}

export default AdminAuthorization