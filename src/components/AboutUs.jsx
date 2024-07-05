import trademark from "../assets/Herosection/trademark-bg.png";
import firstImg from "../assets/Herosection/AboutUs/firstImg.png";
import secondImg from "../assets/Herosection/AboutUs/secondImg.png";
import thirdImg from "../assets/Herosection/AboutUs/thirdImg.png";

const AboutUs = () => {

  const images = [
    {
      img:firstImg,
    },
    {
      img:secondImg,
    },
    {
      img:thirdImg
    }
  ];

  return (
    <div className="w-5/6 lg:max-w-7xl mx-auto ">
      <div>
        <img src={trademark} alt="" />
      </div>

      <div className=" text-center mb-10  mt-10">
        <h1 className="text-[#73BF78]  font-bold text-6xl">About us </h1>

        <div className="border-b-10 border-l-8  border-l-[#F8B84E]">
          <h1 className="mt-10 ml-3 text-start  lg:text-3xl">
            Welcome to{" "}
            <span className="text-2xl lg:text-3xl text-[#73BF78] ">
              GreenBite
            </span>
            <h1>
              Where we are on a mission to redefine your relationship with food.
            </h1>
          </h1>
        </div>
      </div>

      <div className="bg-[#73BF78]  h-[700px] mb-20 rounded-3xl">
       <div className='hidden lg:flex justify-evenly   p-10 '>
            {
              images.map((e,index)=>(
          <div key={index} className='hover:scale-105 duration-300 '>
                  <img src={e.img} className='w-[200px]  h-fit' alt="" />
          </div>
              
              ))
            }
            
       </div>

       <div className='flex space-y-[300px] text-white font-semibold text-2xl'>
        <img src={firstImg} alt="" className='w-[350px] hover:scale-105 duration-300 p-5 text-center  h-fit lg:hidden' />
        <h1 className='lg:hidden'>
            We believe that everyone deserves access to fresh, organic, and wholesome ingredients without compromising on taste or convenience.
            </h1>
       </div>
 <h1 className='hidden lg:p-10 lg:ml-20  text-white text-2xl font-semibold lg:flex'>
            We believe that everyone deserves access to fresh, organic, and wholesome ingredients without compromising on taste or convenience.
            </h1>
        
      </div>
    </div>
  );
};
export default AboutUs;
