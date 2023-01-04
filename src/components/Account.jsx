import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthCintext'

export const Account = () => {
  const { user, logout } = UserAuth()
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className='bg-zinc-200 h-[600px]'>
      <div className=' flex justify-between px-10 shadow'>
        <h1 className='text-2xl font-bold py-2'>Welcome {user && user.email}</h1>
        <button className='p-1 underline' onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}
