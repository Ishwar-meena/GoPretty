import React from 'react'

function Card({name,price,src}){
    return <div className='cursor-pointer w-60 overflow-hidden'>
        <img src={src} alt="theordinary" className='w-60 object-contain transition-transform duration-300  hover:scale-105'/>
        <div className='bg-lime-900 text-gray-200 px-2 pt-1 pb-2.5'>
            <p className='capitalize'>{name}</p>
            <div className='flex justify-between items-center'>
                <p>{price}</p>
                <div className='bg-lime-600 rounded-full py-2 px-2.5'><img src="cart2.png" alt="cart" /></div>
            </div>
        </div>
    </div>
}
const NewArrivals = () => {
    return (
        <div>
            <div className='flex justify-between  capitalize md:text-3xl sm:text-2xl text-xl text-yellow-900 font-medium pt-8 md:px-16 sm:px-4 pb-4'>
                <p>New Arrivals</p>
                <p className='underline underline-offset-8'>view all brands</p>
            </div>
            <div className='flex flex-wrap gap-4 justify-evenly items-center my-4'>
                <Card
                    name={"pelling solution"}
                    price={"$12.90"}
                    src={"theordinary2.png"}
                />
                <Card
                    name={"exfoliator"}
                    price={"$14.20"}
                    src={"exfolio.png"}
                />
                <Card
                    name={"serum"}
                    price={"$8.90"}
                    src={"laticacid.png"}
                />
                <Card
                    name={"moisturizor"}
                    price={"$12.90"}
                    src={"moisture.png"}
                />
            </div>
        </div>
    )
}

export default NewArrivals
