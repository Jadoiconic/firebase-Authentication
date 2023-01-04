import { async } from '@firebase/util'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthCintext'

export const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const { createUser } = UserAuth()
    const handleSubmit = async(e) =>{
        e.preventDefault()
        setError('')
        try {
            await createUser(email,password)
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }

    }
  return (
    <div className='h-screen bg-gradient-to-r py-10 from-blue-500 to-purple-700'>
    <div className='max-w-[700px] mx-auto py-16 p-4 rounded bg-white'>
      <div>
      <h1 className='text-2xl font-bold py-2'>Create New Account</h1>
      <p className='py-2'>
        Already have an Account yet? <Link className='underline font-semibold' to='/'>Sign In</Link>
      </p>
      </div>
      <form className='px-4' onSubmit={handleSubmit}>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium' htmlFor="email">Email Address</label>
          <input className='border p-3 outline-none' onChange={(e)=> setEmail(e.target.value)} value={email} type="email" />
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium' htmlFor="password">Password</label>
          <input className='border p-3 outline-none' onChange={e=>setPassword(e.target.value)} type="password" />
        </div>
        <button
        className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 text-white'>Sign Up</button>
      </form>
    </div>
  </div>
  )
}
