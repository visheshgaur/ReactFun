
import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"
function Card({data,reference}) {
  return (
    < motion.div  drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.1}   dragTransition={{ bounceStiffness: 200, bounceDamping:10 }} className=' relative w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden flex-shrink-0'>
        <FaFileAlt/>
        <p className='mt-5 font-semibold text-sm leading-tighter '>{data.desc}
            
         </p>
         <div className='footer absolute w-full  bottom-0  left-0 '>
            <div className='flex items-center justify-between mb-3 py-3  px-5'>
                <h5>{data.filesize}</h5>
<span className='flex items-center justify-center  w-8 h-8 rounded-full bg-zinc-800'>
  {data.close?<IoClose />:<LuDownload size="0.8em"/>}

</span>

            </div>
            {data.tag.isOpen?  (<div className={`tag flex justify-center items-center w-full py-4 ${data.tag.tagColor==="blue"?"bg-blue-500":"bg-green-500"}`}>
                <h3 className='text-md font-semibold'>{data.tag.tagTitle}</h3>
            </div>):null}
          
         </div>
    </motion.div>
  )
}

export default Card