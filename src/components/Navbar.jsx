import React from 'react'

const Navbar = () => {
    return (<>
        <nav className='bg-lime-600 flex justify-between sm:justify-around items-center text-white font-medium py-2.5'>
            <div className="logo flex justify-center items-center gap-0.5 cursor-pointer">
                <img src="logo.png" alt="logo" />
                <p className='text-xl '>GoPretty</p>
            </div>
            <ul className='lg:flex  justify-evenly w-sm ml-20 hidden '>
                <li>Shop</li>
                <li>Products</li>
                <li>Sale</li>
                <li>Contact</li>
            </ul>
            <div>
                <input type="text" placeholder='Search for Products' className='bg-white placeholder:text-gray-400 text-black focus:outline-2 focus:outline-lime-300 rounded-sm p-2 pl-4 sm:w-80 w-40' />
            </div>
            <div className='flex justify-center items-center gap-4'>
                <img src="heart.png" alt="heart" className='h-7 invert-100 hidden sm:block'/>
                <img src="cart.png" alt="cart" />
            </div>
        </nav>
        <div className='w-full h-0.5 bg-white'></div>
    </>
    )
}

export default Navbar
