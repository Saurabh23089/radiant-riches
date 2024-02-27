const Signup = () => {
    return (
        <div className="flex items-center w-full gap-12   justify-center my-12 select-none ">
          <div className="w-4/6 flex flex-col lg:flex-row gap-24">
          <div className="text-[32px] text-[#5c6874] items-left">
               Sign up and get exclusive
               <br/>
                special deals
            </div>

            <div className="relative justify-center lg:w-1/4 max-w-1/2 mx-4 flex items-center border border-[#ffffff]">
                <input type="email" className="rounded-md w-full h-10 px-1 outline-none bg-[] "/>
                <button className="inline-flex w-20 h-10  items-center text-[#ffffff] border rounded-md bg-[#1b88f4] ">Sign up</button>
            </div>
          </div>
        </div>


    )
}

export default Signup;