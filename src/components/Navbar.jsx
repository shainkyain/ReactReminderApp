import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-12   flex items-center justify-between px-10'> 
            <div className=''>
             <h1 className='font-semibold text-lg'> <Link to={'/'}> Reminder </Link></h1>
            </div>
            <div className=''>
                <ul className='flex justify-between items-center gap-4'>
                <li className='font-semibold lg:text-white lg:text-2xl text-lg'> <Link to={'/add'}>Create-Reminder</Link></li>
                {/* <li className='font-semibold lg:text-white text-lg weight'>help</li> */}
                </ul>
            </div>
    </div>
  )
}

export default Navbar