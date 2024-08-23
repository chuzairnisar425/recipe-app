import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className='flex justify-between bg-white  lg:px-5 md:px-4 py-3 '>
<Link to='/' className='TITLE-TEXT text-lg text-red-600 font-bold'>HomeChef</Link>
<div className='flex gap-3 '>
    <Link to='/About'>About</Link>
    <Link to='/Login'>Login</Link>
</div>
    </nav>
  )
}

export default Navbar