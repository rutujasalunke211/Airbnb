import React, {useState} from 'react'
import { FaEye } from "react-icons/fa6";
import { IoEyeOff } from "react-icons/io5";

const Login = () => {
    let[show,setShow] = useState(false)
  return (
    <div>
      <div className='w-[100vw] h-[100vh] flex items-center
            justify-center'>
              <form action="" className='max-w-[900px] w-[90%] h-[600px]
              flex items-center justify-center  flex-col
              md:items-start gap-[10px]'>
                <h1 className='text-[30px] text-[black]'>Welcome to Airbnb</h1>
                <div className='w-[90%] flex items-start justify-start flex-col gap-[10px] mt-[30px]'>
                <label htmlfor="name" className='text-[20px]'>UserName</label>
                <input type="text" id='name'className='w-[90%] h-[40px] border-[2px] border-[gray] rounded-lg text-[18px] px-[20px]' />
                </div>
                <div className='w-[90%] flex items-start justify-start flex-col gap-[10px]'>
                <label htmlfor="email"  className='text-[20px]'>Email</label>
                <input type="text" id='Email' className='w-[90%] h-[40px] border-[2px] border-[gray] rounded-lg text-[18px] px-[20px]'/>
                </div>
                <div className='w-[90%] flex items-start justify-start flex-col gap-[10px] relative'>
                <label htmlfor="password" className='text-[20px]'>Password</label>
                <input type={show?"text":"password"} id='password' className='w-[90%] h-[40px] border-[2px] border-[gray] rounded-lg text-[18px] px-[20px]'/>
                {!show && <FaEye className='w-[22px] h-[22px] absolute right-[12%] bottom-[10px] cursor-pointer' 
                onClick={()=>setShow(prev =>!prev)}/>}
                {show && <IoEyeOff className='w-[22px] h-[22px] absolute right-[12%] bottom-[10px] cursor-pointer'
                onClick={()=>setShow(prev =>!prev)}/>}
                </div>
                <button className='px-[50px] py-[10px] bg-[red] text-[white] text-[18px] md:px-[100px] rounded-lg'>SignUp</button>
              </form>
           
          </div>
    </div>
  )
}

export default Login
