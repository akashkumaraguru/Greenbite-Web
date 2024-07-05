import trademark from "../assets/Herosection/trademark-bg.png";
import firstImg from '../assets/Herosection/AboutUs/firstImg.png'
import secondImg from '../assets/Herosection/AboutUs/secondImg.png'
import thirdImg from '../assets/Herosection/AboutUs/thirdImg.png'


const AboutUs = () => {
  return (
    <div className="w-5/6 lg:max-w-7xl mx-auto ">
      <div>
        <img src={trademark} alt="" />
      </div>

      <div className=" text-center mb-10 mt-10">
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

        <div className='bg-[#73BF78] h-[500px]  rounded-3xl'>
        

        </div>

    </div>
  );
};
export default AboutUs;
