import React,{useState} from 'react'
import { motion } from 'framer-motion';
import { FiDelete } from "react-icons/fi";
import { MdOutlineAddBox} from "react-icons/md";
import { IoSchool } from 'react-icons/io5';
import { RiDeleteBin6Line } from "react-icons/ri";
const CreateProfile = () => {
  const [skill, setSkill] = useState(""); // To manage the input box value
  const [skills, setSkills] = useState([]);
  const [preview, setPreview] = useState("https://lh3.googleusercontent.com/a-/AFdZucpC_6WFBIfaAbPHBwGM9z8SxyM1oV4wB4Ngwp_UyQ=s96-c");

  const [education, setEducation] = useState({
    educationName: '',
    instituteName: '',
    percentage: '',
    startYear: '',
    endYear: ''
  });
  const [experience, setExperience] = useState({
    type: '',
    companyName: '',
    position: '',
    duration: '',
  });



  const [educationList, setEducationList] = useState([]); // Array to store multiple education entries
  const [experienceList, setExperienceList] = useState([]); // Array to store multiple education entries


  const handleAddEducation = (e) => {
    e.preventDefault();
    if (
      education.educationName &&
      education.instituteName &&
      education.percentage &&
      education.startYear &&
      education.endYear
    ) {
      setEducationList([...educationList, education]); 
    }
    else{
      alert("Fill all details")
    }
    handelEducationClear()
  };
  const handleAddExperience = (e) => {
    e.preventDefault();
    if (
      experience.type &&
      experience.companyName &&
      experience.position
    ) {
      setExperienceList([...experienceList, experience]); 
    }
    else{
      alert("Fill all details")
    }
    handelExperienceClear()
  };


  const handelExperienceClear=()=>{
       setEducation({
        type: '',
        companyName: '',
        position: '',
        duration: '',
  
      });
  }
  const handelEducationClear=()=>{
       setEducation({
        educationName: '',
        instituteName: '',
        percentage: '',
        startYear: '',
        endYear: ''
      });
  }

  // Handle deleting an education entry
  const handleDeleteEducation = (index) => {
    setEducationList(educationList.filter((_, i) => i !== index));
  };
  const handleDeleteExperience = (index) => {
    setExperienceList(experienceList.filter((_, i) => i !== index));
  };


  // Function to handle the image preview
  const loadFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
      event.target.value = "";
    }
  };
  // Skills
  const handleAddSkill = (e) => {
    e.preventDefault(); 
    if(skills.length >14){
      return alert("Maximum numbers skills are added")
    }
    if (skill.trim()) {
      setSkills([...skills, skill]); 
      setSkill("");
    }
  };

  // Handle deleting a skill from the array
  const handleDeleteSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index)); // Remove skill by index
  };
  return (
    
   <>
   <div className="mx-10 mt-2">

    {/* Brief */}
    <div className=" flex space-x-16 border-b-2 border-gray-400 pb-4 sticky top-14 z-10 backdrop-blur-sm bg-opacity-70 p-4 shadow-sm ">
    <div className="flex flex-col justify-center w-32 space-y-2">
        <div className="">
          <img
            id="preview_img"
            className="h-32 w-32 object-cover rounded-full"
            src={preview}
            alt="Current profile photo"
          />
        </div>
 
          <div className="">
          <input
            type="file"
            onChange={loadFile}
            className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-6
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-200 file:text-violet-700
              hover:file:bg-violet-300
            "
            
          />
        </div>
      </div>
      
      <div className="w-[85%] p-2 space-y-4">
      <div className=" flex  justify-between ">
    
           <input type="text" placeholder='Full Name' className='p-1 rounded-tr-xl border-2 border-gray-600 outline-none focus:border-blue-800' />
           
           <input type="text" placeholder='Role You are Looking for' className='p-1 rounded-tr-xl border-2 border-gray-600 outline-none focus:border-blue-800' />
           
      
           <input type="text" placeholder='Role You are Looking for' className='p-1 rounded-tr-xl border-2 border-gray-600 outline-none focus:border-blue-800' />
      
           </div>
          <div className="">
          <textarea name="" id="" cols="100" rows="2" className=' w-full font-sans border-2 outline-none focus:border-blue-900 border-gray-500 tracking-wide text-justify rounded-tr-xl p-1' placeholder='Bio'></textarea>
          </div>
          <div className="flex justify-between">
          <input type="email" placeholder='Email' className='p-1 rounded-tr-xl border-2 border-gray-600 outline-none focus:border-blue-800' />
          <input type="number" placeholder='Phone' className='p-1 rounded-tr-xl border-2 border-gray-600 outline-none focus:border-blue-800' />
          <input type="text" placeholder='City' className='p-1 rounded-tr-xl border-2 border-gray-600 outline-none focus:border-blue-800' />
          <input type="text" placeholder='Email' className='p-1 rounded-tr-xl border-2 border-gray-600 outline-none focus:border-blue-800' />
          </div>
         
      </div>
      </div>

   {/* Skills */}
      <div className="mt-4 border-b-2 border-gray-400">
        <div className="text-xl font-montserrat font-medium p-1">Add your Skills <span className='text-sm px-2 text-red-900'>* Atleast 5 and not more than 15 </span></div>
        <div className="flex  items-center space-x-6 py-2 ">
      <input
          type="text"
          className="border-2 border-gray-400 rounded-xl  p-2 w-50 outline-none focus:border-blue-800"
          value={skill}
          onChange={(e) => setSkill(e.target.value)} // Update input value
          placeholder="Enter a skill"
        />
        <motion.button
          type="submit"
          className=" w-20 bg-blue-500 text-white p-2 rounded-lg"
          onClick={handleAddSkill}
          whileHover={{scale:1.02,background:"#3974e1",}}
          whileTap={{rotate:'6deg'}}
        >
          Add Skill
        </motion.button>
        </div>
        <ul className="mt-2 flex justify-center space-x-4 items-center min-h-32 flex-wrap ">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-blue-100 p-1 m-1 rounded-xl min-w-40 "
          >
            {skill}
            <FiDelete  onClick={() => handleDeleteSkill(index)} />
          
          </li>
        ))}
      </ul>
      </div>

         {/* education */}
      <div className="h-[50vh] border-b-2 border-gray-400 mb-2 mt-4">
      <div className="text-xl font-montserrat font-medium p-1">Add your Education <span className='text-sm px-2 text-red-900'>* Atleast 1 and not more than 4 </span></div>
      <div className="flex justify-between items-center bg-blue-100 p-2 rounded-md">
          <div className="">  
          <select
        id="education"
        value={education.educationName}
        onChange={(e)=>setEducation({
          ...education,     
          educationName: e.target.value
        })}
        className="border-2 border-gray-300 p-2 rounded-lg outline-none focus:border-blue-900 font-montserrat font-medium"
      >
        <option value="">Select Education  </option>
        <option value="Highschool">Highschool</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Graduation">Graduation</option>
        <option value="Post Graduation">Post Graduation</option>
      </select>
      </div>
      <div className="">
        <label htmlFor="IName" className='font-montserrat font-medium'> Institution Name : </label>
        <input type="text" className='border-2 border-gray-400 rounded-lg  p-1  outline-none focus:border-blue-800'  value={education.instituteName}
            onChange={(e)=>setEducation({
              ...education,     
              instituteName: e.target.value
            })} />
      </div>
      <div className="">
      <label htmlFor="IName" className='font-montserrat font-medium '> Percentage : </label>
        <input type="number" className='border-2 border-gray-400 rounded-lg  p-1 outline-none focus:border-blue-800 w-28' value={education.percentage}
            onChange={(e)=>setEducation({
              ...education,     
              percentage: e.target.value
            })}/>
      </div>

      <div className="">
      <label htmlFor="IName" className='font-montserrat font-medium'> Duration : </label>
        <input type="number" className='border-2 border-gray-400 rounded-xl w-28 mr-1 p-1 outline-none focus:border-blue-800'placeholder='Start Year' value={education.startYear}
            onChange={(e)=>setEducation({
              ...education,     
              startYear: e.target.value
            })}/>
        <input type="number" className='border-2 border-gray-400 rounded-xl w-28 p-1 outline-none focus:border-blue-800' placeholder='End Year' value={education.endYear}
            onChange={(e)=>setEducation({
              ...education,     
              endYear: e.target.value
            })}/>
      </div>
      <motion.div className=" bg-blue-600 text-white p-1 rounded-md"
      whileTap={{rotate:'40deg',scale:1.08}}
      whileHover={{scale:0.95}}
      onClick={handleAddEducation}
      > <MdOutlineAddBox size={30} /> </motion.div>
      </div>
       <div className="my-2 p-2">
  
      {educationList?.map((e, index) => (
   
                  <div className="flex justify-between items-center   w-[100%] text-lg font-medium font-montserrat border-b-2 border-gray-300" key={index} >
                    <div className=""><IoSchool /></div>
                    <div className="text-left w-40">   {e.educationName}</div>
                    <div className="w-72 ">{e.instituteName}</div>
                    <div className="w-12 ">{e.percentage}%</div>
                  <div className="text-xl text-blue-800 font-mono">{e.startYear} - {e.endYear}</div>
                  <div className="bg-red-500 text-white p-2 rounded-lg"> <RiDeleteBin6Line size={22} onClick={()=>handleDeleteEducation(index)}/></div>
                  </div>
              
              ))}
       </div>

      </div>

     {/* Experience */}
     <div className="h-[50vh] border-b-2 border-gray-400 mb-2 mt-4">
      <div className="text-xl font-montserrat font-medium p-1">Add your Experience </div>
      <div className="flex justify-between items-center bg-blue-100 p-2 rounded-md">
          <div className="">  
          <select
        id="education"
        value={experience.type}
        onChange={(e)=>setExperience({
          ...experience,     
          type: e.target.value
        })}
        className="border-2 border-gray-300 p-2 rounded-lg outline-none focus:border-blue-900 font-montserrat font-medium"
      >
        <option value="">Select Experience type </option>
        <option value="Internship">Internship</option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
      </select>
      </div>
      <div className="">
        <label htmlFor="IName" className='font-montserrat font-medium'> Company Name : </label>
        <input type="text" className='border-2 border-gray-400 rounded-lg  p-1  outline-none focus:border-blue-800'  value={experience.companyName}
            onChange={(e)=>setExperience({
              ...experience,     
              companyName: e.target.value
            })} />
      </div>
      <div className="">
      <label htmlFor="IName" className='font-montserrat font-medium '> Position : </label>
        <input type="text" className='border-2 border-gray-400 rounded-lg  p-1 outline-none focus:border-blue-800 w-28' value={experience.position}
            onChange={(e)=>setExperience({
              ...experience,     
              position: e.target.value
            })}/>
      </div>

      <div className="">
      <label htmlFor="IName" className='font-montserrat font-medium'> Duration : </label>
        <input type="text" className='border-2 border-gray-400 rounded-xl w-28 mr-1 p-1 outline-none focus:border-blue-800'placeholder='3 months' value={experience.startYear}
            onChange={(e)=>setExperience({
              ...experience,     
              duration: e.target.value
            })}/>

      </div>
      <motion.div className=" bg-blue-600 text-white p-1 rounded-md"
      whileTap={{rotate:'40deg',scale:1.08}}
      whileHover={{scale:0.95}}
      onClick={handleAddExperience}
      > <MdOutlineAddBox size={30} /> </motion.div>
      </div>
       <div className="my-2 p-2">
  
      {experienceList?.map((e, index) => (
   
                  <div className="flex justify-between items-center   w-[100%] text-lg font-medium font-montserrat border-b-2 border-gray-300" key={index} >
                    <div className=""><IoSchool /></div>
                    <div className="text-left w-40">   {e.type}</div>
                    <div className="w-72 ">{e.companyName}</div>
                    <div className="w-12 ">{e.position}</div>
                  <div className="text-xl text-blue-800 font-mono">{e.duration}</div>
                  <div className="bg-red-500 text-white p-2 rounded-lg"> <RiDeleteBin6Line size={22} onClick={()=>handleDeleteExperience(index)}/></div>
                  </div>
              
              ))}
       </div>

      </div>

      
      </div>
   </>
  )
}

export default CreateProfile
