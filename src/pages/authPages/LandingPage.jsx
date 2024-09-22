import React, { useEffect } from 'react'
import AnimatedText from '../../components/AnimatedText'
import { ReactTyped } from 'react-typed'
import { motion, useAnimationControls } from 'framer-motion'
import { Link } from 'react-router-dom'
import AOS from 'aos'
const LandingPage = () => {
    const flipControls=useAnimationControls()
    const handelClick=()=>{
        flipControls.start("flip")
    }
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
            <div className="flex justify-between md:mx-20 my-10 mx-4 items-center h-[78vh] ">
                <motion.div className="w-[45%] h-[70%] overflow-hidden"
                    data-aos="fade-down"
                    data-aos-duration="800"
                    initial={{scale:0}}
                    animate={{scale:1.05}}>
                    <img src="https://img.freepik.com/free-vector/flat-illustrated-about-me-concept_52683-58522.jpg?semt=ais_hybrid" alt="" />
                </motion.div>

                <div className=" w-[50%] font-montserrat h-[70%] flex flex-col  py-6 justify-between"
                    data-aos="fade-up"
                    data-aos-duration="800"
                   >
                    <div className="text-lg">Welcome To,</div>
                    <div className=" text-[40px] md:text-[50px] text-blue-800">
                        <AnimatedText text="PrePlace." />
                    </div>
                    <div className="text-[15px] md:text-[20px]">Where you can <span className='text-blue-800 text-[20px] md:text-[25px]'>
                        <ReactTyped
                        strings={["Create Profile", "Connect to Peoples", "Get Job Opportunities"]}
                        typeSpeed={60}
                        loop
                        backSpeed={40}
                        showCursor={true}
                    /></span>
                    </div>
                    <div className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis libero voluptatibus ex, similique esse atque placeat, magnam facilis blanditiis voluptate at quod dolorem. Ex veritatis reiciendis, eum repellat fugiat aliquam!
                    </div>
                    <div className="">
                        <motion.button className='bg-gray-700 text-white p-2 rounded-xl w-40'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ rotate: "4deg", scale: 0.95 }}
                            onClick={handelClick}
                        > <Link to={'/register'}>  Join now</Link> </motion.button>
                    
                    </div>
                </div>
            </div>
      <motion.div className="h-[100vh] w-full bg-blue-800 absolute top-0 left-0  "
      variants={{
        initial:{
          x:-1300,
          opacity:.8,
          
        },  
        flip:{
         x:0,
        opacity:0
        }
      }}
      initial="initial"
      animate={flipControls}
      transition={{
        duration:1
      }}
      ></motion.div>

         <div className=" h-[84vh] md:mx-20 my-10 mx-4 ">

            <div className="text-[40px] font-montserrat text-center w-full">What We Do ?</div>
            <div className="flex justify-center items-center h-full">
            <div className="w-[50%] mr-10 font-montserrat ">
                <div className="text-2xl mb-4">We Help Users To Create <span className="line-through text-3xl">Resume</span>  cum Portfolio - <span className='text-blue-800 text-[33px] font-medium'>ReFolio</span></div>
                <div className=""> <span className="text-2xl text-blue-700">
                     <ReactTyped
                        strings={["ShowCase Your Skills", "Be Part of Communities", "Get Job Opportunities"]}
                        typeSpeed={60}
                        loop
                        backSpeed={40}
                        showCursor={true}
                    /></span>
                    </div>
                    <div className="text-xl mt-2">Share it with the world with just on Click !</div>
                    <div className="text-xl mt-2">Choose your ReFolio from multiple templates .</div>
                           
                    <div className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illum quia nesciunt ut tenetur suscipit beatae delectus ullam vel, pariatur earum exercitationem nulla deleniti sapiente deserunt iusto totam dolorum error.</div>
                    <div className="">
                        <motion.button className='bg-gray-700 text-white p-2 rounded-xl w-40 mt-2'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ rotate: "4deg", scale: 0.95 }}
                            // onClick={handelClick}
                        > <Link to={'/register'}> Explore now</Link>  </motion.button>
                    
                    </div>
            </div>
            <div className="w-[40%]">
            <motion.div className="w-[100%] h-[70%] overflow-hidden "
                    data-aos="fade-down"
                    data-aos-duration="800"
                    initial={{scale:0}}
                    animate={{scale:1.05}}>
                    <img src="https://img.freepik.com/free-vector/company-employees-sharing-thoughts-ideas_74855-5469.jpg?t=st=1726148387~exp=1726151987~hmac=dc3d46ea677ea72114c08373f4351baab1ee4611af4a9114af8871633f4e33fd&w=900" alt="" />
                </motion.div>

            </div>
         </div>
         </div>
        </>
    )
}

export default LandingPage
