import React from "react"
export default function HomePage(){
  return(
    <div className="h-[7678px] w-[1280px] bg-[#ffffff] text-[black]">
{/* ----------------------------userID--------- */}
      <div className=" h-[54px] w-[1280px] flex justify-center bg-[#f7f7f7] items-center border">

        <div style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[30px] w-[386px] flex justify-center items-center text-[14px] font-normal ">
           <p className="pr-[10px]">Phone Number: 956 742 455 678</p>
           <p className=" h-[30px] w-[1px] bg-[url('/images/line-3.png')] bg cover"></p>
           <p className="pl-[10px]">Email:info@ddsgnr.com</p>
         </div>

         <div className="h-[30px] w-[736px] flex justify-end items-center text-[14px]">
            <div className="h-[24px] w-[24px] text-center"><div className="h-[10px] w-[18px] bg-[url('/images/facebook.png')] bg-cover"></div></div>
            <div className="h-[24px] w-[24px] bg-[url('/images/insta.png')] bg-cover"></div>
            <div className="h-[24px] w-[24px] bg-[url('/images/twitter.png')] bg-cover"></div>
            <div className="h-[18px] w-[18px] bg-[url('/images/Vector.svg')] bg-cover"></div>
         </div>
      </div>

{/* ----------------------------navBAR--------- */}
      <div className=" mt-[15px] h-[72px] w-[1280px] flex justify-evenly bg-[#f7f7f7] items-center border">
        <div className="flex">
          <div className="h-[30.38px] w-[32.58px] bg-[url('/images/dasgnr-logo.png')] bg-cover"></div>
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

        <div  className="mt-[-537px] ml-[638px] w-[640px] h-[800px] bg-[url('/images/hero-girl.jpeg')] bg-cover bg-center">
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
          <div className="h-[52.52px] w-[123.8px] bg-[url('/images/ad-1-logo.png')] bg-cover">  </div>
          <div className="h-[52.52px] w-[123.8px] bg-[url('/images/ad-2-logo.png')] bg-cover">  </div>
          <div className="h-[52.52px] w-[123.8px] bg-[url('/images/ad-3-logo.png')] bg-cover">  </div>
          <div className="h-[52.52px] w-[123.8px] bg-[url('/images/ad-4-logo.png')] bg-cover">  </div>
          <div className="h-[52.52px] w-[123.8px] bg-[url('/images/ad-5-logo.png')] bg-cover">  </div>
          <div className="h-[52.52px] w-[123.8px] bg-[url('/images/ad-6-logo.png')] bg-cover">  </div>
        </div>
       </div>

{/* -----------------------------------------EXPOLOREsection---------- */}

                  {/* -------------EX_DIV_1------------ */}
       <div className="h-[1050px] w-[1280px] bg-[#ffffff]">
        <div style={{ fontFamily: 'Roboto, sans-serif' }}  className="h-[415px] w-[1280px] pt-[150px] pl-[250px] ">
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
           <div className="flex justify-between items-center h-[132px] w-[1280px] mt-[62px]">
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
       <div className="h-[488px] w-[1280px] mt-[80px] border border-transparent">
          <div className="h-[264px] w-[1152px] mt-[100px] ml-[64px] ">

             <div style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[136px] w-[1152px] text-center">
                <h2 className="font-bold text-[48px]">Our Achivements</h2>
                <p className="font-normal text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
             </div>

             <div style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[96px] w-[1256px] flex justify-evenly items-center ml-[-35px]">
                 <span className="h-[80px] w-[296px] text-center">
                     <h3 className="font-bold text-[40px]">+200</h3>
                     <p className="font-normal text-[16px]">Courses</p>
                 </span>

                 <span className="h-[80px] w-[296px] text-center">
                     <h3 className="font-bold text-[40px]">50k</h3>
                     <p className="font-normal text-[16px]">Mentors</p>
                 </span>

                 <span className="h-[80px] w-[296px] text-center">
                     <h3 className="font-bold text-[40px]">370k</h3>
                     <p className="font-normal text-[16px]">Students</p>
                 </span>

                 <span className="h-[80px] w-[296px] text-center">
                     <h3 className="font-bold text-[40px]">100+</h3>
                     <p className="font-normal text-[16px]">Recognition</p>
                 </span>
             </div>
          </div>        
       </div>

 {/* ----------------------------------------COURSESsection----------------       */}

        <div className="mt-[20px] h-[1742px] w-[1280px] border border-transparent">
               
              <div style={{ fontFamily: 'Roboto, sans-serif' }} className="mt-[30px] h-[118px] w-[768px] ml-[250px] text-center ">
                <h1 className="font-bold text-[56px]">Courses</h1>
                <p className="pt-[10px] font-normal text-[18px]">Your Ultimate Guide to learning</p>
                
              </div> 

              <div className="mt-[80px] h-[1340px] w-[1280px]">
                <div style={{ fontFamily: 'Roboto, sans-serif' }} className="h-[40px] w-[336px] flex justify-evenly items-center font-normal text-[16px] ml-[465px] ">
                   <a  href="#">Popular</a>
                   <a  href="#">Recommanded</a>
                   <a  href="#">Best Price</a>
                </div>

              
{/* --------------------------------------COUR-LAYer-1------------------ */}
                <div className="mt-[100px] h-[534px] w-[1280px] flex justify-between ">
                   {/* -------------------------LAY-1-box-1---------- */}
                   <div className="h-[534px] w-[400px] bg-[#f7f7f7]">
                      <div className="image_div w-[400px] h-[300px] bg-[url('/images/cour-1.png')] bg-cover"> </div>
                           {/* ------------------------------- */}
                      <div style={{ fontFamily: 'Roboto, sans-serif' }} className="connT_area pl-[20px] w-[410px] h-[210px] mt-[10px]">
                         <div className="font-semibold text-[14px] flex ">
                           <p>Design</p>
                           <div className="h-[24px] w-[50px] flex justify-between items-center ml-[260px] ">
                             <div className="h-[24px] w-[24px] bg-[url('/images/Star-1.png')] bg-cover"></div>
                             <div className="h-[24px] w-[24px] text-[15px] pt-[2px]">5.0</div>
                           </div>
                         </div>

                         <h5 className="font-bold text-[24px] mt-[10px]">UX/UI Design 201</h5>
                         <p className="font-normal text-[16px] mt-[10px]" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                         <div className="flex mt-[30px] text-center">
                           <div className="font-normal text-[16px] h-[40px] w-[117px] border border-black  pt-[7px] rounded-md"><button>Enroll Now</button></div>
                           <div className="h-[40px] w-[77px] pt-[7px] font-semibold text-[16px] "><p>$400</p></div>
                         </div>

                      </div>
                   </div>
                     {/* -------------------------LAY-1-box-2---------- */}
                     <div className="h-[534px] w-[400px] bg-[#f7f7f7]">
                      <div className="image_div w-[400px] h-[300px] bg-[url('/images/cour-2.jpeg')] bg-cover"> </div>
                           {/* ------------------------------- */}
                      <div style={{ fontFamily: 'Roboto, sans-serif' }} className="connT_area pl-[20px] w-[410px] h-[210px] mt-[10px]">
                         <div className="font-semibold text-[14px] flex ">
                           <p>Programming</p>
                           <div className="h-[24px] w-[50px] flex justify-between items-center ml-[220px] ">
                             <div className="h-[24px] w-[24px] bg-[url('/images/Star-1.png')] bg-cover"></div>
                             <div className="h-[24px] w-[24px] text-[15px] pt-[2px]">5.0</div>
                           </div>
                         </div>

                         <h5 className="font-bold text-[24px] mt-[10px]">Introduction to Python</h5>
                         <p className="font-normal text-[16px] mt-[10px]" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                         <div className="flex mt-[30px] text-center">
                           <div className="font-normal text-[16px] h-[40px] w-[117px] border border-black  pt-[7px] rounded-md"><button>Enroll Now</button></div>
                           <div className="h-[40px] w-[77px] pt-[7px] font-semibold text-[16px] "><p>$400</p></div>
                         </div>

                      </div>
                   </div>
                     {/* -------------------------LAY-1-box-3---------- */}
                     <div className="h-[534px] w-[400px] bg-[#f7f7f7]">
                      <div className="image_div w-[400px] h-[300px] bg-[url('/images/cour-3.jpeg')] bg-cover"> </div>
                           {/* ------------------------------- */}
                      <div style={{ fontFamily: 'Roboto, sans-serif' }} className="connT_area pl-[20px] w-[410px] h-[210px] mt-[10px]">
                         <div className="font-semibold text-[14px] flex ">
                           <p>Business</p>
                           <div className="h-[24px] w-[50px] flex justify-between items-center ml-[250px] ">
                             <div className="h-[24px] w-[24px] bg-[url('/images/Star-1.png')] bg-cover"></div>
                             <div className="h-[24px] w-[24px] text-[15px] pt-[2px]">5.0</div>
                           </div>
                         </div>

                         <h5 className="font-bold text-[24px] mt-[10px]">Data Analysis for Beginners</h5>
                         <p className="font-normal text-[16px] mt-[10px]" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                         <div className="flex mt-[30px] text-center">
                           <div className="font-normal text-[16px] h-[40px] w-[117px] border border-black  pt-[7px] rounded-md"><button>Enroll Now</button></div>
                           <div className="h-[40px] w-[77px] pt-[7px] font-semibold text-[16px] "><p>$400</p></div>
                         </div>

                      </div>
                   </div>
                </div>
{/* --------------------------------------COUR-LAYer-2------------------ */}
                <div className="mt-[100px] h-[534px] w-[1280px] flex justify-between ">
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
                <div className="flex justify-center items-center">
                   <div style={{ fontFamily: 'Roboto, sans-serif' }} className="mt-[62px] h-[48px] w-[155px] border border-black rounded-md font-normal text-[16px] flex justify-center items-center">
                      <button>View All Courses</button>
                   </div>
                </div>

              </div>
      {/* cour-main */}
        </div>

{/* -------------------------------------------TEAMsection------------------- */}
        
        <div className="h-[885px] w-[1280px]  bg-[#f7f7f7] mt-[100px]">
          {/* ----------------------------div_one----------- */}
           <div className="pt-[100px]">
            <div style={{ fontFamily: 'Roboto, sans-serif' }} className="border border-transparent ml-[250px] h-[109px] w-[768px] text-center">
               <h1 className="font-bold text-[56px]">Our team</h1>
               <p className="font-normal text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
          </div>

          {/* ----------------------------div_two----------- */}
            <div className="h-[428px] w-[1280px]  mt-[80px]">
                {/* --------------------TEAM_LAY_1-------------------- */}
                 <div className="h-[209px] w-[1280px] flex justify-evenly">
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
                      <div  className="h-[209px] w-[394px]">
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
                      <div  className="h-[209px] w-[394px]">
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
                  {/* --------------------TEAM_LAY_2-------------------- */}
                  <div className="h-[209px] w-[1280px] flex justify-evenly">
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



 {/*  body */}
    </div>
  )
}
