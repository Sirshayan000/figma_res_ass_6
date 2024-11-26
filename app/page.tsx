import React from "react"
export default function HomePage(){
  return(
    <div className="h-[7678px] w-[1280px] bg-[#ffffff] text-[black] max-lg:h-[8228px] max-lg:w-[428px]">
{/* ----------------------------userID--------- */}
      <div className=" h-[54px] w-[1280px] flex justify-center bg-[#f7f7f7] items-center border
       sm:flex max-lg:hidden  ">

         <div style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[30px] w-[386px] flex justify-center items-center text-[14px] font-normal ">
           <p className="pr-[10px]">Phone Number: 956 742 455 678</p>
           <p className=" h-[30px] w-[1px] bg-[url('/images/line-3.png')] bg cover"></p>
           <p className="pl-[10px]">Email:info@ddsgnr.com</p>
         </div>

         <div className="h-[30px] w-[736px] flex justify-end items-center text-[14px]">

           <div className="h-[24px] w-[132px] flex justify-between">
              <div className="h-[18px] w-[10px] bg-[url('/images/facebook.png')] bg-cover"></div>
              <div className="h-[18px] w-[18px] bg-[url('/images/insta.png')] bg-cover"></div>
              <div className="mt-[3px] h-[15.3px] w-[18px] bg-[url('/images/twit.png')] bg-cover"></div>
              <div className="mt-[-2px] h-[24px] w-[24px] bg-[url('/images/Linkedin.png')] bg-cover"></div>
           </div>

         </div>
      </div>

{/* ----------------------------navBAR--------- */}
      <div className=" mt-[15px] h-[72px] w-[1280px] flex justify-evenly bg-[#f7f7f7] items-center border
      max-lg:h-[72px] max-lg:w-[428px] max-lg:flex max-lg:justify-between max-lg:items-center max-lg:mt-[0px]">
        <div className="flex max-lg:ml-[20px]">
          <div className="h-[30.38px] w-[32.58px] bg-[url('/images/dasgnr-logo.png')] bg-cover"></div>
          <h3 style={{ fontFamily: 'Inter, sans-serif' }} className="pl-[5px] text-[25.07px] font-bold">Dasgnr</h3>
        </div>

        <div style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[45px] pl-[10px] pr-[10px] flex items-center text-[16px] font-normal bg-[#ffffff] 
        max-lg:hidden ">
          <a  href="#">Home</a>
          <a className="pl-[32px]" href="#">Courses</a>
          <a className="pl-[32px]" href="#">Services</a>
          <a className="pl-[32px]" href="#">Achievement</a>
          <a className="pl-[32px]" href="#">About Us</a>
          <a className="pl-[32px]" href="#">Testimonial</a>
        </div>

        <div className="flex text-[16px] font-normal 
        max-lg:hidden">
          <button className="h-[40px] w-[80px] border border-black rounded-md">Login in</button>
          <button className="h-[40px] w-[95px] ml-[16px] bg-[black] text-[#f7f7f7] rounded-md">Sign up</button>
        </div>

        <div className="h-[24px] w-[24px] bg-[url('/images/Menu.png')] bg-cover
        max-lg:mr-[20px] sm:hidden">

        </div>
      </div>

{/* ----------------------------HOMEsection--------- */}
      <div className="h-[800px] w-[1280px] bg-[white] 
      max-lg:h-[780px] max-lg:w-[428px] ">

        <div className="mt-[200px] h-[335px] w-[640px] bg-[#ffffff] pl-[80px] 
        max-lg:mt-0 max-lg:h-[390px] max-lg:w-[428px] max-lg:pt-[50px] max-lg:ml-[-50px]">
          <h1 style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[134px] w-[500px] font-bold text-[56px]
          max-lg:text-[40px] max-lg:h-[96px] max-lg:w-[380px]">Learn new skills online with ease</h1>
          <p style={{ fontFamily: 'Roboto, sans-serif' }} className="mt-[45px] h-[54px] w-[500px] mt-[15px] font-normal text-[18px] 
          max-lg:text-[18px] max-lg:h-[54px] max-lg:w-[380px]">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
          <span className="h-[64px] w-[358px]">
          <button style={{ fontFamily: 'Roboto, sans-serif' }} className="mt-[40px] font-normal text-[16px] bg-[black] text-[white] rounded-md h-[48px] w-[164px]">Start learning now</button>
          <button style={{ fontFamily: 'Roboto, sans-serif' }} className="ml-[16px] font-normal text-[16px] border border-black rounded-md h-[48px] w-[164px]">Explore Courses</button>
          </span>
        </div>

        <div  className="mt-[-537px] ml-[638px] w-[640px] h-[800px] bg-[url('/images/hero-girl.jpeg')] bg-cover bg-center
        max-lg:mt-0 max-lg:ml-0 max-lg:h-[390px] max-lg:w-[428px] max-lg:bg-top" >
        </div>
        
      </div>
{/* -----------------------------------------ADVERTISEMENT--------- */}
       <div className="mt-[-200px] flex items-center h-[228px] w-[1280px] bg-[#f7f7f7] border
       max-lg:h-[239.34px] max-lg:w-[428px] max-lg:block max-lg:mt-[0px]">
        <div className="h-[68px] w-[335px] 
        max-lg:hidden">
          <h5 style={{ fontFamily: 'Roboto, sans-serif' }}  className="font-bold text-[24px]">
          Trusted by 2000+ companies worldwide.
          </h5>
        </div>

        <div className="flex justify-evenly items-center h-[68px] w-[880px] ml-[65px] 
        max-lg:hidden">
          <div className="h-[52.52px] w-[123.8px] bg-[url('/images/ad-1-logo.png')] bg-cover">  </div>
          <div className="h-[52.52px] w-[123.8px] bg-[url('/images/ad-2-logo.png')] bg-cover">  </div>
          <div className="h-[52.52px] w-[123.8px] bg-[url('/images/ad-3-logo.png')] bg-cover">  </div>
          <div className="h-[52.52px] w-[123.8px] bg-[url('/images/ad-4-logo.png')] bg-cover">  </div>
          <div className="h-[52.52px] w-[123.8px] bg-[url('/images/ad-5-logo.png')] bg-cover">  </div>
          <div className="h-[52.52px] w-[123.8px] bg-[url('/images/ad-6-logo.png')] bg-cover">  </div>
        </div>
       

       {/* max-lg */}
      <div className="h-[54px] w-[329px] hidden
      max-lg:block max-lg:mt-[40px] max-lg:ml-[20px]">
          <h5 style={{ fontFamily: 'Roboto, sans-serif' }}  className="font-bold text-[16px]">
          Trusted by the worlds best companies [social proof to build credibility]
          </h5>
        </div>

 
       <div className="flex justify-evenly items-center h-[68px] w-[880px] ml-[65px] hidden
       max-lg:flex max-lg:justify-between max-lg:items-center max-lg:ml-[12px] max-lg:mt-[10px] ">
          <div className="h-[52.52px] w-[107.15px] bg-[url('/images/ad-1-logo.png')] bg-cover">  </div>
          <div className="h-[52.52px] w-[123.8px] bg-[url('/images/ad-2-logo.png')] bg-cover">  </div>
          <div className="h-[52.52px] w-[123.8px] bg-[url('/images/ad-3-logo.png')] bg-cover">  </div>
          <div className="h-[52.52px] w-[123.8px] bg-[url('/images/ad-4-logo.png')] bg-cover">  </div>
          <div className="h-[52.52px] w-[123.8px] bg-[url('/images/ad-5-logo.png')] bg-cover">  </div>
          <div className="h-[52.52px] w-[123.8px] bg-[url('/images/ad-6-logo.png')] bg-cover">  </div>
        </div>
       </div>

{/* -----------------------------------------EXPOLOREsection---------- */}

                  {/* -------------EX_DIV_1------------ */}
       <div className="h-[1050px] w-[1280px] bg-[#ffffff]
       max-lg:h-[862px] max-lg:w-[428px]">
        <div style={{ fontFamily: 'Roboto, sans-serif' }}  className="h-[415px] w-[1280px] pt-[150px] pl-[250px]
        max-lg:h-[162px] max-lg:w-[385px] max-lg:text-center max-lg:pt-[0px] mt-[50px] max-lg:ml-[-230px]">
            <h2 className="font-bold text-[48px]
            max-lg:text-[32px] max-lg:w-[385px] max-lg:h-[84px]">Explore Courses By Category</h2>
            <p className="font-normal text-[18px]
            max-lg:w-[385px] max-lg:h-[54px] max-lg:mt-[30px]">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>

        </div>
          
                  {/* -------------EX_DIV_2------------ */}
        <div className="h-[635px] w-[1280px]
        max-lg:h-[556px] max-lg:w-[380px] max-lg:mt-[60px] max-lg:ml-[23px]">
 {/* ---------------------LAYER_1--------------- */}
          <div className="flex justify-between items-center h-[132px] w-[1280px]
          max-lg:h-[444px] max-lg:w-[380px] max-lg:block">
            {/* -------SEC1_box_1---- */}
             <div className="flex justify-evenly items-center h-[132px] w-[410.67px] bg-[#f7f7f7]
             max-lg:w-[380px]">
                 <div className="flex justify-evenly items-center h-[100px] w-[100px] bg-[#ffffff]"> 
                     <div className="h-[32px] w-[32px] bg-[url('/images/pen-tool-2.png')] bg-cover"></div>
                 </div>
                 <div style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[57px] w-[246.67px]
                 max-lg:w-[218px]">
                  <p className="font-semibold text-[20px]">Design & Development</p>
                  <p className="font-normal text-[18px]">50+ Courses Available</p>
                 </div>  
             </div>
             {/* -------SEC1_box_2---- */}
             <div className="flex justify-evenly items-center h-[132px] w-[410.67px] bg-[#f7f7f7] 
             max-lg:mt-[25px] max-lg:w-[380px]">
                 <div className="flex justify-evenly items-center h-[100px] w-[100px] bg-[#ffffff]"> 
                     <div className="h-[32px] w-[32px] bg-[url('/images/volume-high.png')] bg-cover"></div>
                 </div>
                 <div style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[57px] w-[246.67px]
                 max-lg:w-[218px]">
                  <p className="font-semibold text-[20px]">Marketing</p>
                  <p className="font-normal text-[18px]">50+ Courses Available</p>
                 </div>  
             </div>
             {/* -------SEC1_box_3---- */}
             <div className="flex justify-evenly items-center h-[132px] w-[410.67px] bg-[#f7f7f7]
             max-lg:mt-[25px] max-lg:w-[380px]">
                 <div className="flex justify-evenly items-center h-[100px] w-[100px] bg-[#ffffff]"> 
                     <div className="h-[32px] w-[32px] bg-[url('/images/group.png')] bg-cover"></div>
                 </div>
                 <div style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[57px] w-[246.67px]
                 max-lg:w-[218px]">
                  <p className="font-semibold text-[20px]">Development</p>
                  <p className="font-normal text-[18px]">50+ Courses Available</p>
                 </div>  
             </div>
          </div>
{/* ---------------------------------------------------------------------------------           */}

    {/* ---------------------LAYER_2--------------- */}
    <div className="flex justify-between items-center h-[132px] w-[1280px] mt-[62px]
    max-lg:hidden">
            {/* -------SEC2_box_1---- */}
             <div className="flex justify-evenly items-center h-[132px] w-[410.67px] bg-[#f7f7f7] ">
                 <div className="flex justify-evenly items-center h-[100px] w-[100px] bg-[#ffffff]"> 
                     <div className="h-[32px] w-[32px] bg-[url('/images/microphone.png')] bg-cover"></div>
                 </div>
                 <div style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[57px] w-[246.67px]">
                  <p className="font-semibold text-[20px]">Communication</p>
                  <p className="font-normal text-[18px]">50+ Courses Available</p>
                 </div>  
             </div>
             {/* -------SEC2_box_2---- */}
             <div className="flex justify-evenly items-center h-[132px] w-[410.67px] bg-[#f7f7f7] ">
                 <div className="flex justify-evenly items-center h-[100px] w-[100px] bg-[#ffffff]"> 
                     <div className="h-[32px] w-[32px] bg-[url('/images/link.png')] bg-cover"></div>
                 </div>
                 <div style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[57px] w-[246.67px]">
                  <p className="font-semibold text-[20px]">Digital Marketing</p>
                  <p className="font-normal text-[18px]">50+ Courses Available</p>
                 </div>  
             </div>
             {/* -------SEC2_box_3---- */}
             <div className="flex justify-evenly items-center h-[132px] w-[410.67px] bg-[#f7f7f7] ">
                 <div className="flex justify-evenly items-center h-[100px] w-[100px] bg-[#ffffff]"> 
                     <div className="h-[32px] w-[32px] bg-[url('/images/arrow-2.png')] bg-cover"></div>
                 </div>
                 <div style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[57px] w-[246.67px]">
                  <p className="font-semibold text-[20px]">Self Development</p>
                  <p className="font-normal text-[18px]">50+ Courses Available</p>
                 </div>  
             </div>
          </div>
{/* --------------------------------------------------------------------------------- */}


           {/* ---------------------LAYER_3--------------- */}
           <div className="flex justify-between items-center h-[132px] w-[1280px] mt-[62px]
           max-lg:hidden">
            {/* -------SEC3_box_1---- */}
             <div className="flex justify-evenly items-center h-[132px] w-[410.67px] bg-[#f7f7f7] ">
                 <div className="flex justify-evenly items-center h-[100px] w-[100px] bg-[#ffffff]"> 
                     <div className="h-[32px] w-[32px] bg-[url('/images/briefcase.png')] bg-cover"></div>
                 </div>
                 <div style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[57px] w-[246.67px]">
                  <p className="font-semibold text-[20px]">Business</p>
                  <p className="font-normal text-[18px]">50+ Courses Available</p>
                 </div>  
             </div>
             {/* -------SEC3_box_2---- */}
             <div className="flex justify-evenly items-center h-[132px] w-[410.67px] bg-[#f7f7f7] ">
                 <div className="flex justify-evenly items-center h-[100px] w-[100px] bg-[#ffffff]"> 
                     <div className="h-[32px] w-[32px] bg-[url('/images/book.png')] bg-cover"></div>
                 </div>
                 <div style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[57px] w-[246.67px]">
                  <p className="font-semibold text-[20px]">Finance</p>
                  <p className="font-normal text-[18px]">50+ Courses Available</p>
                 </div>  
             </div>
             {/* -------SEC3_box_3---- */}
             <div className="flex justify-evenly items-center h-[132px] w-[410.67px] bg-[#f7f7f7] ">
                 <div className="flex justify-evenly items-center h-[100px] w-[100px] bg-[#ffffff]"> 
                     <div className="h-[32px] w-[32px] bg-[url('/images/book-2.png')] bg-cover"></div>
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

{/* ------------------------------------ACHIEVEMENTS--------------- */}
       <div className="h-[488px] w-[1280px] mt-[80px] border border-transparent
       max-lg:h-[451px] max-lg:w-[428px]">
          <div className="h-[264px] w-[1152px] mt-[100px] ml-[64px] 
          max-lg:h-[355px] max-lg:w-[380px] max-lg:mt-[-80px] max-lg:ml-[25px] ">

             <div style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[136px] w-[1152px] text-center
             max-lg:h-[147px] max-lg:w-[380px]">
                <h2 className="font-bold text-[48px]
                max-lg:h-[42px] max-lg:w-[380px] max-lg:text-[32px]">Our Achivements</h2>
                <p className="font-normal text-[18px] hidden
                max-lg:h-[81px] max-lg:w-[362px] max-lg:block max-lg:mt-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
                <p className="font-normal text-[18px]
                max-lg:hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. </p>
             </div>
             {/* -------------------------------------FOR MOBILE SCREENS--------------------- */}
             <div style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[96px] w-[1256px] flex justify-evenly items-center ml-[-35px]
             max-lg:h-[176px] max-lg:h-[380px]  max-lg:inline sm:hidden">
               <div className="max-lg:h[380px] max-lg:h[76px] max-lg:flex max-lg:justify-between max-lg:items-center max-lg:mt-[20px]">
                 <span className="h-[80px] w-[296px] text-center
                 max-lg:w-[182px] max-lg:h-[60px]">
                     <h3 className="font-bold text-[40px]
                     max-lg:text-[20px]">+200</h3>
                     <p className="font-normal text-[16px]">Courses</p>
                 </span>

                 <span className="h-[80px] w-[296px] text-center
                 max-lg:w-[182px] max-lg:h-[60px]">
                     <h3 className="font-bold text-[40px]
                     max-lg:text-[20px]">50k</h3>
                     <p className="font-normal text-[16px]">Mentors</p>
                 </span>
               </div>

               <div className="max-lg:h[380px] max-lg:h[76px] max-lg:flex max-lg:justify-between max-lg:items-center max-lg:mt-[30px]">
                 <span className="h-[80px] w-[296px] text-center
                 max-lg:w-[182px] max-lg:h-[60px]">
                     <h3 className="font-bold text-[40px]
                     max-lg:text-[20px]">370k</h3>
                     <p className="font-normal text-[16px]">Students</p>
                 </span>

                 <span className="h-[80px] w-[296px] text-center
                 max-lg:w-[182px] max-lg:h-[60px]">
                     <h3 className="font-bold text-[40px]
                     max-lg:text-[20px]">100+</h3>
                     <p className="font-normal text-[16px]">Recognition</p>
                 </span>
               </div>
            </div>
 {/* -----------------------------------------FOR PC SCREEN_-----------------------------------------               */}
            <div style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[96px] w-[1256px] flex justify-evenly items-center ml-[-35px]
             max-lg:h-[176px] max-lg:h-[380px]  max-lg:inline max-lg:hidden">
            
                 <span className="h-[80px] w-[296px] text-center
                 max-lg:w-[182px] max-lg:h-[60px]">
                     <h3 className="font-bold text-[40px]
                     max-lg:text-[20px]">+200</h3>
                     <p className="font-normal text-[16px]">Courses</p>
                 </span>

                 <span className="h-[80px] w-[296px] text-center
                 max-lg:w-[182px] max-lg:h-[60px]">
                     <h3 className="font-bold text-[40px]
                     max-lg:text-[20px]">50k</h3>
                     <p className="font-normal text-[16px]">Mentors</p>
                 </span>
               
                 <span className="h-[80px] w-[296px] text-center
                 max-lg:w-[182px] max-lg:h-[60px]">
                     <h3 className="font-bold text-[40px]
                     max-lg:text-[20px]">370k</h3>
                     <p className="font-normal text-[16px]">Students</p>
                 </span>

                 <span className="h-[80px] w-[296px] text-center
                 max-lg:w-[182px] max-lg:h-[60px]">
                     <h3 className="font-bold text-[40px]
                     max-lg:text-[20px]">100+</h3>
                     <p className="font-normal text-[16px]">Recognition</p>
                 </span>
               
            </div>
             
          </div>        
       </div>

 {/* ----------------------------------------COURSESsection----------------       */}

        <div className="mt-[20px] h-[1742px] w-[1280px] border border-transparent
        max-lg:h-[2135px] max-lg:w-[428px] max-lg:mt-[-80px]">
               
              <div style={{ fontFamily: 'Roboto, sans-serif' }} className="mt-[30px] h-[118px] w-[768px] ml-[250px] text-center 
              max-lg:h-[93px] max-lg:w-[250px] max-lg:mt-0 max-lg:ml-[80px]">
                <h1 className="font-bold text-[56px]
                max-lg:h-[42px] max-lg:w-[119px] max-lg:text-[32px] max-lg:pl-[65px]">Courses</h1>
                <p className="pt-[10px] font-normal text-[18px]
                max-lg:h-[27px] max-lg:w-[250px] max-lg:text-[18px] max-lg:pt-[25px]">Your Ultimate Guide to learning</p>
                
              </div> 

              <div className="mt-[80px] h-[1340px] w-[1280px]
              max-lg:h-[1898px] max-lg:w-[380px] max-lg:ml-[22px]">
                <div style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[40px] w-[336px] flex justify-evenly items-center font-normal text-[16px] ml-[465px] 
                max-lg:h-[40px] max-lg:w-[336px] max-lg:ml-[20px] ">
                   <a  href="#">Popular</a>
                   <a  href="#">Recommanded</a>
                   <a  href="#">Best Price</a>
                </div>

              
{/* --------------------------------------COUR-LAYer-1------------------ */}
                <div className="mt-[100px] h-[534px] w-[1280px] flex justify-between 
                max-lg:h-[1690px] max-lg:w-[380px] max-lg:block max-lg:mt-[50px]">
                   {/* -------------------------LAY-1-box-1---------- */}
                   <div className="h-[534px] w-[400px] bg-[#f7f7f7]
                   max-lg:h-[558px] max-lg:w-[380px]">
                      <div className="image_div w-[400px] h-[300px] bg-[url('/images/cour-1.png')] bg-cover
                      max-lg:h-[300px] max-lg:w-[380px] max-lg:rounded-md"> </div>
                           {/* ------------------------------- */}
                      <div style={{ fontFamily: 'Roboto, sans-serif' }} className="connT_area pl-[20px] w-[410px] h-[210px] mt-[10px]
                      max-lg:mt-[20px]">
                         <div className="font-semibold text-[14px] flex ">
                           <p>Design</p>
                           <div className="h-[24px] w-[50px] flex justify-between items-center ml-[260px] 
                           max-lg:ml-[250px]">
                             <div className="h-[24px] w-[24px] bg-[url('/images/Star-1.png')] bg-cover"></div>
                             <div className="h-[24px] w-[24px] text-[15px] pt-[2px]">5.0</div>
                           </div>
                         </div>

                         <h5 className="font-bold text-[24px] mt-[10px]">UX/UI Design 201</h5>
                         <p className="font-normal text-[16px] mt-[10px]
                         max-lg:h-[76px] max-lg:w-[326px]" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                         <div className="flex mt-[30px] text-center
                         max-lg:mt-[20px]">
                           <div className="font-normal text-[16px] h-[40px] w-[117px] border border-black  pt-[7px] rounded-md"><button>Enroll Now</button></div>
                           <div className="h-[40px] w-[77px] pt-[7px] font-semibold text-[16px] "><p>$400</p></div>
                         </div>

                      </div>
                   </div>
                     {/* -------------------------LAY-1-box-2---------- */}
                     <div className="h-[534px] w-[400px] bg-[#f7f7f7]
                     max-lg:h-[558px] max-lg:w-[380px] max-lg:mt-[35px]">
                      <div className="image_div w-[400px] h-[300px] bg-[url('/images/cour-2.jpeg')] bg-cover
                      max-lg:h-[300px] max-lg:w-[380px] max-lg:rounded-md"> </div>
                           {/* ------------------------------- */}
                      <div style={{ fontFamily: 'Roboto, sans-serif' }} className="connT_area pl-[20px] w-[410px] h-[210px] mt-[10px]
                      max-lg:mt-[20px]">
                         <div className="font-semibold text-[14px] flex ">
                           <p>Programming</p>
                           <div className="h-[24px] w-[50px] flex justify-between items-center ml-[220px] 
                           max-lg:ml-[210px]">
                             <div className="h-[24px] w-[24px] bg-[url('/images/Star-1.png')] bg-cover"></div>
                             <div className="h-[24px] w-[24px] text-[15px] pt-[2px]">5.0</div>
                           </div>
                         </div>

                         <h5 className="font-bold text-[24px] mt-[10px]">Introduction to Python</h5>
                         <p className="font-normal text-[16px] mt-[10px]
                         max-lg:h-[76px] max-lg:w-[326px]" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                         <div className="flex mt-[30px] text-center
                         max-lg:mt-[20px]">
                           <div className="font-normal text-[16px] h-[40px] w-[117px] border border-black  pt-[7px] rounded-md"><button>Enroll Now</button></div>
                           <div className="h-[40px] w-[77px] pt-[7px] font-semibold text-[16px] "><p>$400</p></div>
                         </div>

                      </div>
                   </div>
                     {/* -------------------------LAY-1-box-3---------- */}
                     <div className="h-[534px] w-[400px] bg-[#f7f7f7]
                     max-lg:h-[558px] max-lg:w-[380px] max-lg:mt-[35px]">
                      <div className="image_div w-[400px] h-[300px] bg-[url('/images/cour-3.jpeg')] bg-cover
                      max-lg:h-[300px] max-lg:w-[380px] max-lg:rounded-md"> </div>
                           {/* ------------------------------- */}
                      <div style={{ fontFamily: 'Roboto, sans-serif' }} className="connT_area pl-[20px] w-[410px] h-[210px] mt-[10px]
                      max-lg:mt-[20px]">
                         <div className="font-semibold text-[14px] flex ">
                           <p>Business</p>
                           <div className="h-[24px] w-[50px] flex justify-between items-center ml-[250px]
                           max-lg:ml-[240px] ">
                             <div className="h-[24px] w-[24px] bg-[url('/images/Star-1.png')] bg-cover"></div>
                             <div className="h-[24px] w-[24px] text-[15px] pt-[2px]">5.0</div>
                           </div>
                         </div>

                         <h5 className="font-bold text-[24px] mt-[10px]">Data Analysis for Beginners</h5>
                         <p className="font-normal text-[16px] mt-[10px]
                         max-lg:h-[76px] max-lg:w-[326px]" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                         <div className="flex mt-[30px] text-center
                         max-lg:mt-[20px]">
                           <div className="font-normal text-[16px] h-[40px] w-[117px] border border-black  pt-[7px] rounded-md"><button>Enroll Now</button></div>
                           <div className="h-[40px] w-[77px] pt-[7px] font-semibold text-[16px] "><p>$400</p></div>
                         </div>

                      </div>
                   </div>
                </div>
{/* --------------------------------------COUR-LAYer-2------------------ */}
                <div className="mt-[100px] h-[534px] w-[1280px] flex justify-between 
                max-lg:hidden">
                   {/* -------------------------LAY-2-box-1---------- */}
                   <div className="h-[534px] w-[405px] bg-[#f7f7f7]">
                      <div className="image_div w-[405px] h-[300px] bg-[url('/images/cour-4.jpeg')] bg-cover"> </div>
                           {/* ------------------------------- */}
                      <div style={{ fontFamily: 'Roboto, sans-serif' }} className="connT_area pl-[20px] w-[410px] h-[210px] mt-[10px]">
                         <div className="font-semibold text-[14px] flex ">
                           <p>Art</p>
                           <div className="h-[24px] w-[50px] flex justify-between items-center ml-[290px] ">
                             <div className="h-[24px] w-[24px] bg-[url('/images/Star-1.png')] bg-cover"></div>
                             <div className="h-[24px] w-[24px] text-[15px] pt-[2px]">5.0</div>
                           </div>
                         </div>

                         <h5 className="font-bold text-[24px] mt-[10px]">Art Specialization</h5>
                         <p className="font-normal text-[16px] mt-[10px]" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                         <div className="flex mt-[30px] text-center">
                           <div className="font-normal text-[16px] h-[40px] w-[117px] border border-black  pt-[7px] rounded-md"><button>Enroll Now</button></div>
                           <div className="h-[40px] w-[77px] pt-[7px] font-semibold text-[16px] "><p>$400</p></div>
                         </div>

                      </div>
                   </div>
                     {/* -------------------------LAY-2-box-2---------- */}
                     <div className="h-[534px] w-[405px] bg-[#f7f7f7]">
                      <div className="image_div w-[405px] h-[300px] bg-[url('/images/cour-5.jpeg')] bg-cover"> </div>
                           {/* ------------------------------- */}
                      <div style={{ fontFamily: 'Roboto, sans-serif' }} className="connT_area pl-[20px] w-[410px] h-[210px] mt-[10px]">
                         <div className="font-semibold text-[14px] flex ">
                           <p>Law</p>
                           <div className="h-[24px] w-[50px] flex justify-between items-center ml-[285px] ">
                             <div className="h-[24px] w-[24px] bg-[url('/images/Star-1.png')] bg-cover"></div>
                             <div className="h-[24px] w-[24px] text-[15px] pt-[2px]">5.0</div>
                           </div>
                         </div>

                         <h5 className="font-bold text-[24px] mt-[10px]">Rule of Law</h5>
                         <p className="font-normal text-[16px] mt-[10px]" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                         <div className="flex mt-[30px] text-center">
                           <div className="font-normal text-[16px] h-[40px] w-[117px] border border-black  pt-[7px] rounded-md"><button>Enroll Now</button></div>
                           <div className="h-[40px] w-[77px] pt-[7px] font-semibold text-[16px] "><p>$400</p></div>
                         </div>

                      </div>
                   </div>
                     {/* -------------------------LAY-2-box-3---------- */}
                     <div className="h-[534px] w-[405px] bg-[#f7f7f7]">
                      <div className="image_div w-[405px] h-[300px] bg-[url('/images/cour-6.jpeg')] bg-cover"> </div>
                           {/* ------------------------------- */}
                      <div style={{ fontFamily: 'Roboto, sans-serif' }} className="connT_area pl-[20px] w-[410px] h-[210px] mt-[10px]">
                         <div className="font-semibold text-[14px] flex ">
                           <p>Tech</p>
                           <div className="h-[24px] w-[50px] flex justify-between items-center ml-[280px] ">
                             <div className="h-[24px] w-[24px] bg-[url('/images/Star-1.png')] bg-cover"></div>
                             <div className="h-[24px] w-[24px] text-[15px] pt-[2px]">5.0</div>
                           </div>
                         </div>

                         <h5 className="font-bold text-[24px] mt-[10px]">Introduction to webflow</h5>
                         <p className="font-normal text-[16px] mt-[10px]" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                         <div className="flex mt-[30px] text-center">
                           <div className="font-normal text-[16px] h-[40px] w-[117px] border border-black  pt-[7px] rounded-md"><button>Enroll Now</button></div>
                           <div className="h-[40px] w-[77px] pt-[7px] font-semibold text-[16px] "><p>$400</p></div>
                         </div>

                      </div>
                   </div>
                </div>
{/* ----------------------------------------------viewCOURSESbutton- */}
                <div className="flex justify-center items-center
                max-lg:mt-[50px]">
                   <div style={{ fontFamily: 'Roboto, sans-serif' }} className="mt-[62px] h-[48px] w-[155px] border border-black rounded-md font-normal text-[16px] flex justify-center items-center">
                      <button>View All Courses</button>
                   </div>
                </div>

              </div>
      {/* cour-main */}
        </div>

{/* -------------------------------------------TEAMsection------------------- */}
        
        <div className="h-[1034px] w-[1280px]  bg-[#f7f7f7] mt-[100px]
        max-lg:h-[1300px] max-lg:w-[428px] max-lg:mt-[40px]">
          {/* ----------------------------div_one----------- */}
           <div className="pt-[100px]
           max-lg:pt-[50px] max-lg:ml-[30px]">
            <div style={{ fontFamily: 'Roboto, sans-serif' }} className="border border-transparent ml-[250px] h-[109px] w-[768px] text-center
            max-lg:h-[120px] max-lg:w-[363px] max-lg:ml-0 ">
               <h1 className="font-bold text-[56px]
               max-lg:text-[32px] ">Our team</h1>
               <p className="font-normal text-[18px]
               max-lg:mt-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
          </div>

          {/* ----------------------------div_two----------- */}
            <div className="h-[428px] w-[1280px]  mt-[80px]
            max-lg:h-[723px] max-lg:w-[380px]">
                {/* --------------------TEAM_LAY_1-------------------- */}
                 <div className="h-[209px] w-[1280px] flex justify-evenly
                 max-lg:block max-lg:ml-[20px]">
                      {/* ---------box-1---------- */}
                     <div  className="h-[209px] w-[394px]">
                                       {/* photo */}
                           <div className="h-[80px] w-[394px] flex justify-center">          
                             <div className="h-[80px] w-[80px] bg-[url('/images/human-1.png')] bg-cover  "></div>
                           </div>                 
                                            {/* names */}
                           <div style={{ fontFamily: 'Roboto, sans-serif' }} className="mt-[30px] h-[57px] w-[394px] text-center">
                              <h6 className="font-semibold text-[20px]">James Nduku</h6>
                              <p className="font-normal text-[18px]">Marketing Coordinator</p>
                           </div>
                                        {/* aaccounts */}
                          <div className="mt-[80px] h-[24px] w-[394px] flex justify-center">              
                             <div className="h-[24px] w-[100px] flex justify-between">
                                <div className="h-[24px] w-[24px] bg-[url('/images/Linkedin.png')] bg-cover"></div>
                                <div className="mt-[5px] h-[15.3px] w-[18px] bg-[url('/images/twit.png')] bg-cover"></div>
                                <div className="h-[24px] w-[24px] bg-[url('/images/Dribble.png')] bg-cover"></div>
                             </div>
                          </div>   
                     </div>
                      {/* ---------box-2---------- */}
                      <div  className="h-[209px] w-[394px]
                      max-lg:mt-[110px]">
                                       {/* photo */}
                           <div className="h-[80px] w-[394px] flex justify-center">          
                             <div className="h-[80px] w-[80px] bg-[url('/images/human-2.png')] bg-cover  "></div>
                           </div>                 
                                            {/* names */}
                           <div style={{ fontFamily: 'Roboto, sans-serif' }} className="mt-[30px] h-[57px] w-[394px] text-center">
                              <h6 className="font-semibold text-[20px]">Joseph Munyambu</h6>
                              <p className="font-normal text-[18px]">Nursing Assistant</p>
                           </div>
                                        {/* aaccounts */}
                          <div className="mt-[80px] h-[24px] w-[394px] flex justify-center">              
                             <div className="h-[24px] w-[100px] flex justify-between">
                                <div className="h-[24px] w-[24px] bg-[url('/images/Linkedin.png')] bg-cover"></div>
                                <div className="mt-[5px] h-[15.3px] w-[18px] bg-[url('/images/twit.png')] bg-cover"></div>
                                <div className="h-[24px] w-[24px] bg-[url('/images/Dribble.png')] bg-cover"></div>
                             </div>
                          </div>   
                     </div>
                      {/* ---------box-3---------- */}
                      <div  className="h-[209px] w-[394px]
                      max-lg:mt-[110px]">
                                       {/* photo */}
                           <div className="h-[80px] w-[394px] flex justify-center">          
                             <div className="h-[80px] w-[80px] bg-[url('/images/human-3.png')] bg-cover  "></div>
                           </div>                 
                                            {/* names */}
                           <div style={{ fontFamily: 'Roboto, sans-serif' }} className="mt-[30px] h-[57px] w-[394px] text-center">
                              <h6 className="font-semibold text-[20px]">Joseph Ngumbau</h6>
                              <p className="font-normal text-[18px]">Medical Assistant</p>
                           </div>
                                        {/* aaccounts */}
                          <div className="mt-[80px] h-[24px] w-[394px] flex justify-center">              
                             <div className="h-[24px] w-[100px] flex justify-between">
                                <div className="h-[24px] w-[24px] bg-[url('/images/Linkedin.png')] bg-cover"></div>
                                <div className="mt-[5px] h-[15.3px] w-[18px] bg-[url('/images/twit.png')] bg-cover"></div>
                                <div className="h-[24px] w-[24px] bg-[url('/images/Dribble.png')] bg-cover"></div>
                             </div>
                          </div>   
                     </div>
                 </div>
{/* ---------------------------------------------optinal view button--------------------- */}
                 <div className="hidden
                 max-lg:mt-[690px] max-lg:ml-[45px] max-lg:flex max-lg:justify-center max-lg:items-center">
                   <div style={{ fontFamily: 'Roboto, sans-serif' }} className="mt-[62px] h-[40px] w-[89px] border-2 border-[grey] rounded-md font-normal text-[16px] flex justify-center items-center">
                      <button>View All</button>
                   </div>
                 </div>
    {/* ---------------------------------------------------------------------------------------------              */}

                  {/* --------------------TEAM_LAY_2-------------------- */}
                  <div className="mt-[140px] h-[209px] w-[1280px] flex justify-evenly
                  max-lg:hidden">
                      {/* ---------box-1---------- */}
                     <div  className="h-[209px] w-[394px]">
                                       {/* photo */}
                           <div className="h-[80px] w-[394px] flex justify-center">          
                             <div className="h-[80px] w-[80px] bg-[url('/images/human-4.png')] bg-cover  "></div>
                           </div>                 
                                            {/* names */}
                           <div style={{ fontFamily: 'Roboto, sans-serif' }} className="mt-[30px] h-[57px] w-[394px] text-center">
                              <h6 className="font-semibold text-[20px]">Erick Kipkemboi</h6>
                              <p className="font-normal text-[18px]">Web Designer</p>
                           </div>
                                        {/* aaccounts */}
                          <div className="mt-[80px] h-[24px] w-[394px] flex justify-center">              
                             <div className="h-[24px] w-[100px] flex justify-between">
                                <div className="h-[24px] w-[24px] bg-[url('/images/Linkedin.png')] bg-cover"></div>
                                <div className="mt-[5px] h-[15.3px] w-[18px] bg-[url('/images/twit.png')] bg-cover"></div>
                                <div className="h-[24px] w-[24px] bg-[url('/images/Dribble.png')] bg-cover"></div>
                             </div>
                          </div>   
                     </div>
                      {/* ---------box-2---------- */}
                      <div  className="h-[209px] w-[394px]">
                                       {/* photo */}
                           <div className="h-[80px] w-[394px] flex justify-center">          
                             <div className="h-[80px] w-[80px] bg-[url('/images/human-5.png')] bg-cover  "></div>
                           </div>                 
                                            {/* names */}
                           <div style={{ fontFamily: 'Roboto, sans-serif' }} className="mt-[30px] h-[57px] w-[394px] text-center">
                              <h6 className="font-semibold text-[20px]">Stephen Kerubo</h6>
                              <p className="font-normal text-[18px]">President of Sales</p>
                           </div>
                                        {/* aaccounts */}
                          <div className="mt-[80px] h-[24px] w-[394px] flex justify-center">              
                             <div className="h-[24px] w-[100px] flex justify-between">
                                <div className="h-[24px] w-[24px] bg-[url('/images/Linkedin.png')] bg-cover"></div>
                                <div className="mt-[5px] h-[15.3px] w-[18px] bg-[url('/images/twit.png')] bg-cover"></div>
                                <div className="h-[24px] w-[24px] bg-[url('/images/Dribble.png')] bg-cover"></div>
                             </div>
                          </div>   
                     </div>
                      {/* ---------box-3---------- */}
                      <div  className="h-[209px] w-[394px]">
                                       {/* photo */}
                           <div className="h-[80px] w-[394px] flex justify-center">          
                             <div className="h-[80px] w-[80px] bg-[url('/images/human-6.png')] bg-cover  "></div>
                           </div>                 
                                            {/* names */}
                           <div style={{ fontFamily: 'Roboto, sans-serif' }} className="mt-[30px] h-[57px] w-[394px] text-center">
                              <h6 className="font-semibold text-[20px]">John Leboo</h6>
                              <p className="font-normal text-[18px]">Dog Trainer</p>
                           </div>
                                        {/* aaccounts */}
                          <div className="mt-[80px] h-[24px] w-[394px] flex justify-center">              
                             <div className="h-[24px] w-[100px] flex justify-between">
                                <div className="h-[24px] w-[24px] bg-[url('/images/Linkedin.png')] bg-cover"></div>
                                <div className="mt-[5px] h-[15.3px] w-[18px] bg-[url('/images/twit.png')] bg-cover"></div>
                                <div className="h-[24px] w-[24px] bg-[url('/images/Dribble.png')] bg-cover"></div>
                             </div>
                          </div>   
                     </div>
                 </div>
           {/* div-2 */}
            </div>
     {/* main-team */}
        </div>

  {/* ----------------------------OPTIONAL CUSTOMER EXPERI FOR MOBILE SCREEN--------------------------------------------------------------       */}
        <div style={{ fontFamily: 'Roboto, sans-serif' }} className="hidden max-lg:block max-lg:h-[682px] max-lg:w-[428px] max-lg:pl-[33px]">
                        {/* div_1 */}
              <div  className="max-lg:pt-[50px] max-lg:h[120px] max-lg:w-[361px] max-lg:text-center">
                <h1 className="max-lg:font-bold max-lg:text-[32px]">What Our Student Say</h1>
                <p className="max-lg:pt-[10px] max-lg:font-normal max-lg:text-[18px] max-lg:pt-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         {/* div-1-end */}
             </div>

                        {/* div-2 */}
             <div className="max-lg:h-[322px] max-lg:w-[380px] max-lg:mt-[50px]">
               {/* box-1 */}
               <div className="max-lg:pl-[30px] max-lg:pt-[35px] max-lg:h-[322px] max-lg:w-[362px] max-lg:border max-lg:border-[#000000]">   
                                      {/* stars */}
                    <div className="max-lg:h-[18.89px] max-lg:w-[116px] max-lg:bg-[url('/images/blackStars.png')] max-lg:bg-cover"></div>
                                      {/* info */}
                    <div style={{ fontFamily: 'Roboto, sans-serif' }}  className="max-lg:mt-[25px] max-lg:h-[132px] max-lg:w-[296px]">
                        <p className="max-lg:font-normal max-lg:text-[18px]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
                    </div>
                                      {/* hisName */}
                    <div  className="max-lg:mt-[25px] max-lg:h-[56px] max-lg:w-[254px] max-lg:flex max-lg:justify-between">
                       <div className="max-lg:h-[56px] max-lg:w-[56px] max-lg:rounded-[50%] max-lg:bg-[url('/images/human-3.png')] max-lg:bg-cover">
                       </div>

                       <div style={{ fontFamily: 'Roboto, sans-serif' }} className="max-lg:mt-[5px] max-lg:h-[48px] max-lg:w-[178px]">
                        <h6 className="max-lg:font-semibold max-lg:text-[16px]">James Nduku</h6>
                        <p className="max-lg:font-normal max-lg:text-[16px]">Software Developer</p>
                       </div>

                    </div>
                </div>

                           {/* div-3 */}
                <div className="max-lg:h-[40px] max-lg:w-[380px]">
                    <div className="mt-[70px] h-[40px] w-[380px] flex justify-between">
                       <div className="h-[9px] w-[72px] bg-[url('/images/SliderDots.png')] bg-cover"></div>
                       <div className="h-[49px] w-[111px] mt-[-15px] bg-[url('/images/SliderButtons.png')] bg-cover"></div>
                    </div>
                </div>

             </div>

         
         
         
       </div>




        {/* --------------CUSTOMERscetion-------------------------------- */}

        <div className="pl-[65px] h-[870px] w-[1280px] bg-[#f7f7f7]
        max-lg:hidden">
                        {/* div_1 */}
            <div style={{ fontFamily: 'Roboto, sans-serif' }} className="pt-[100px] h[109px] w-[560px]">
                <h1 className="font-bold text-[48px]">Customer testimonials</h1>
                <p className="pt-[10px] font-normal text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         {/* div-1-end */}
            </div>

                      {/* div_2 */}
            <div className="mt-[100px] h-[322px] w-[1152px] flex justify-between">
                     {/* box-1 */}
                <div className="pl-[30px] pt-[35px] h-[322px] w-[362px] border border-[#000000]">   
                                      {/* stars */}
                    <div className="h-[18.89px] w-[116px] bg-[url('/images/blackStars.png')] bg-cover"></div>
                                      {/* info */}
                    <div style={{ fontFamily: 'Roboto, sans-serif' }}  className="mt-[25px] h-[132px] w-[296px]">
                        <p className="font-normal text-[18px]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
                    </div>
                                      {/* hisName */}
                    <div  className="mt-[25px] h-[56px] w-[254px] flex justify-between">
                       <div className="h-[56px] w-[56px] rounded-[50%] bg-[url('/images/human-3.png')] bg-cover">
                       </div>

                       <div style={{ fontFamily: 'Roboto, sans-serif' }} className="mt-[5px] h-[48px] w-[178px]">
                        <h6 className="font-semibold text-[16px]">James Nduku</h6>
                        <p className="font-normal text-[16px]">Software Developer</p>
                       </div>

                    </div>
                </div>
                  {/* box-2 */}
                  <div className="pl-[30px] pt-[35px] h-[322px] w-[362px] border border-[#000000]">   
                                      {/* stars */}
                    <div className="h-[18.89px] w-[116px] bg-[url('/images/blackStars.png')] bg-cover"></div>
                                      {/* info */}
                    <div style={{ fontFamily: 'Roboto, sans-serif' }}  className="mt-[25px] h-[132px] w-[296px]">
                        <p className="font-normal text-[18px]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
                    </div>
                                      {/* hisName */}
                    <div  className="mt-[25px] h-[56px] w-[254px] flex justify-between">
                       <div className="h-[56px] w-[56px] rounded-[50%] bg-[url('/images/human-3.png')] bg-cover">
                       </div>

                       <div style={{ fontFamily: 'Roboto, sans-serif' }} className="mt-[5px] h-[48px] w-[178px]">
                        <h6 className="font-semibold text-[16px]">James Nduku</h6>
                        <p className="font-normal text-[16px]">Software Developer</p>
                       </div>

                    </div>
                </div>
                  {/* box-3 */}
                  <div className="pl-[30px] pt-[35px] h-[322px] w-[362px] border border-[#000000]">   
                                      {/* stars */}
                    <div className="h-[18.89px] w-[116px] bg-[url('/images/blackStars.png')] bg-cover"></div>
                                      {/* info */}
                    <div style={{ fontFamily: 'Roboto, sans-serif' }}  className="mt-[25px] h-[132px] w-[296px]">
                        <p className="font-normal text-[18px]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
                    </div>
                                      {/* hisName */}
                    <div  className="mt-[25px] h-[56px] w-[254px] flex justify-between">
                       <div className="h-[56px] w-[56px] rounded-[50%] bg-[url('/images/human-3.png')] bg-cover">
                       </div>

                       <div style={{ fontFamily: 'Roboto, sans-serif' }} className="mt-[5px] h-[48px] w-[178px]">
                        <h6 className="font-semibold text-[16px]">James Nduku</h6>
                        <p className="font-normal text-[16px]">Software Developer</p>
                       </div>

                    </div>
                </div>
        {/* div-2-end */}
            </div>


{/* ------------------------------------div3------ */}
            <div className="mt-[60px] h-[48px] w-[1152px] flex justify-between">
                <div className="h-[9px] w-[72px] bg-[url('/images/SliderDots.png')] bg-cover"></div>
                <div className="h-[49px] w-[111px] bg-[url('/images/SliderButtons.png')] bg-cover"></div>
            </div>
    {/* main-cus */}
        </div>

  {/* ---------------------------------------------------------------------------------------------------       */}
            
              {/* -------------------FOOTER_________________ */}

        <div style={{ fontFamily: 'Roboto, sans-serif' }} className="mt-[100px] h-[684px] w-[1280px] bg-[#ffffff]
        max-lg:h-[1411px] max-lg:w-[428px] max-lg:mt-[0px]">

           <div className="pt-[80px] pl-[80px] h-[524px] w-[1120px]
           max-lg:h-[1315px] max-lg:w-[380px]">
                       {/* div-1 */}
               <div className="w-[1120px] h-[82px] flex justify-between
               max-lg:h-[261px] max-lg:w-[380px] max-lg:block">
                              {/* sub-1 */}
                   <div className="h-[51px] w-[500px]
                   max-lg:h-[91px] max-lg:w-[287px] max-lg:text-center max-lg:ml-0">
                      <h6 className="font-semibold text-[18px]">Subscribe to our newsletter</h6>
                      <p className="font-normal text-[16px] max-lg:mt-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>    
                   </div>
                              {/* sub-2 */}
                   <div className="h-[82px] w-[400px]
                   max-lg:h-[146px] max-lg:w-[380px] max-lg:mt-[25px]">
                      <div className="h-[112px] w-[380px] flex justify-between
                      max-lg:block max-lg:ml-[-55px]">
                         <input className="border border-black font-normal text-[16px] h-[48px] w-[265px] rounded-md pl-[15px]
                         max-lg:w-[380px]" type="text" placeholder="Enter your email" />
                         <button className="ml-[15px] border border-black font-normal text-[16px] rounded-md h-[48px] w-[119px]
                          max-lg:w-[380px] max-lg:mt-[15px] max-lg:ml-[0px]">Subscribe</button>
                      </div>
                      <p className=" pt-[15px] font-normal text-[12px] max-lg:pl-[40px]">By subscribing you agree to with our  </p>

                   </div>
               {/* 1-end     */} 
               </div>   

{/* -------------------------------------DIv-2----------------- */}
               <div className="mt-[120px] h-[250px] w-[1120px] flex justify-between
               max-lg:h-[811px] max-lg:w-[172px] max-lg:block max-lg:mt-[50px]">
                   {/* box-1 */}
                  <div className="h-[40px] w-[250px]
                  max-lg:w-[172px] max-lg:h-[30.38px] max-lg:text-center max-lg:ml-[50px]">
                       <div className="h-[30.38px] w-[130.36px] flex
                       max-lg:w-[130.6px] max-lg:h-[40px]">
                           <div className="h-[30.38px] w-[32.58px] bg-[url('/images/dasgnr-logo.png')] bg-cover"></div>
                           <h3 style={{ fontFamily: 'Inter, sans-serif' }} className="h-[30px] w-[90px] font-bold text-[25.07px] pl-[7px]">Dasgnr</h3>
                       </div>
                  </div>
                  {/* box-2 */}
                  <div className="h-[225px] w-[250px]
                  max-lg:w-[172px] max-lg:h-[225px] max-lg:mt-[50px] max-lg:text-center">
                     <div className="h-[24px] w-[250px]">
                          <h5 className="font-semibold text-[16px]">Courses</h5>
                     </div>

                     <div className="h-[185px] w-[250px] font-normal text-[14px">
                         <ul className="pt-[25px]">
                          <li>Business</li>
                          <li className="pt-[20px]">Development</li>
                          <li className="pt-[20px]">Technology</li>
                          <li className="pt-[20px]">Design</li>
                          <li className="pt-[20px]">Programming</li>
                         </ul>
                     </div>
                  </div>
                  {/* box-3 */}
                  <div className="h-[225px] w-[250px]
                  max-lg:w-[172px] max-lg:h-[225px] max-lg:mt-[80px] max-lg:text-center">
                     <div className="h-[24px] w-[250px]">
                          <h5 className="font-semibold text-[16px]">Resourses</h5>
                     </div>

                     <div className="h-[185px] w-[250px] font-normal text-[14px">
                         <ul className="pt-[25px]">
                          <li>Career</li>
                          <li className="pt-[20px]">Resume</li>
                          <li className="pt-[20px]">Learning</li>
                          <li className="pt-[20px]">Interview Preparation</li>
                          <li className="pt-[20px]">Jobs</li>
                         </ul>
                     </div>
                  </div>
                  {/* box-4 */}
                  <div className="h-[225px] w-[250px]
                  max-lg:w-[172px] max-lg:h-[225px] max-lg:mt-[80px] max-lg:text-center">
                     <div className="h-[24px] w-[250px]">
                          <h5 className="font-semibold text-[16px]">About Us</h5>
                     </div>

                     <div className="h-[185px] w-[250px] font-normal text-[14px">
                         <ul className="pt-[25px]">
                          <li>Contact</li>
                          <li className="pt-[20px]">Help/Suport</li>
                          <li className="pt-[20px]">FAQ</li>
                          <li className="pt-[20px]">Terms and Conditions</li>
                          <li className="pt-[20px]">Partners</li>
                         </ul>
                     </div>
                  </div>
               {/* 2-end */}
               </div>

               {/* -----------------DIV3---------- */}

               <div className="mt-[100px] h-[57px] w-[1120px]
               max-lg:h-[147px] max-lg:w-[380px] max-lg:mt-[200px] max-lg:ml-[-50px]">
                  <div className="h-[1px] w-[1120px] bg-[url('/images/Divider.png')] bg-cover
                  max-lg:w-[380px] "></div>

                  <div className="mt-[40px] h-[24px] w-[1120px] flex justify-between
                  max-lg:h-[114px] max-lg:w-[380px] max-lg:block">

                     <div className="h-[21px] w-[564px] flex justify-between
                     max-lg:h-[166px] max-lg:w-[345px] max-lg:block ">
                        <div className="h-[21px] w-[196px] font-normal text-[14px]
                        max-lg:ml-[90px]">
                          <p>2023 Ddsgnr. All right reserved.</p>
                        </div>

                        <div className="h-[21px] w-[345px] font-normal text-[14px] underline cursor-pointer flex justify-between 
                        max-lg:ml-[15px] max-lg:mt-[30px]">
                          <a>Privacy Policy</a>
                          <a>Terms of Service</a>
                          <a>Cookies Settings</a>
                        </div>   
                     </div> 

                     <div className="h-[24px] w-[132px] flex justify-between
                     max-lg:mt-[-60px] max-lg:ml-[120px]">
                        <div className="h-[18px] w-[10px] bg-[url('/images/facebook.png')] bg-cover"></div>
                        <div className="h-[18px] w-[18px] bg-[url('/images/insta.png')] bg-cover"></div>
                        <div className="mt-[3px] h-[15.3px] w-[18px] bg-[url('/images/twit.png')] bg-cover"></div>
                        <div className="mt-[-2px] h-[24px] w-[24px] bg-[url('/images/Linkedin.png')] bg-cover"></div>
                     </div>
                  </div>
              {/* 3-end */}
               </div>
            </div>


    {/* foot    */}
        </div>      

 {/*  body */}
    </div>
  )
}
