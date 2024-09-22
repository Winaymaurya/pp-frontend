import React,{useState,useEffect} from 'react';
import { NavLink,Link } from 'react-router-dom';
import { RiMenu2Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';
const LandingNav = () => {
  const [open, setOpen] = useState(false)

  useEffect(()=>{
  AOS.init();
  },[])
  return (
    <>
   
    <div className='flex justify-between px-2 p-[10px] tracking-wide text-md  font-montserrat font-light bg-gray-800 text-white sticky top-0 z-50 w-[100%]'>
      <div className=" tracking-widest  text-xl">
        <Link to={'/'}>
        PrePlace.</Link>
        </div>
      <div className="justify-between w-[50%] mr-10 hidden md:flex   ">
  
        <div className="">
          <NavLink to='/Login' className={({ isActive }) =>
            isActive ? 'border-t-2 border-white-500 p-1' : 'text-white p-1'
          }>Login</NavLink>
        </div>
         <div className="">
          <NavLink to='/register' className={({ isActive }) =>
            isActive ? 'border-t-2 border-white-500 p-1' : 'text-white p-1'
          }>Register</NavLink>
        </div>
             <div className="bg-white text-black font-medium rounded-lg ">
          <NavLink to='/employerRegister' className={({ isActive }) =>
            isActive ? ' p-1' : ' p-1'
          }>Are you a Employer?</NavLink>
        </div>
      </div>
      <div className="md:hidden">
      {open?
     <div className=" text-xl cursor-pointer" onClick={()=>setOpen(false)}>
     <IoCloseSharp />
     </div>
     : 
        <div className=" text-xl cursor-pointer" onClick={()=>setOpen(true)}>
      <RiMenu2Line />
      </div>
      }
      </div>
      </div>
      {open
      ?
      <div
      className="sticky top-10 md:top-14 w-full flex flex-col items-center justify-between h-48 px-2 p-4 tracking-wide text-md text-white font-montserrat font-light bg-gray-800 z-20 md:hidden"
      data-aos="fade-down"
      data-aos-duration="300"
    >
        
        <div className="">
          <NavLink to='/login' className={({ isActive }) =>
            isActive ? 'border-t-2 border-white-500 p-1' : 'text-white p-1'
          }>Login</NavLink>
        </div>
        <div className="">
          <NavLink to='/register' className={({ isActive }) =>
            isActive ? 'border-t-2 border-white-500 p-1' : 'text-white p-1'
          }>Register</NavLink>
        </div>
        <div className="">
          <NavLink to='/employerRegister' className={({ isActive }) =>
            isActive ? 'border-t-2 border-white-500 p-1' : 'text-white p-1'
          }>Employer Register</NavLink>
        </div>
      </div>
      :
      ''
      }

    
    </>
  );
};

export default LandingNav;
