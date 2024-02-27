import suiteone from '../images/suiteimages/suiteone.jpg';

const Deals = () => {
    return (
        <div className="flex flex-col  gap-8  my-8 items-center select-none  ">
            
            <div className='flex flex-row relative text-[red] w-4/6 text-center text-[#2c384a] '>
                <p className='text-center'>
                    Realted Deals you might like for
                </p>
            </div>

            <div className="flex lg:flex-row lg:items-left items-center  flex-col rounded-md w-4/6 gap-8 ">
                <div className="flex flex-col gap-2 bg-[#ffffff] border rounded-md border-[#ffffff]">
                   <div>
                      <img src={suiteone} alt="suiteone" className='w-1/2'/>
                   </div>
                   <div className='flex text-[10px] gap-2 text-[#074786] '>
                   <p className='p-1 bg-[#f2f4f7] rounded-md ' >20% Off</p>
                   <p className='p-1 bg-[#f2f4f7] rounded-md'>Limited Time</p>
                   </div>
                   <p className='text-[13px] text-[#626e79] w-full font-bold'>WebBuilder1</p>
                   <p className='text-[12px] w-full'>Computer Modern Classic with wix Support</p>
                   <div className='flex items-center gap-2'>
                    <p className='text-[12px] text-[#5c6874]'>$39.96</p>
                    <p className='text-[8px] text-[#9fa9b3]'>$49.96</p>
                    <p className='text-[8px] text-[#ef4c5d]'>(20% off)</p>
                   </div>
                   <button className='text-center w-4/6 mt-4 bg-[#1b88f4] px-4 rounded-md py-2'>
                    View Deal
                   </button>
                </div>

                <div>
                <div className="flex flex-col gap-2 bg-[#ffffff]">
                   <div>
                      <img src={suiteone} alt="suiteone" className='w-1/2'/>
                   </div>
                   <div className='flex text-[10px] gap-2 text-[#074786] '>
                   <p className='p-1 bg-[#f2f4f7] rounded-md ' >20% Off</p>
                   <p className='p-1 bg-[#f2f4f7] rounded-md'>Limited Time</p>
                   </div>
                   <p className='text-[13px] text-[#626e79]  w-full font-bold'>WebBuilder1</p>
                   <p className='text-[12px] w-full'>Computer Modern Classic with wix Support</p>
                   <div className='flex items-center gap-2'>
                    <p className='text-[12px] text-[#5c6874]'>$39.96</p>
                    <p className='text-[8px] text-[#9fa9b3]'>$49.96</p>
                    <p className='text-[8px] text-[#ef4c5d]'>(20% off)</p>
                   </div>
                   <button className='text-center w-4/6 mt-4 bg-[#1b88f4] px-4 rounded-md py-2'>
                    View Deal
                   </button>
                </div>

                </div>

                <div>
                <div className="flex flex-col gap-2">
                   <div>
                      <img src={suiteone} alt="suiteone" className='w-1/2'/>
                   </div>
                   <div className='flex text-[10px] gap-2 text-[#074786] '>
                   <p className='p-1 bg-[#f2f4f7] rounded-md ' >20% Off</p>
                   <p className='p-1 bg-[#f2f4f7] rounded-md'>Limited Time</p>
                   </div>
                   <p className='text-[13px] text-[#626e79] w-full font-bold'>WebBuilder1</p>
                   <p className='text-[12px] w-full'>Computer Modern Classic with wix Support</p>
                   <div className='flex items-center gap-2'>
                    <p className='text-[12px] text-[#5c6874]'>$39.96</p>
                    <p className='text-[8px] text-[#9fa9b3]'>$49.96</p>
                    <p className='text-[8px] text-[#ef4c5d]'>(20% off)</p>
                   </div>
                   <button className='text-center w-4/6 mt-4 bg-[#1b88f4] px-4 rounded-md py-2 '>
                    View Deal
                   </button>
                </div>

                </div>
            </div>

        </div>
    )
}

export default Deals;