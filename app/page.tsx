import React from "react"
export default function HomePage(){
  return(
    <div className="h-[7678px] w-[1280px] bg-[#ffffff] text-[black]">
{/* ----------------------------userID--------- */}
      <div className=" h-[54px] w-[1280px] flex justify-center bg-[#f7f7f7] items-center border">

        <div style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[30px] w-[386px] flex justify-center items-center text-[14px] font-normal ">
           <p>Phone Number: 956 742 455 678</p>
           <p className="pl-[10px] pr-[10px] ">|</p>
           <p>Email:info@ddsgnr.com</p>
         </div>

         <div className="h-[30px] w-[736px] flex justify-center items-end text-[14px]">icons</div>
      </div>

{/* ----------------------------navBAR--------- */}
      <div className=" mt-[15px] h-[72px] w-[1280px] flex justify-evenly bg-[#f7f7f7] items-center border">
        <div className="flex">
          <div className="h-[30.38px] w-[32.58px] bg-[url('/images/dasgnr_logo.png')] bg-cover"></div>
          <h3 style={{ fontFamily: 'Inter, sans-serif' }} className="pl-[5px] text-[25.07px] font-bold">Dasgnr</h3>
        </div>

        <div style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[45px] pl-[10px] pr-[10px] flex items-center text-[16px] font-normal bg-[#ffffff]">
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
      <div className="h-[800px] w-[1280px] bg-[white] ">

        <div className="mt-[200px] h-[335px] w-[640px] bg-[#ffffff] pl-[80px]">
          <h1 style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[134px] w-[500px] font-bold text-[56px]">Learn new skills online with ease</h1>
          <p style={{ fontFamily: 'Roboto, sans-serif' }} className="mt-[45px] h-[54px] w-[500px] mt-[15px] font-normal text-[18px] ">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
          <span className="h-[64px] w-[358px]">
          <button style={{ fontFamily: 'Roboto, sans-serif' }} className="mt-[40px] font-normal text-[16px] bg-[black] text-[white] rounded-md h-[48px] w-[164px]">Start learning now</button>
          <button style={{ fontFamily: 'Roboto, sans-serif' }} className="ml-[16px] font-normal text-[16px] border border-black rounded-md h-[48px] w-[164px]">Explore Courses</button>
          </span>
        </div>

        <div  className="mt-[-537px] ml-[638px] w-[640px] h-[800px] bg-[url('/images/hero_girl.jpeg')] bg-cover bg-center">
        </div>
        
      </div>
{/* -----------------------------------------ADVERTISEMENT--------- */}
       <div className="mt-[-200px] flex items-center h-[228px] w-[1280px] bg-[#f7f7f7] border">
        <div className="h-[68px] w-[335px] ">
          <h5 style={{ fontFamily: 'Roboto, sans-serif' }}  className="font-bold text-[24px]">
          Trusted by 2000+ companies worldwide.
          </h5>
        </div>

        <div className="flex justify-evenly items-center h-[68px] w-[880px] ml-[65px] ">
          <div className="h-[52.52px] w-[123.8px] bg-[url('/images/ad_1_logo.png')] bg-cover">  </div>
          <div className="h-[52.52px] w-[123.8px] bg-[url('/images/ad_2_logo.png')] bg-cover">  </div>
          <div className="h-[52.52px] w-[123.8px] bg-[url('/images/ad_3_logo.png')] bg-cover">  </div>
          <div className="h-[52.52px] w-[123.8px] bg-[url('/images/ad_4_logo.png')] bg-cover">  </div>
          <div className="h-[52.52px] w-[123.8px] bg-[url('/images/ad_5_logo.png')] bg-cover">  </div>
          <div className="h-[52.52px] w-[123.8px] bg-[url('/images/ad_6_logo.png')] bg-cover">  </div>
        </div>
       </div>

{/* -----------------------------------------EXPOLOREsection---------- */}

                  {/* -------------EX_DIV_1------------ */}
       <div className="h-[1050px] w-[1280px] bg-[#ffffff]">
        <div style={{ fontFamily: 'Roboto, sans-serif' }}  className="h-[415px] w-[1280px] pt-[150px] pl-[250px] border">
            <h2 className="font-bold text-[48px]">Explore Courses By Category</h2>
            <p className="font-normal text-[18px]">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>

        </div>
          
                  {/* -------------EX_DIV_2------------ */}
        <div className="h-[635px] w-[1280px]">
 {/* ---------------------LAYER_1--------------- */}
          <div className="flex justify-between items-center h-[132px] w-[1280px] ">
            {/* -------SEC1_box_1---- */}
             <div className="flex justify-evenly items-center h-[132px] w-[410.67px] bg-[#f7f7f7]">
                 <div className="flex justify-evenly items-center h-[100px] w-[100px] bg-[#ffffff]"> 
                     <div className="h-[32px] w-[32px] bg-[url('/images/pen-tool-2.png')] bg-cover"></div>
                 </div>
                 <div style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[57px] w-[246.67px]">
                  <p className="font-semibold text-[20px]">Design & Development</p>
                  <p className="font-normal text-[18px]">50+ Courses Available</p>
                 </div>  
             </div>
             {/* -------SEC1_box_2---- */}
             <div className="flex justify-evenly items-center h-[132px] w-[410.67px] bg-[#f7f7f7] ">
                 <div className="flex justify-evenly items-center h-[100px] w-[100px] bg-[#ffffff]"> 
                     <div className="h-[32px] w-[32px] bg-[url('/images/volume-high.png')] bg-cover"></div>
                 </div>
                 <div style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[57px] w-[246.67px]">
                  <p className="font-semibold text-[20px]">Marketing</p>
                  <p className="font-normal text-[18px]">50+ Courses Available</p>
                 </div>  
             </div>
             {/* -------SEC1_box_3---- */}
             <div className="flex justify-evenly items-center h-[132px] w-[410.67px] bg-[#f7f7f7] ">
                 <div className="flex justify-evenly items-center h-[100px] w-[100px] bg-[#ffffff]"> 
                     <div className="h-[32px] w-[32px] bg-[url('/images/group.png')] bg-cover"></div>
                 </div>
                 <div style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[57px] w-[246.67px]">
                  <p className="font-semibold text-[20px]">Development</p>
                  <p className="font-normal text-[18px]">50+ Courses Available</p>
                 </div>  
             </div>
          </div>
{/* ---------------------------------------------------------------------------------           */}

    {/* ---------------------LAYER_2--------------- */}
    <div className="flex justify-between items-center h-[132px] w-[1280px] mt-[62px]">
            {/* -------SEC2_box_1---- */}
             <div className="flex justify-evenly items-center h-[132px] w-[410.67px] bg-[#f7f7f7] ">
                 <div className="flex justify-evenly items-center h-[100px] w-[100px] bg-[#ffffff]"> 
                     <div className="h-[32px] w-[32px]"></div>
                 </div>
                 <div style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[57px] w-[246.67px]">
                  <p className="font-semibold text-[20px]">Communication</p>
                  <p className="font-normal text-[18px]">50+ Courses Available</p>
                 </div>  
             </div>
             {/* -------SEC2_box_2---- */}
             <div className="flex justify-evenly items-center h-[132px] w-[410.67px] bg-[#f7f7f7] ">
                 <div className="flex justify-evenly items-center h-[100px] w-[100px] bg-[#ffffff]"> 
                     <div className="h-[32px] w-[32px]"></div>
                 </div>
                 <div style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[57px] w-[246.67px]">
                  <p className="font-semibold text-[20px]">Digital Marketing</p>
                  <p className="font-normal text-[18px]">50+ Courses Available</p>
                 </div>  
             </div>
             {/* -------SEC2_box_3---- */}
             <div className="flex justify-evenly items-center h-[132px] w-[410.67px] bg-[#f7f7f7] ">
                 <div className="flex justify-evenly items-center h-[100px] w-[100px] bg-[#ffffff]"> 
                     <div className="h-[32px] w-[32px]"></div>
                 </div>
                 <div style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[57px] w-[246.67px]">
                  <p className="font-semibold text-[20px]">Self Development</p>
                  <p className="font-normal text-[18px]">50+ Courses Available</p>
                 </div>  
             </div>
          </div>
{/* --------------------------------------------------------------------------------- */}


           {/* ---------------------LAYER_3--------------- */}
           <div className="flex justify-between items-center h-[132px] w-[1280px] mt-[62px]">
            {/* -------SEC3_box_1---- */}
             <div className="flex justify-evenly items-center h-[132px] w-[410.67px] bg-[#f7f7f7] ">
                 <div className="flex justify-evenly items-center h-[100px] w-[100px] bg-[#ffffff]"> 
                     <div className="h-[32px] w-[32px]"></div>
                 </div>
                 <div style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[57px] w-[246.67px]">
                  <p className="font-semibold text-[20px]">Business</p>
                  <p className="font-normal text-[18px]">50+ Courses Available</p>
                 </div>  
             </div>
             {/* -------SEC3_box_2---- */}
             <div className="flex justify-evenly items-center h-[132px] w-[410.67px] bg-[#f7f7f7] ">
                 <div className="flex justify-evenly items-center h-[100px] w-[100px] bg-[#ffffff]"> 
                     <div className="h-[32px] w-[32px]"></div>
                 </div>
                 <div style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[57px] w-[246.67px]">
                  <p className="font-semibold text-[20px]">Finance</p>
                  <p className="font-normal text-[18px]">50+ Courses Available</p>
                 </div>  
             </div>
             {/* -------SEC3_box_3---- */}
             <div className="flex justify-evenly items-center h-[132px] w-[410.67px] bg-[#f7f7f7] ">
                 <div className="flex justify-evenly items-center h-[100px] w-[100px] bg-[#ffffff]"> 
                     <div className="h-[32px] w-[32px]"></div>
                 </div>
                 <div style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[57px] w-[246.67px]">
                  <p className="font-semibold text-[20px]">Consulting</p>
                  <p className="font-normal text-[18px]">50+ Courses Available</p>
                 </div>  
             </div>
          </div>
{/* --------------------------------------------------------------------------------- */}


           {/* ---------------------LAYER_4--------------- */}
            <div className="flex justify-center items-center">
              <div style={{ fontFamily: 'Roboto, sans-serif' }} className="mt-[62px] h-[48px] w-[155px] border border-black rounded-md font-normal text-[16px] flex justify-center items-center">
                <button>View All Courses</button>
              </div>
            </div>

   {/*  espolre_div_2 */}
        </div>

   {/*  espolre */}
       </div>  

       {/* --------------------EXPOLRE_END-------------------------------------------------------------- */}


 {/*  body */}
    </div>
  )
}
