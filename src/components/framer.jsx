import React, { useEffect } from 'react'
import { motion,useAnimationControls,useScroll, useSpring, useTransform} from 'framer-motion'


const Framer = () => {
  const flipControls=useAnimationControls()
 const {scrollYProgress}=useScroll()
const scaleX=useSpring(scrollYProgress)

const background=useTransform(scrollYProgress,
  [0,0.5,1],
  ["rgb(86,1,245)","rgb(77,20,245)","rgb(1,245,13)"])


  const handelClick=()=>{
    flipControls.start("flip")
  }

  return (
    <>
    
    <motion.div className="h-2 w-full flex sticky top-12 " style={{
      transformOrigin:"left",
      scaleX,
      background
    }}></motion.div>
    <div className="min-h-[100vh]">

      {/* <motion.div className="h-40 w-40 bg-black"
      initial={{rotate:'0deg',scale:0,y:0}}
      animate={{rotate:'180deg',scale:1,y:[0,-100,100,-100,0]}}
      transition={{duration:1,ease:"backInOut",times:[0,.25,.5,.95,1]}}
      >
        h
      </motion.div> */}
      {/* <div className="m-4">
      <motion.button className='bg-blue-800 text-white p-2 rounded-lg w-20'
      whileHover={{scale:1.05}}
      whileTap={{rotate:"4deg",scale:0.95}}
      >Click Me</motion.button>
    </div>
    <div className="">
      <motion.button className='bg-red-600 text-white p-2 rounded-lg w-20'
      whileHover={{scale:1.05}}
      whileTap={{rotate:["4deg","-4deg","0deg"],scale:0.95}}
      >Click Me</motion.button>
      </div> */}
       {/* <button className='bg-gray-700 p-2 px-8 m-10 text-white' onClick={handelClick}>Flip</button>
      <motion.div className="h-60 w-60 bg-black"
      variants={{
        initial:{
          rotate:"0deg",
          opacity:1,
          
        },  
        flip:{
          rotate:"360deg",
          opacity:0
        }
      }}
      initial="initial"
      animate={flipControls}
      transition={{
        duration:1
      }}
      ></motion.div> */}
    </div>
    <div className="h-[140vh] p-10 text-justify" >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vitae cumque beatae illum, possimus itaque magni officiis nam? Id porro ducimus doloremque beatae unde. Porro iure error, molestias modi, quisquam in similique dolor eveniet voluptas deserunt doloribus corrupti voluptates sint consequatur pariatur, suscipit dolores ad eaque a hic? Rerum alias at totam porro, vitae nihil accusamus atque repudiandae, nobis sapiente vel commodi corrupti perspiciatis a id dolor, ipsam sunt labore odit dolorem voluptate mollitia impedit fugiat delectus! Omnis vitae iure saepe ratione fugit pariatur facere est cupiditate reiciendis doloremque! Mollitia nulla quis obcaecati recusandae quaerat commodi et laborum, ex maiores. Labore vel minus quae, doloremque voluptas, consequuntur enim distinctio necessitatibus modi facilis fugiat eum quisquam dolores maiores in ex, alias quam aliquam. Culpa harum minima et illo dolor hic debitis ex sequi sapiente autem deserunt dolores delectus, ullam suscipit iure libero praesentium amet ea numquam ad odit vero quam! Maxime officia ex perspiciatis magni excepturi dicta eligendi iusto, quae quasi libero neque similique minus asperiores eos distinctio quos quod ullam rem. Accusamus aliquid aut culpa ipsa iste doloremque eius tempora corrupti at repellat mollitia voluptate sequi in, perspiciatis quod obcaecati harum voluptatibus id dignissimos doloribus ad magni. Molestias doloremque quos eveniet quibusdam, vero doloribus nesciunt obcaecati velit deleniti mollitia facere, non similique aspernatur reiciendis temporibus dolores quod fugit expedita blanditiis nobis voluptas laudantium sapiente, perferendis voluptatibus. Nesciunt odio quibusdam, ducimus ad sequi dolore neque doloribus natus ullam, molestias expedita facilis, a itaque. A deserunt similique praesentium sapiente modi illo libero natus dolore explicabo error sint voluptatum ut quae veniam, quia ipsam, voluptates hic, rem consectetur tempora! Qui, soluta molestiae sapiente dolore vero aut numquam magni officiis voluptas architecto tempora a molestias quidem, maiores tenetur! Optio aperiam consectetur id nihil numquam porro ipsum molestias fuga error! Doloremque ex, vel velit exercitationem eos vero quisquam quo labore, eius tenetur esse dignissimos magnam harum! Eligendi inventore voluptatem nulla numquam impedit et autem ipsum, unde tenetur odit nesciunt consequuntur hic voluptatibus ratione molestias velit quas natus, itaque soluta reiciendis odio? Exercitationem odio doloremque unde natus? Perspiciatis, maxime quas, asperiores harum itaque nesciunt dolores non vitae quam minus nisi. Enim, numquam! Impedit deserunt minus quisquam doloribus animi labore quam enim sit facere cum corporis odit saepe molestias quod, magni sapiente, repellat alias odio reprehenderit amet. Maiores quisquam fugit facilis, fuga odit minus necessitatibus et aspernatur eum quam nostrum quia natus, nam alias. Temporibus qui hic impedit delectus, incidunt aspernatur voluptatem ducimus obcaecati illo, placeat perferendis nostrum deleniti cupiditate, accusantium voluptatibus laboriosam sit ex aliquam laudantium expedita fugit. Labore ipsa in, quaerat a blanditiis pariatur odio exercitationem dolorum. Optio, perferendis tenetur, cupiditate deleniti id enim eum necessitatibus harum fugit tempore repellat incidunt ex culpa rerum dolorem dolorum perspiciatis magni? Quo quidem possimus, tempore suscipit voluptatem voluptatibus nostrum necessitatibus cupiditate, dicta explicabo quasi, eius modi magni numquam consequuntur saepe nulla quam earum illo obcaecati sit quod! Quis harum ratione laudantium voluptates impedit repellendus dicta aspernatur ullam illo at voluptate iste laborum perferendis commodi distinctio, possimus maxime quidem totam cumque minus consequatur assumenda? Quod blanditiis consectetur vero commodi a tempora officiis dolorem quia veritatis facere, adipisci quo aperiam veniam, voluptate beatae aliquam labore ea tempore quis? Obcaecati praesentium quae hic, numquam iste corrupti atque mollitia delectus quam sapiente at esse aperiam. Reprehenderit consectetur, facilis provident animi possimus beatae totam voluptatibus adipisci optio exercitationem illum atque quos necessitatibus soluta commodi, officia distinctio hic, magnam quaerat! Assumenda quasi vero, velit ullam doloremque accusantium enim minima consectetur dolores veritatis, sed porro sit accusamus quas iste quam excepturi vitae et reprehenderit corrupti, placeat blanditiis vel nostrum distinctio! Optio neque, non eligendi, iusto voluptatibus beatae harum et quidem aliquid odit delectus ab dolorum? Voluptate quam dignissimos fugiat doloremque sit exercitationem, hic sapiente consequuntur numquam eum molestias ipsum? Quos deserunt doloribus voluptatem magni voluptatum! Voluptatum dignissimos cupiditate quis architecto praesentium enim eius non perferendis? Fugit ea, eveniet natus expedita omnis eius dignissimos fuga molestias deleniti odit impedit quaerat corporis hic suscipit temporibus, ab nostrum quidem aliquid beatae, accusantium ipsam? Esse nisi unde nulla asperiores vel libero, in expedita quis temporibus delectus eius perferendis aliquam, corrupti dolore iure facilis aut, deleniti adipisci eveniet rem. Omnis voluptate saepe rem voluptatibus consectetur, delectus tempora, nisi eos inventore culpa, natus quisquam illo commodi enim! Ducimus reiciendis aliquam temporibus qui delectus velit numquam sed quidem perspiciatis, ea quisquam eos. Velit commodi totam labore quod, qui eligendi numquam a culpa, voluptatibus obcaecati esse ullam veritatis repellendus provident facere ex voluptatem, earum similique minus laudantium beatae facilis nihil ipsum impedit? Delectus porro consequatur, maiores velit quos similique repellat? Repudiandae dolores ullam fuga maxime repellat, sit quod eos recusandae pariatur officia quos ut nesciunt modi vel fugiat! Iste nam repellendus libero alias sed consequuntur deserunt nobis officia. Minima eaque fuga, eum neque nisi, pariatur quam, amet excepturi ratione velit expedita molestias consequatur ducimus quibusdam inventore obcaecati rem autem. Enim blanditiis architecto similique soluta delectus dignissimos perferendis ipsa harum provident amet est magnam, consequuntur officia reprehenderit repellat iusto? Natus dolorum, tempora nobis repellat vitae neque earum voluptates exercitationem voluptatem, autem quidem officiis, recusandae blanditiis odit distinctio. Enim, aspernatur fuga nisi labore fugiat, similique rem blanditiis, consequatur dolor dicta iure fugit corrupti laboriosam maiores earum veritatis? Delectus ducimus vitae rem ullam consectetur molestias, optio quae doloremque harum blanditiis doloribus debitis, voluptatem neque in architecto temporibus, corrupti impedit maxime! Repudiandae quis illo vero voluptatum accusamus, ullam tenetur omnis, laboriosam eius totam perspiciatis repellendus voluptatem neque corporis in excepturi. Fugiat quasi dicta aliquam obcaecati quisquam alias consequatur qui consectetur adipisci numquam officiis cumque error necessitatibus, molestias aut sequi voluptates repellat veritatis reiciendis hic! Debitis quam id nobis, non quo rem atque labore est a veritatis voluptatum maxime! Inventore quae maiores quas error aspernatur qui officiis quos saepe praesentium, distinctio labore vero eveniet ab unde eos explicabo quidem magni animi minus velit architecto. Adipisci, explicabo. Dignissimos nostrum beatae odio similique doloribus est molestias! Cum nemo dolore quasi repudiandae culpa dolores dignissimos animi! Deleniti, nostrum possimus? Perferendis beatae culpa repudiandae doloribus similique possimus consequatur aspernatur numquam quia dolores?
    </div>
    </>
  )
}

export default Framer
