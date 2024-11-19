import React from "react"
export default function HomePage(){
  return(
    <div className="h-[7678px] w-[1280px] bg-[#f7f7f7] text-[black]">
{/* ----------------------------userID--------- */}
      <div className="h-[54px] w-[1280px] flex justify-center items-center border-2">

        <div style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[30px] w-[386px] flex justify-center items-center text-[14px] font-normal ">
           <p>Phone Number: 956 742 455 678</p>
           <p className="pl-[10px] pr-[10px] ">|</p>
           <p>Email:info@ddsgnr.com</p>
         </div>

         <div className="h-[30px] w-[736px] flex justify-center items-end text-[14px]">icons</div>
      </div>

{/* ----------------------------navBAR--------- */}
      <div className="mt-[15px] h-[72px] w-[1280px] flex justify-evenly items-center border-2">
        <div className="flex">
          <div className="h-[30.38px] w-[32.58px] bg-[url('/images/dasgnr_logo.png')] bg-cover"></div>
          <h3 style={{ fontFamily: 'Inter, sans-serif' }} className="pl-[5px] text-[25.07px] font-bold">Dasgnr</h3>
        </div>

        <div style={{ fontFamily: 'Roboto, sans-serif' }} className="flex text-[16px] font-normal ">
          <a  href="#">Home</a>
          <a className="pl-[32px]" href="#">Courses</a>
          <a className="pl-[32px]" href="#">Services</a>
          <a className="pl-[32px]" href="#">Achievement</a>
          <a className="pl-[32px]" href="#">About Us</a>
          <a className="pl-[32px]" href="#">Testimonial</a>
        </div>

        <div className="flex text-[16px] font-normal ">
          <button className="h-[40px] w-[80px] border border-black rounded-md">Login in</button>
          <button className="h-[40px] w-[95px] ml-[16px] bg-[black] text-[#f7f7f7] rounded-md">Sign up</button>
        </div>
      </div>

{/* ----------------------------HOMEsection--------- */}
      <div className="h-[800px] w-[1280px] border-2">

        <div className="mt-[200px] h-[335px] w-[640px] pl-[80px]	border-2">
          <h1 style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[134px] w-[500px] font-bold text-[56px]">Learn new skills online with ease</h1>
          <p style={{ fontFamily: 'Roboto, sans-serif' }} className="mt-[45px] h-[54px] w-[500px] mt-[15px] font-normal text-[18px] ">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
          <span className="h-[64px] w-[358px]">
          <button style={{ fontFamily: 'Roboto, sans-serif' }} className="mt-[40px] font-normal text-[16px] bg-[black] text-[white] rounded-md h-[48px] w-[164px]">Start learning now</button>
          <button style={{ fontFamily: 'Roboto, sans-serif' }} className="ml-[16px] font-normal text-[16px] border border-black rounded-md h-[48px] w-[164px]">Explore Courses</button>
          </span>
        </div>
        <div  className="w-[640px] h-[900px] bg-[url('/images/hero_girl.jpeg')] bg-cover">

        </div>

      </div>

    </div>
  )
}
