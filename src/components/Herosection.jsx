import background from "../assets/Herosection/background.png";
import person from "../assets/Herosection/man-image.png";
import trademark from "../assets/Herosection/trademark-bg.png";
import mobilebg from "../assets/Herosection/mobile-bg.png";
import { MdOutlineShoppingCart } from "react-icons/md";

const Herosection = () => {
  return (
    <div className=" w-5/6 lg:max-w-7xl mx-auto  mt-5">
      <div className="hidden lg:flex  lg:h-[580px] rounded-xl lg:bg-[#FFF9EA] p-10 ">
        <div>
          <h1 className="lg:text-4xl mt-20  p-10  font-bold ">
            Elevate Your Plate with Wholesome, Organic Goodness
            <span className="text-[#7DBE35]"> GreenBite</span> Delivered to Your
            Doorstep!{" "}
          </h1>
          <button className="hidden lg:flex ml-10 items-center text-bold text-l bg-[#FFCB45] p-5 rounded-2xl text-white">
            <MdOutlineShoppingCart className="size-5" /> Explore More
          </button>
        </div>
        <img
          src={person}
          alt=""
          className="hidden md:hidden lg:flex lg:bg-cover lg:w-[612px] lg:h-[539px] "
        />
      </div>

      <div className="hidden lg:block bg-cover   w-fit">
        <img src={trademark} alt="" />
      </div>

      {/* Responive design code-pending */}
      <div className=" relative lg:hidden ">
        <div className="w-full  ">
          <img src={mobilebg} alt="" className="w-full" />
        </div>

        <div className="absolute left-5 w-10/12 bottom-[20px] font-semibold text-3xl ">
          <h1 className="text-white ">
            Elevate Your Plate with GreenBite Wholesome, Organic Goodness
            Delivered to Your Doorstep!{" "}
          </h1>
          <button className="flex  bg-[#FFCB45] text-white items-center  p-5 my-auto mt-10 rounded-xl ">
            <MdOutlineShoppingCart className="" /> 
            <h1 className='text-lg'>
            Explore More
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Herosection;
