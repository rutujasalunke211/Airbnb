import React from 'react'
import logo from '../assets/logo.png'
import { FaSearch } from "react-icons/fa";

function Nav  () {
  return (
    <div>
      <div className='w-[100vw] min-h-[80px]  border-b-[1px] border-[#dcdcdc] px-[40px]'>
        <div><img src={logo} alt='' className='w-[130px]'/></div>
      </div>
      <div>
        <input type="text" />
        <button><FaSearch /></button>
      </div>
    </div>
  )
}

export default Nav
