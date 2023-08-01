import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found'>
      <p>Sorry</p>
      <p>The page you are trying to reach is not found</p>
      <NavLink to={'/'}>
      <p>Back to home page...</p>
      </NavLink>
    </div>
  )
}

export default NotFound
