

import { useState } from 'react'
import search from '../images/suiteimages/search.png';

const Navbar = () => {


    const[navopen,setnavopen]=useState(false);

    const togglenav = () => {
        setnavopen(!navopen)
    }

    console.log(navopen);

    return (
        <div className='relative overflow-hidden select-none'>
           <div className='flex flex-row gap-12 justify-around bg-[#212731] '>

            <div className='relative sm:w-3/6 w-4/6 mx-4'>
            <img src={search} alt="searchicon" className='w-16 h-16 absolute top-6  left-[-8px]  '/>
            <input type="text" alt="searchicon" className="rounded-md my-8 h-12 w-5/6  outline-none lg:px-16 px-12"/>
            </div>

            <div className={`${navopen?'absolute bg-red-200 w-4/6 lg:w-1/2  top-[-22px] left-0 flex gap-3 py-8  flex-col z-50 text-center lg:top-auto  ':'hidden '}' lg:relative    lg:gap-10 lg:flex lg:flex-row  flex-row   my-auto  font-Inter text-[#d1d6da] '}`}>
                    <p>Categories</p>
                    <p>Website Builders</p>
                    <p>Todays's Deals</p>          
                </div>
            

             <div className='lg:hidden flex items-center justify-center mr-1 ' onClick={togglenav}>
                    {!navopen?
                     <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                     <path d="M 5 9 L 5 11 L 45 11 L 45 9 L 5 9 z M 5 24 L 5 26 L 45 26 L 45 24 L 5 24 z M 5 39 L 5 41 L 45 41 L 45 39 L 5 39 z"></path>
                 </svg>:
                 <p>X</p>
                    }
                </div>
           </div>
        </div>
    )
}

export default Navbar;