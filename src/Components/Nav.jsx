import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <div className="nav w-screen bg-gray-600 h-10 flex justify-between items-center">
          <div className="brand">
          <h1 className='font-bold text-white text-2xl' >Srajal</h1>
          </div>
          <div className="links flex">
               <ul className=' flex gap-4'>
                    <li><Link to='/' className="text-white text-xl" >Home</Link></li>
                    <li><Link to='/about' className="text-white text-xl" >About</Link></li>
                    <li><Link to='/' className="text-white text-xl" >Home</Link></li>

               </ul>
               </div>
      </div>
    </>
  )
}

export default Nav
