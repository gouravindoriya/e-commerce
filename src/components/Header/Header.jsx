import React from 'react'
import { CiMenuFries } from "react-icons/ci";
const Header = () => {
  

  return (
    <div className='text-2xl text-red-800 p-4 flex justify-between bg-slate-200'>
      <div className="text-purple-900">logo</div>

      <CiMenuFries />
    </div>
  )
}

export default Header
