import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
  const ref=useRef(null);
  const data=[
    {desc:"lorem ipsum remdey iyer krifgbdc" , filesize:"0.9mb" , close:false , tag:{
      isOpen:true, tagTitle:"Download Now" ,tagColor:"green"
    }},
    {desc:"lorem ipsum remdey iyer krifgbdc" , filesize:"0.9mb" , close:false , tag:{
      isOpen:true, tagTitle:"Download Now" ,tagColor:"blue"
    }},
    {desc:"lorem ipsum remdey iyer krifgbdc" , filesize:"0.9mb" , close:false , tag:{
      isOpen:true, tagTitle:"Download Now" ,tagColor:"green"
    }}
  ];
  
  return (
    <div  ref={ref} className='fixed w-full h-screen z-[3] top-0 left-0 flex gap-10 flex-wrap p-5'>
{data.map((item,index)=>(
  <Card data={item} reference={ref}/>
))}
    </div>
  )
}

export default Foreground