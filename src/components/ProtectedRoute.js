import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthCintext'

const ProtectedRoute = ({Children}) => {
    const { user } = UserAuth()
 if(!user){
    return <Navigate to='/' />
 }
 return Children;
}

export default ProtectedRoute