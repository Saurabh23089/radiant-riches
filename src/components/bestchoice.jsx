import trophy from '../images/trophy.jpg';
import suiteone from '../images/suiteimages/suiteone.jpg';
import dropdownicon from '../images/dropdownicon.jpg';
import stars from '../images/suiteimages/stars.jpg';
import itag from '../images/itag.jpg';
import tick from '../images/suiteimages/tick.jpg';



const Bestchoice = () => {
    return (
        <div className="flex items-center flex-col justify-center mt-6 select-none ">

            {/* Choice 1 */}
            <div className="flex flex-row relative text-[red] w-4/6">
                <div className='text-[#ff7724]'>
                    <img src={trophy} alt="trophy" className='top-2 left-0 w-12 bg-red-500 h-12 absolute' />
                    <p className="absolute top-12 ">🏆Best Choice</p>
                    <div className='flex   lg:flex-row flex-col bg-transparent relative border-[#ffffff]  my-2 mt-8 gap-12  top-7  rounded-md w-5/6 mb-12  '>

                        <div className='lg:w-1/2 w-5/6 md:ml-4  md:mx-4 mx-4 mt-8'>
                            <img src={suiteone} alt="suiteone" className='w-full' />
                        </div>

                        <div className='mt-4 mx-4 '>
                            <p className=' text-[12px] text-black font-normal'><p className='font-bold'>WixPro 72-Inch Responsive Website Builder -</p> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
                            <p className='font-bold text-[12px]'>Main Highlights</p>
                            <p className='  font-normal text-[12px] mt-1 text-[#4b5665]'>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
                            <p className='flex flex-row gap-2 mt-2'>
                                <p className='text-[12px] text-[#1b88f4]'>Show more</p>
                                <img src={dropdownicon} alt="dropdownicon.jpg" className='h-5 w-5' />
                            </p>
                        </div>

                        <div className='lg:w-full w-3/6   flex-col items-center justify-end lg:mx-4 mx-auto   '>
                            <div className='flex text-[#074786] flex-col w-5/6  items-center justify-center bg-[#f3f9ff] border rounded-md border-[#ffffff] text-center h-1/2 px-4'>
                                <img src={itag} alt="itag" className='relative top-2 left-4 w-2 h-2' />
                                <p className='text-[32px] px-4'>9.8</p>
                                <p className='text-[14px]'>Exceptional</p>
                                <p className='mb-2'>⭐⭐⭐⭐4/5</p>
                            </div>
                            <button className=' mt-12 mx-auto relative ml-2 h-12 lg:px-24 sm:px-12 px-4  sm:ml-6 lg:ml-0  rounded-xl text-[#ffffff] bg-[#1b88f4] mb-12 lg:mb-0  '>View</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* Choice 2 */}
            <div className="flex flex-row relative text-[red] w-4/6">
                <div className='text-[#ff7724]'>
                    <img src={trophy} alt="trophy" className='top-2 left-0 w-12 bg-red-500 h-12 absolute' />
                    <p className="absolute top-12 ">💎 Best Value</p>
                    <div className='flex   lg:flex-row flex-col bg-transparent relative border-[#ffffff]  my-2 mt-8 gap-12  top-7  rounded-md w-5/6 mb-12  '>

                        <div className='lg:w-1/2 w-5/6 md:ml-4  md:mx-4 mx-4 mt-8'>
                            <img src={suiteone} alt="suiteone" className='w-full' />
                        </div>

                        <div className='mt-4 mx-4 '>
                            <p className=' text-[12px] text-black font-normal'><p className='font-bold'>SiteCraft 68-Inch Ultimate Web Design Studio -</p> Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)</p>
                            <p className='font-bold text-[12px]'>Main Highlights</p>
                            <p className='  font-normal text-[12px] mt-1 text-[#4b5665]'>[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.</p>
                            <p className='flex flex-row gap-2 mt-2'>
                                <p className='text-[12px] text-[#1b88f4]'>Show more</p>
                                <img src={dropdownicon} alt="dropdownicon.jpg" className='h-5 w-5' />
                            </p>
                        </div>

                        <div className='lg:w-full w-3/6   flex-col items-center justify-end lg:mx-4 mx-auto   '>
                            <div className='flex text-[#074786] flex-col w-5/6  items-center justify-center bg-[#f3f9ff] border rounded-md border-[#ffffff] text-center h-1/2 px-4'>
                                <img src={itag} alt="itag" className='relative top-2 left-4 w-2 h-2' />
                                <p className='text-[32px] px-4'>9.5</p>
                                <p className='text-[14px]'>Exceptional</p>
                                <p className='mb-2'>⭐⭐⭐⭐1/2</p>

                            </div>
                            <button className=' mt-12 mx-auto relative ml-2 h-12 lg:px-24 sm:px-12 px-4  sm:ml-6 lg:ml-0  rounded-xl text-[#ffffff] bg-[#1b88f4] mb-12 lg:mb-0  '>View</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Choice 3 */}
            <div className="flex flex-row relative text-[red] w-4/6">
                <div className='text-[#ff7724]'>
                    <img src={trophy} alt="trophy" className='top-2 left-0 w-12 bg-red-500 h-12 absolute' />
                    <div className='flex   lg:flex-row flex-col bg-transparent relative border-[#ffffff]  my-2 mt-8 gap-12  top-7  rounded-md w-5/6 mb-12  '>

                        <div className='lg:w-1/2 w-5/6 md:ml-4  md:mx-4 mx-4 mt-8'>
                            <img src={suiteone} alt="suiteone" className='w-full' />
                        </div>

                        <div className='mt-4 mx-4 '>
                            <p className=' text-[12px] text-black font-normal'><p className='font-bold'>WixPro 72-Inch Responsive Website Builder -</p> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
                            <p className='font-bold text-[12px]'>Main Highlights</p>
                            <p className='  font-normal text-[12px] mt-1 text-[#4b5665]'>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
                            <p className='flex flex-row gap-2 mt-2'>
                                <p className='text-[12px] text-[#1b88f4]'>Show more</p>
                                <img src={dropdownicon} alt="dropdownicon.jpg" className='h-5 w-5' />
                            </p>
                        </div>

                        <div className='lg:w-full w-3/6   flex-col items-center justify-end lg:mx-4 mx-auto   '>
                            <div className='flex text-[#074786] flex-col w-5/6  items-center justify-center bg-[#f3f9ff] border rounded-md border-[#ffffff] text-center h-1/2 px-4'>
                                <img src={itag} alt="itag" className='relative top-2 left-4 w-2 h-2' />
                                <p className='text-[32px] px-4'>9.3</p>
                                <p className='text-[14px]'>Exceptional</p>
                                <p className='mb-2'>⭐⭐⭐⭐1/3</p>
                            </div>
                            <button className=' mt-12 mx-auto relative ml-2 h-12 lg:px-24 sm:px-12 px-4  sm:ml-6 lg:ml-0  rounded-xl text-[#ffffff] bg-[#1b88f4] mb-12 lg:mb-0  '>View</button>
                        </div>
                    </div>
                </div>
            </div>


            {/** Choice 4*/}
            <div className="flex flex-row relative text-[red] lg:w-4/6 lg:mx-2 mx-8  ">
                <div className='text-[#ff7724]'>
                    <img src={trophy} alt="trophy" className='top-2 left-0 w-12 bg-red-500 h-12 absolute' />
                    <div className='flex   lg:flex-row flex-col bg-transparent relative border-[#ffffff]  my-2 mt-8 gap-12  top-7  rounded-md w-5/6 mb-12  '>
                        <div className='lg:w-1/2 w-5/6   relative mt-8'>
                            <img src={suiteone} alt="suiteone" className='relative w-96' />
                        </div>

                        <div className='mt-4 mx-4 w-full '>
                            <p className=' text-[12px] text-black font-normal'><p className='font-bold'>CDK Response Builder - </p>An extensive library of widgets and apps, and detailed step-by-step guides</p>
                            <p className='text-[#074726] text-[13px] p-1 '>26% Off</p>
                            <p className='font-bold text-[12px]'>Main Highlights</p>
                            <p className='  font-normal text-[12px] mt-1'>
                                <div className='flex flex-col bg-[#fff4ed] py-4 px-4 rounded-md w-full gap-2'>

                                    <div className='flex flex-row gap-2'>
                                        <p className='text-[#1b88f4] bg-[#ffffff] px-2'>9.1</p>
                                        <div>Building Responsive</div>
                                    </div>


                                    <div className='flex flex-row gap-2'>
                                        <div className='text-[#1b88f4] bg-[#ffffff] px-2'>8.9</div>
                                        <div>Cool</div>

                                    </div>

                                    <div className='flex flex-row gap-2'>
                                        <div className='text-[#1b88f4] bg-[#ffffff] px-2'>8.9</div>
                                        <div>Docs</div>

                                    </div>


                                </div>
                            </p>

                            <p className='flex flex-col gap-1 text-[16px]'>Why we love it
                                <div className='flex flex-row gap-2'>
                                    <img src={tick} alt="tick" />
                                    <p className='text-[15px]'>Documentation</p>

                                </div>
                                <div className='flex flex-row gap-2'>
                                    <img src={tick} alt="tick" />
                                    <p className='text-[15px]'>Easy Use</p>

                                </div>
                                <div className='flex flex-row gap-2'>
                                    <img src={tick} alt="tick" />
                                    <p className='text-[15px]'>Out of box</p>
                                </div>
                            </p>


                            <p className='flex flex-row gap-2 mt-2'>
                                <p className='text-[12px] text-[#1b88f4]'>Show more</p>
                                <img src={dropdownicon} alt="dropdownicon.jpg" className='h-5 w-5' />
                            </p>
                        </div>

                        <div className='lg:w-full w-3/6 h-1/2 flex flex-col items-end justify-end lg:mx-12 mx-auto lg:gap-32 gap-8    '>
                            <div className='flex text-[#074786] flex-col w-5/6  items-center justify-center bg-[#f3f9ff] border rounded-md border-[#ffffff] text-center h-1/2 px-4'>
                                <img src={itag} alt="itag" className='relative top-2 left-4 w-2 h-2' />
                                <p className='text-[32px] px-4'>9.1</p>
                                <p className='text-[14px]'>Very Good</p>
                                <p className='mb-2'>⭐⭐⭐⭐1/10</p>
                            </div>
                            <div className=''>
                                <button className=' mt-12 mx-auto relative ml-2 h-12 lg:px-24 sm:px-12 px-4  sm:ml-6 lg:ml-0  rounded-xl text-[#ffffff] bg-[#1b88f4] mb-12 lg:mb-0  '>View</button>

                            </div>


                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Bestchoice;