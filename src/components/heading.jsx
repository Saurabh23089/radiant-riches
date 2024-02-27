import ticked from '../images/ticked.jpg';
import itag from '../images/itag.jpg';
import dropdownicon from '../images/dropdownicon.jpg';

const Heading = () => {
    return (
        <div className="flex flex-col overflow-hidden">
        <div className="flex flex-col justify-center items-center ">
        <p className="mt-4 w-4/6 text-left border-b lg:text-[48px] md:text-[32px] sm:text-[20px] text-[14px] py-4  ">Best website builder in the US</p>
       </div>

       <div className="flex flex-row justify-center items-center   ">
     
       
       <p className="mt-4 flex lg:gap-8 sm:gap-4 gap-2 justify-between  flex flex-row w-4/6 text-left border-b lg:text-[14px] md:text-[10px] sm:text-[10px] text-[7px] py-4 ">
       <div className='flex sm:gap-4 gap-2'>
       <div className='flex items-center justify-center'>
       <img src={ticked} alt="ticked" className='mr-4 w-5 h-5'/>
       <p>Last Updated - February 22 , 2022</p>

       </div>

       <div className='flex gap-3 items-center justify-center'>
       <img src={itag} alt="itag" className='sm:w-5 sm:h-5 h-2 w-2'/>
       <p>Advertising Disclosure</p>

       </div>

       </div>
      
       
      
       <div className='flex gap-2 items-center'>
       <p>Top Relevant</p>
       <img src={dropdownicon} alt="dropdownicon" className='h-5 w-5 '/>
       </div>
       
       </p>
        
       
        
       </div>

       <div className='flex justify-center my-4 text-[#4b5665] lg:text-[13px] sm:text-[10px] text-[8px] '>
        <p className='flex flex-row w-4/6 sm:gap-8 gap-0'>
        <p className='border rounded-md sm:px-4 px-1 py-1 border-[#ffffff]'>Tools</p>
        <p className='border rounded-md sm:px-4 px-1  py-1 border-[#ffffff]'>AWS Builder</p>
        <p className='border rounded-md sm:px-4 px-1  py-1 border-[#ffffff]'>Start Build</p>
        <p className='border rounded-md sm:px-4 px-1 py-1 border-[#ffffff]'>Build Supplies</p>
        <p className='border rounded-md sm:px-4 px-1  py-1 border-[#ffffff]'>Tooling</p>
        <p className='border rounded-md sm:px-4 px-1  py-1 border-[#ffffff]'>Blue Hoisting</p>

        </p>
        
       </div>

       <div className='flex justify-center'>
        <p className='flex w-4/6 sm:gap-3 gap-2 text-[#727d87] lg:text-[14px] sm:text-[10px] text-[8px]'>
        <p>Home</p>
        <p>></p>
        <p>Hosting for all</p>
        <p>></p>
        <p>Hosting6</p>
        <p>></p>
        <p>Hosting5</p>
        <p>></p>

        </p>
        
       </div>

      
        </div>
       
    )
}

export default Heading;
