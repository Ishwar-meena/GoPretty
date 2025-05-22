import React from 'react'

function Card({name,title,src}){
return <div className='bg-blue-100 py-2.5 cursor-pointer'>
    <div className="img overflow-hidden"><img src={src} alt="solution"  className='h-64 transition-transform duration-300 hover:scale-105'/></div>
    <div className='px-4 mt-2'>
    <p className='capitalize  font-medium text-lime-900'>{name}</p>
    <p className='text-sm font-medium '>{title}</p>
    <div className='flex justify-between  items-center'>
        <p className='text-lime-700 font-medium text-lg'>$10.80</p>
        <p className='bg-lime-600 rounded-full py-2 px-[9px]'><img src="cart2.png" alt="cart" /></p>
    </div>
    </div>
</div>
}
const BestSell = () => {
  return (
    <>
    <div className='flex justify-between bg-blue-50 capitalize md:text-3xl sm:text-2xl text-xl text-yellow-900 font-medium pt-8 md:px-16 sm:px-4 pb-4'>
      <p>
      best selling products
     </p>
     <p className='underline underline-offset-8'>view all products</p>
    </div>
    <div className='flex flex-wrap items-center justify-evenly my-10 gap-2.5'>
    <Card
        name={"the ordinary"}
        title={"peeling solution - Exfoliator"}
        src={"solution.png"}
    />
    <Card
        name={"the body shop"}
        title={"Body Butter - 100Gms"}
        src={"soap.png"}
    />
    <Card
        name={"the body shop"}
        title={"Show Gel - 250ml"}
        src={"gel.png"}
    />
    <Card
        name={"bath & body works"}
        title={"Hand Soap - 250ml"}
        src={"hand soap.png"}
    />
    </div>
    </>
  )
}

export default BestSell
