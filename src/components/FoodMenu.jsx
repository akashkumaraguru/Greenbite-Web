import FoodOne from '../assets/Herosection/FoodMenu/Food-One.png';
import { FaRegHeart } from "react-icons/fa";

const FoodMenu = (props) => {
  return (
    <div className=" mt-10 ">
      <div className='p-5  w-[300px] drop-shadow-lg hover:scale-105 duration-300  rounded-lg bg-[white] h-[420px]'>
        <img src={props.img} alt="" />
     <div className='p-5  text-center font-semibold '>
     <h1 className='text-[#1D1D1D]'>{props.maintext}</h1>
     <h1 className='text-[#1D1D1D] opacity-70 '>{props.subtext} </h1>
     </div>

     <div className='flex  text-2xl justify-between items-center'>
     <h1 className='font-bold'>{props.amount}</h1>
     <FaRegHeart />
     </div>
       
      </div>
    </div>
  );
};
export default FoodMenu;
