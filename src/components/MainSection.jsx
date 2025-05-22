import React from 'react'

function Card({text,src}){
    return(
        <div>
            <p className='capitalize text-sm ml-6 underline underline-offset-4 mb-1 text-white'>{text}</p>
            <div><img src={src} alt="homepage" className='h-40'/></div>
        </div>
    )
}
const MainSection = () => {
    return (
        <div className='bg-[#cda791] grid sm:grid-cols-2 relative'>
            <div className="girl">
                <img src="girl face.png" alt="girl" className='sm:h-[80vh] h-[30vh]' />
            </div>
            <div>
                <div className='absolute  top-6 sm:top-[15%] right-5 sm:left-[28%]'>
                    <p className='sm:text-4xl text-xl max-[26rem]:text-sm text-lime-200'>Discover</p>
                    <p className='capitalize sm:text-5xl text-2xl  max-[26rem]:text-lg  text-white'>our new Products for you </p>
                </div>
                <button className='absolute top-28 sm:top-[43%] left-[40%] cursor-pointer hover:bg-lime-700 flex items-center justify-center gap-2.5 bg-lime-600 p-2.5 rounded-sm border-1 border-gray-200 capitalize text-white'>
                <p>Shop now</p>
                <img src="right-arrow.png" alt="right arrow" className='invert-100 w-4 brightness-150'/>
                </button>
                <div className="off absolute bottom-0 md:bottom-0 sm:bottom-44 -right-4 lg:right-[10%]">
                    <img src="discount.png" alt="discount" className='md:w-72 sm:w-52 w-32'/>
                </div>
                <div className="img-card hidden sm:block sm:absolute bottom-4 left-[40%] ">
                <Card
                    text={"the ordinary"}
                    src={"homepage-1.png"}
                />
                </div>
                <div className="img-card hidden sm:block sm:absolute md:-bottom-12 -bottom-6 left-[61%] md:left-[52%] ">
                <Card
                  text={"the body shop"}
                  src={"homepage-2.png"}
                />
                </div>
                
            </div>
        </div>
    )
}

export default MainSection
