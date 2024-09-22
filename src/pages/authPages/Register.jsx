import React, { useEffect ,useState} from 'react'
import { IoMdLock } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import axios from 'axios';
const Register= () => {
const [email, setEmail] = useState('')
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [name, setName] = useState('')

const navigate=useNavigate()

 const handelRegister=async()=>{
      try {
        const {data}=await axios.post("http://localhost:8080/api/v1/register",{name,email,password,username})
        if(data?.success){
            alert(data?.message)
        }
        else{
            alert(data?.message)
        }
        navigate('/login')
      } catch (error) {
        console.log(error)
        
      }
 }

    useEffect(() => {
        AOS.init()
    }, [])
  return (
    <>
     <div className="min-h-[92.5vh] opacity-90 bg-[url(https://img.freepik.com/free-vector/white-abstract-background-3d-paper-style_23-2148403777.jpg?t=st=1726064188~exp=1726067788~hmac=433d9a86be0ea890788f28aa906a5b43ca007fb80a63671dce4d40275fcbe2df&w=996)] bg-cover bg-no-repeat bg-center" > 
                <div className="flex min-h-[85vh] flex-col items-center justify-center pt-4  sm:px-6 lg:px-8">
                    <div className="text-center sm:mx-auto sm:w-full sm:max-w-md">
                        <h1 className="text-2xl tracking-wider font-bold text-gray-900 font-montserrat">
                            Register
                        </h1>
                    </div>
            
                    <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md font-montserrat "
                    data-aos="zoom-in"
                    data-aos-duration="800">
                        <div className="border-2 border-gray-800 mx-2 px-4 pb-4 pt-8 rounded-xl sm:px-10 sm:pb-6 sm:shadow space-y-6">
                              <div>
                                    <label htmlFor="username" className="block text-sm font-medium ">Full Name </label>
                                    
                                        <input id="username" type="text" required className="block w-full appearance-none rounded-md border border-gray-500  text-[15px] p-1 sm:px-3 sm:py-2placeholder-gray-400 shadow-sm outline-none sm:text-sm" 
                                        placeholder='John Doe' value={name} onChange={(e)=>setName(e.target.value)}/>
                                    
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium ">Email address </label>
                                    
                                        <input id="email" type="email" required className="block w-full appearance-none rounded-md border border-gray-500  text-[15px] p-1 sm:px-3 sm:py-2placeholder-gray-400 shadow-sm outline-none sm:text-sm" 
                                        placeholder='john@gmail.com' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                    
                                </div>
                              
                                <div>
                                    <label htmlFor="username" className="block text-sm font-medium ">Username </label>
                                    
                                        <input id="username" type="text" required className="block w-full appearance-none rounded-md border border-gray-500  text-[15px] p-1 sm:px-3 sm:py-2 placeholder-gray-400 shadow-sm outline-none sm:text-sm" 
                                        placeholder='Johndoe123' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                                    
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium ">Password</label>
                               
                                        <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full appearance-none rounded-md border border-gray-500  text-[15px] p-1 sm:px-3 sm:py-2 placeholder-gray-400 shadow-sm sm:text-sm outline-none " placeholder='*******' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                                  
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:text-white dark:border-gray-600 dark:focus:ring-indigo-400 disabled:cursor-wait disabled:opacity-50" />
                                        <label htmlFor="remember_me" className="ml-2 block text-sm">Remember me</label>
                                    </div>
                                 
                                </div>
                                <div>
                                    <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-700 dark:border-transparent dark:hover:bg-indigo-600 dark:focus:ring-indigo-400 dark:focus:ring-offset-2 disabled:cursor-wait disabled:opacity-50"
                                    onClick={handelRegister}>
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                            <IoMdLock />
                                        </span>
                                       Register
                                    </button>
                                </div>
                           
                           
                            <div className="m-auto mt-6 w-fit md:mt-8">
                                <span className="m-auto">Already have an account?
                                    <Link className="font-semibold text-indigo-500 underline" to={'/login'}> Login Now</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Register
