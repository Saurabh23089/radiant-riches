import dropdownicon from '../images/dropdownicon.jpg';

const Footer = () => {
    return (
        <div className="bg-[#212731] w-full  items-center justify-center lg:gap-24 gap-8 relative font-Inter py-12  select-none  flex ">
          <div className='w-4/6 flex sm:flex-row gap-16 flex-col '>
          <div className=" font-normal flex flex-col gap-6 mt-6 text-[16px] text-[#ffffff]">Categories
            <div className="flex flex-col gap-4 text-[12px] text-[#b6bdc4]">
            <p>Web Builder</p>
            <p>Hosting</p>
            <p>Data Center</p>
            <p>Robotic-Automation</p>

            </div>
           
           </div>

           <div className=" font-normal flex flex-col gap-4 mt-8 text-[16px] text-[#ffffff] ">
            Contacts
            <div className="flex flex-col gap-4 mt-4 text-[12px] text-[#b6bdc4]">
            <p>Contact</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Categories</p>
            <p>About</p>

            </div>
            
           </div>

          

           <div className="text-[#d1d6da] flex items-center">
            United States
            <img src={dropdownicon} alt="dropdown" className='bg-[#212731] inline-flex ml-1 w-4 h-4 '/>
           </div>

          </div>
        </div>
    )
}

export default Footer;