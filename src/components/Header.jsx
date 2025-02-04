import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex justify-between px-8 py-4 bg-purple-600 text-white mb-4'>
      <h1>React Meetups</h1>
      <div className='flex gap-4'>
      <Link to="/">All Meetups</Link>
      <Link to="/add">Add Meetup</Link>
      <Link to="/favorite">Favorite Meetups</Link>
      </div>
    </div>
  )
}

export default Header
