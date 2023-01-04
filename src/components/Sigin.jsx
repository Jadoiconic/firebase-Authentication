import React from 'react'
import { Link } from 'react-router-dom'

export const Sigin = () => {
  return (
    <div className='h-screen bg-gradient-to-r py-10 from-blue-500 to-purple-700'>
      <div className='max-w-[700px] mx-auto py-16 p-4 rounded bg-white'>
        <div>
        <h1 className='text-2xl font-bold py-2'>Sign In to your Account</h1>
        <p className='py-2'>
          Don't have an Account yet? <Link className='underline font-semibold' to='/signup'>Sign Up</Link>
        </p>
        </div>
        <form className='px-4'>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium' htmlFor="email">Email Address</label>
            <input className='border p-3 outline-none' type="email" />
          </div>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium' htmlFor="password">Password</label>
            <input className='border p-3 outline-none' type="password" />
          </div>
          <button
          className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 text-white'>Sign In</button>
        </form>
      </div>
    </div>
  )
}
