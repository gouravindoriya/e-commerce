import React from 'react'
import { useState} from 'react';

const Carousel = () => {
   let  imageurls=[
        "https://img.freepik.com/free-photo/fantasy-endless-hole-landscape_23-2151639697.jpg?t=st=1729929589~exp=1729933189~hmac=c924acef6d3300a39e20aa67904370ebd375f0af44da03aa9f3ef070d7cb7e80&w=1380",
        "https://img.freepik.com/free-photo/fantasy-endless-hole-landscape_23-2151639641.jpg?t=st=1729929651~exp=1729933251~hmac=4f8bc261e2cbc49637476e2189195e56cd17319dfe241c204a125b62aa97b34c&w=1380",
        "https://img.freepik.com/free-photo/fantasy-endless-hole-landscape_23-2151639625.jpg?t=st=1729929681~exp=1729933281~hmac=ef368a800d3cd5140dfacd0dbc9cac51043e91b93bf970a8842c628b69912ad3&w=1380",
      ];
    let  dataCount=imageurls.length-1;
    let [currentIndex,setcurrentIndex]=useState(0);
     function Increment(){

       setcurrentIndex((currentIndex<dataCount)?currentIndex+1:0)
     }
     function Decrement(){
     
        setcurrentIndex((currentIndex>0)?currentIndex-1:dataCount)
     }

  return (
   <>
        <div className=' w-full h-[25rem]'>
        <a href="#">
            <img src={imageurls[currentIndex]} alt='image not found' className={`w-full h-full`} />
        </a>
        <div className='absolute top-[30%]  w-full'>
        
        <div className='flex justify-between p-4 text-white'>
        <button onClick={()=>Decrement()}>{"<"}</button>
        <button onClick={()=>Increment()}>{">"}</button>
        </div>
        </div>
         </div>
         </>
  )
}

export default Carousel
