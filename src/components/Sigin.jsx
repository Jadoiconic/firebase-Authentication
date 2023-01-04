import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthCintext'



export const Sigin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { login } = UserAuth()
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const userLog = login(email, password)
      if(userLog){
        navigate('/account')
      } else{
        setError('Loading')
      }
    } catch (e) {
      setError(e.message)
      console.log(error)
    }
  }
  return (
    <div className='h-screen bg-gradient-to-r py-10 from-blue-500 to-purple-700'>
      <div className='max-w-[700px] mx-auto py-16 p-4 rounded bg-white'>
        <div>
          <h1 className='text-2xl font-bold py-2'>Sign In to your Account {error && error}</h1>
          <p className='py-2'>
            Don't have an Account yet? <Link className='underline font-semibold' to='/signup'>Sign Up</Link>
          </p>
        </div>
        <form className='px-4' onSubmit={handleSubmit}>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium' htmlFor="email">Email Address</label>
            <input onChange={(e) => setEmail(e.target.value)} className='border p-3 outline-none' type="email" />
          </div>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium' htmlFor="password">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} className='border p-3 outline-none' type="password" />
          </div>
          <button
            className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 text-white'>Sign In</button>
        </form>
      </div>
    </div>
  )
}
