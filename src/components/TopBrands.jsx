import React from 'react'
import { useState } from 'react';
function Card({name,discount,src,arr}){
  
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const changeImg = () => {
    setAnimate(true); // trigger animation
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % arr.length);
      setAnimate(false); 
    }, 50);
  };
    return <div className='my-6'>
        <p className='capitalize text-center text-black font-medium text-lg py-2'>{name}</p>
        <div className='flex rounded-md  items-center relative'>
        <p className='h-52 w-2 rounded-l-md bg-lime-700'></p>
        <img src={arr[index]||src} alt="the ordinary" className={`h-52 transition-transform duration-300 ${
            animate ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
          }`}/>
        <p className='h-52 w-9 rounded-r-md bg-white'></p>
        <img src="arrow.png" alt="arrow" className='absolute -right-6 cursor-pointer'onClick={()=>changeImg(arr)}/>
        </div>
        <p className='capitalize text-center py-2 font-medium'>{discount}</p>
    </div>
}
const TopBrands = () => {
  const [imgOrdinary, setImgOrdinary] = useState(["theordinary.png","solution.png","exfolio.png","laticacid.png"]);
  const [imgBodyShop, setImgBodyShop] = useState(["bodysoap.png","soap.png","gel.png"]);
  const [imgBodyWorks, setImgBodyWorks] = useState(["beach.png","hand soap.png","moisture.png"]);
  
  return (
    <div>
    <div className='flex justify-between bg-blue-50 capitalize md:text-3xl sm:text-2xl text-xl text-yellow-900 font-medium pt-8 md:px-16 sm:px-4 pb-4'>
      <p>
      top brands
     </p>
     <p className='underline underline-offset-8'>view all brands</p>
    </div>
    <div className='bg-[#956950] text-white flex flex-wrap justify-around items-center'>
    <Card
        name={"the ordinary"}
        discount = {"upto 80 % off"}
        src={"theordinary.png"}
        arr = {imgOrdinary}
    />
    <Card
        name={"the body shop"}
        discount = {"all items 20 % off"}
        src={"bodysoap.png"}
        arr = {imgBodyShop}
    />
    <Card
        name={"bath & body works"}
        discount = {"upto 50 % off"}
        src={"beach.png"}
        arr = {imgBodyWorks}
    />

    </div>
    </div>
  )
}

export default TopBrands
