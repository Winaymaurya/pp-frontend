import React, { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";
import { IoSchool } from "react-icons/io5";
import { FaInstagram, FaShoppingBag } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillEdit } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io"
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const Profile = () => {
  const skillData = ['HTML', 'CSS', 'JS', "React JS", 'Node JS', 'Github', 'HTML', 'CSS', 'JS', "React JS", 'Node JS', 'Github', 'HTML', 'CSS', 'JS']

  const projectData = [{ name: 'Blood Bank', desc: "UGSrfiuar fgafh asgu  ufsgfg  sduh ", tech: ['React', "Node"], link: "vinashdf", duration: '2 months', img: "https://img.freepik.com/free-vector/business-team-brainstorming-discussing-startup-project_74855-6909.jpg?t=st=1726237010~exp=1726240610~hmac=0bff0814ae9133ea34d0a11ed45df6cd7cb87b3760286b04525f13838c7bb45d&w=996" }
    , { name: 'Blood Bank 2', desc: "UGSrfiuar fgafh asgu  ufsgfg  sduh ", tech: ['React', "Js", "Xml"], link: "vinashdf", duration: '2 months', img: "https://img.freepik.com/free-vector/business-team-brainstorming-discussing-startup-project_74855-6909.jpg?t=st=1726237010~exp=1726240610~hmac=0bff0814ae9133ea34d0a11ed45df6cd7cb87b3760286b04525f13838c7bb45d&w=996" }]

  const educationData = [{ name: "HighSchool", institute: "MJRP academy", duration: "2017-2019", grade: "90%" }, { name: "Intermediate", institute: "MJRP academy", duration: "2019-2021", grade: "90%" }, { name: "Graduation", institute: "Lucknow University", duration: "2021-2024", grade: "80%" }]

  const experienceData = [{ name: "Full Time", institute: "Goggle", duration: "2017-2019", position: "Software Developer" }, { name: "Internship", institute: "Microsoft", duration: "2016-2017", position: "SDE" }]



  const mainAnimation = {
    initial: {
      scale: 0.1,
      opacity: 0
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "anticipate",
        type: "spring",
      }
    }
  }

  const fadeIdAnimation = {
    initial: {
      opacity: 0,
      y: 60
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.08 * index
      },
    })
  }

  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false)
  const [profileEdit, setProfileEdit] = useState(false)


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {

    setTimeout(() => (
      setLoading(false)
    ), 1500)

  }, [])

  return (
    <>
      {loading ?

        <div className="h-[100vh] md:mx-10 my-4 mx-4  overflow-auto ">

          <motion.div className='h-40 w-40 rounded-xl bg-blue-700'
            animate={{ rotate: 360 }}
            transition={{ type: "spring", duration: 5, bounce: 0.6 }}>

          </motion.div>
        </div>
        :
        <div className="  md:mx-10 my-4 mx-4  ">
          <div className="absolute right-12"> <AiFillEdit size={26} onClick={handleClickOpen} /></div>
          <div className="flex h-[40vh] justify-between items-center  p-2 overflow-hidden">
            <motion.div className="w-[20%]  flex justify-center items-center overflow-hidden"
              initial={{ x: 40, opacity: 0, rotate: "15deg" }}
              animate={{ x: 0, opacity: 1, rotate: "0deg" }}
              transition={{ duration: .5, ease: "circOut", }}
            >
              <img src="https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?t=st=1726151155~exp=1726154755~hmac=872d3a76c86c0c6aaf752ca40cececa104920ec6f4ee33b04ded114123554b10&w=740" alt="Profile Pic" className='rounded-full object-cover' />
            </motion.div>
            <motion.div className="w-[78%] flex flex-col justify-between min-h-[80%]"
              variants={mainAnimation}
              initial="initial"
              animate="animate"
            >
              <div className=" flex items-end">
                <div className="text-3xl font-montserrat font-medium mr-5"> Vinay Kumar Maurya</div>
                <div className="text-xl font-montserrat font-medium"> (MERN Stack Developer)</div>
              </div>
              <div className="font-sans tracking-wide text-justify">
                I am a Tech Enthusiast and working with MERN stack development (frontend + backend) . I am looking for Developer role Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique magni facilis molestiae veritatis nihil debitis incidunt harum?
              </div>
              <div className="flex justify-between space-x-2 font-montserrat text-md">
                <div className="flex items-center "><MdOutlineMail size={20} /> vinaymaurya@gmail.com</div>
                <div className="flex items-center "><MdOutlinePhoneInTalk size={20} /> 890441-8934</div>
                <div className="flex items-center "><IoIosGlobe size={20} /> github.com/winaymaurya</div>

              </div>
            </motion.div>
          </div>






       



      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullScreen
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <div className="flex h-[40vh] justify-between items-center  px-12 overflow-hidden">
            <div className="w-[20%]  flex justify-center items-center overflow-hidden"
            >
              <img src="https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?t=st=1726151155~exp=1726154755~hmac=872d3a76c86c0c6aaf752ca40cececa104920ec6f4ee33b04ded114123554b10&w=740" alt="Profile Pic" className='rounded-full object-cover' />
            </div>
            <div className="w-[78%] flex flex-col justify-between min-h-[80%]"
            >
              <div className=" flex items-end">
           
                <input type="text" placeholder='Vinay' className='text-3xl font-montserrat font-medium mr-5 border-b-2 border-gray-600 outline-none' />
                <input type="text" placeholder='(Designation)' className='text-xl font-montserrat font-medium border-b-2 border-gray-600 outline-none' />
              </div>
            
              <textarea name="" id="" cols="10" rows="4" className='font-sans border-b-2 outline-none border-gray-600 tracking-wide text-justify'></textarea>
              <div className="flex justify-between space-x-2 font-montserrat text-md">
                <div className="flex items-center "><MdOutlineMail size={20} /> <input type="text" className='border-b-2 outline-none border-gray-600 mx-2'/> </div>
                <div className="flex items-center "><MdOutlinePhoneInTalk size={20} /> <input type="text" className='border-b-2 outline-none border-gray-600 mx-2'/> </div>
                <div className="flex items-center "><IoIosGlobe size={20} /> <input type="text" className='border-b-2 outline-none border-gray-600 mx-2'/> </div>
   
              </div>
            </div>
          </div> 
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>






          {/* Skills Section */}
         
          <div className="min-h-[35vh] md:px-6 my-4 bg-gray-200 ">
            <motion.div className="text-3xl font-montserrat font-medium tracking-wider  text-center pt-4 mb-6"
              variants={mainAnimation}
              initial="initial"
              animate="animate"> My Skills </motion.div>


            <div className="h-[80%] font-montserrat tracking-wider flex flex-wrap  items-center justify-center ">
              {skillData.map((skill, i) => (
                <motion.div
                  className="border px-2 border-gray-700 bg-gray-50 rounded-lg min-w-24 mx-4 my-2 cursor-pointer  text-center"
                  key={i}
                  variants={fadeIdAnimation}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={i}
                  whileHover={{ scale: 1.15, rotate: "3deg" }}
                >
                  {skill}
                </motion.div>
              ))}

            </div>


          </div>


          {/* projects */}
          
          <div className="min-h-[50vh] my-6 ">
            <motion.div className="text-3xl font-montserrat font-medium  tracking-wider  text-center pt-4 mb-6"
              variants={mainAnimation}
              initial="initial"
              animate="animate"> Projects </motion.div>
            <div className=" flex justify-center space-x-20 ">
              {projectData.map((project, i) => (
                <motion.div className="border-2 border-gray-700 bg-gray-100 rounded-xl p-4 w-[27%] h-[100%] justify-between flex flex-col" key={i}
                  initial={{ opacity: 0, scale: 0, }}
                  whileInView={{ opacity: 1, scale: 1, }}
                  transition={{
                    duration: .7, type: "spring", stiffness: 80, delay: 0.3 * i
                  }}
                  viewport={{ once: true, amount: 1 }}
                  whileHover={{ scale: 1.015, rotate: "1deg" }}
                >

                  <div className="mb-2 h-40 w-full flex items-center justify-center"> <img src={project.img} alt="" className='object-fit h-full w-60' /></div>
                  <div className="space-y-1">
                    <div className="text-xl font-montserrat font-semibold text-blue-900">{project.name}</div>
                    <div className="text-sm tracking-wide text-justify "> <span className='text-lg text-blue-900 font-medium'>About :</span> {project.desc}</div>
                    <div className=" flex flex-wrap items-center"><span className='text-lg text-blue-900 font-medium'>Tech Stack:</span>{project.tech.map((s) => (
                      <span className='min-w-12 rounded-lg px-2 p-1 bg-white cursor-pointer border border-gray-800 m-1 text-center text-sm'>{s}</span>
                    ))}</div>
                    <div className=""><span className='text-lg text-blue-900 font-medium'>Duration : </span>{project.duration}</div>
                    <div className=""><span className='text-lg text-blue-900 font-medium'>Link : </span>{project.link}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>


          {/* EDUcation */}
          
          <div className="min-h-[50vh] bg-gray-200 p-4">
            <motion.div className="text-3xl font-montserrat font-medium  tracking-wider  text-center pt-4 mb-6"
              variants={mainAnimation}
              initial="initial"
              animate="animate"> Education</motion.div>

            <div className="flex flex-col items-center justify-around  min-h-[30vh]"
            >

              {educationData.map((e, index) => (
                <motion.div className="flex justify-between items-end w-[90%] cursor-pointer "
                  initial={{ opacity: 0.3, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: .2 * index, type: 'spring', stiffness: 150 }}
                  whileHover={{ opacity: 0.8, scale: 1.02 }}
                >



                  <div className="flex justify-between items-center   w-[60%] text-xl font-medium font-montserrat">
                    <div className=""><IoSchool /></div>
                    <div className="text-left w-40">   {e.name}</div>
                    <div className="w-72 ">{e.institute}</div>
                    <div className="w-12 ">{e.grade}</div>
                  </div>
                  <motion.div className="bg-blue-400 h-[2px] mb-1 "
                    initial={{ width: 0 }}
                    whileInView={{ width: "16rem" }}
                    transition={{
                      duration: 1, type: "spring", stiffness: 80, delay: .3 * index
                    }}
                    style={{ transformOrigin: "left" }}
                  ></motion.div>
                  <div className="text-2xl text-blue-800 font-mono">{e.duration}</div>
                </motion.div>
              ))}

            </div>
          </div>

          {/* Experience */}
          <div className="min-h-[60vh] my-6">
            <motion.div className="text-3xl font-montserrat font-medium  tracking-wider  text-center pt-4 mb-6"
              variants={mainAnimation}
              initial="initial"
              animate="animate"> Experience </motion.div>

            <div className="flex items-center justify-center space-x-20 min-h-[40vh] flex-wrap"
            >

              {experienceData.map((e, index) => (
                <motion.div className="flex flex-col p-2 rounded-lg justify-around min-h-[25vh] w-[28%] cursor-pointer border-2 border-gray-500 bg-gray-50"
                  initial={{ opacity: 0.5, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: .8, delay: .4 * index, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.03, rotate: "1deg" }}
                >



                  <div className="flex flex-col justify-between h-40  text-xl font-medium  ">

                    <div className="text-left flex justify-between border-b-2 border-gray-600"> <FaShoppingBag /> <span className='font-montserrat'>{e.name}</span> </div>

                    <div className=""><span className='text-lg text-blue-900 font-medium '>Company: </span>
                      <span className='font-montserrat text-2xl tracking-wider'>{e.institute}</span></div>


                    <div className=""><span className='text-lg text-blue-900 font-medium'>Position : </span>
                      <span className='font-montserrat'>{e.position}</span></div>
                    <div className=""><span className='text-lg text-blue-900 font-medium'>Duration : </span><span className=' font-mono'>{e.duration}</span></div>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>


          {/* Achivements */}
          <div className="min-h-[60vh] bg-gray-200 p-4">
            <motion.div className="text-[28px] font-montserrat font-medium  tracking-wider  text-center pt-4 mb-6"
              variants={mainAnimation}
              initial="initial"
              animate="animate"> Achievement and Certification</motion.div>

            <div className="flex flex-col items-center justify-around  min-h-[30vh] space-y-6 "
            >

              {educationData.map((e, index) => (
                <motion.div className="flex flex-col  w-[90%] h-[100%]  cursor-pointer mb-4  space-y-4  border-b-2 border-gray-400 p-2"
                  initial={{ opacity: 0.3, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: .2 * index, type: 'spring', stiffness: 150 }}
                  whileHover={{ opacity: 0.8, scale: 1.02 }}
                >
                  <div className=' flex w-[100%] justify-between'>



                    <div className="flex justify-between items-center   w-[60%] text-xl font-medium font-montserrat">
                      <div className=""><PiCertificateFill /></div>
                      <div className="text-left w-40">   {e.name}</div>
                      <div className="w-72 ">{e.institute}</div>
                      <div className="w-12 ">{e.grade}</div>
                    </div>
                    <div className="w-[40%]">
                      <div className="text-2xl text-blue-800 font-mono text-right">{e.duration}</div>
                    </div>

                  </div>
                  <div className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, repellat qui, facilis sapiente quisquam quasi culpa harum doloremque asperiores quae natus saepe aperiam illum voluptatibus molestias deserunt! Nisi, eveniet eos.</div>


                </motion.div>
              ))}

            </div>
          </div>




          <div className="h-[10vh] text-center p-4 my-4 font-montserrat tracking-tight">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, ducimus? Soluta dolor qui eum commodi, vel officia mollitia aliquid tempora sit ut quod necessitatibus minima provident? Magni reiciendis exercitationem ut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam incidunt culpa praesentium doloribus magnam molestiae animi consequatur tempora! A, totam.
          </div>


          {/* social */}
          <motion.div className="h-10  mt-10 flex justify-center space-x-20 flex-wrap "
            initial={{}}>

            <div className="cursor-pointer text-3xl"> <a href='https://github.com/Winaymaurya' target="_blank" rel="noopener noreferrer"> <FaGithub /></a>  </div>
            <div className="cursor-pointer text-3xl"> <a href='https://github.com/Winaymaurya' target="_blank" rel="noopener noreferrer"> <FaLinkedin /></a>  </div>
            <div className="cursor-pointer text-3xl"> <a href='https://github.com/Winaymaurya' target="_blank" rel="noopener noreferrer"> <FaInstagram /></a>  </div>
            <div className="cursor-pointer text-3xl"> <a href='https://github.com/Winaymaurya' target="_blank" rel="noopener noreferrer"> <FaInstagram /></a>  </div>

          </motion.div>


        </div>}

    </>
  )
}

export default Profile
