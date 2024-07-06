import trademark from "../assets/Herosection/trademark-bg.png";
import { IoIosStar } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";



const Footer = () => {
  const items = [
    {
      maintext: "Contact us",
      secondtext: "GreenBite Headquarters123 ",
      thirdtext: "Organic Avenue,Cityville, Earth",
      fourthtext: "📧 Email: info@greenbite.com",
      lasttext: "📞 Phone: 555-123-4567",
    },
    {
      maintext: " Explore GreenBite",
      secondtext: "🌿 Our Story ",
      thirdtext: "🍲 Meal Plans",
      fourthtext: "🍏 Our Ingredients",
      lasttext: "🌍 Sustainability Initiatives",
    },
    {
      maintext: "Careers",
      secondtext: "🌱 Join the GreenBite Team",
      thirdtext: "✉️ careers@greenbite.com",
      fourthtext: "👥 GreenBite Community Forum",
      lasttext: "📸 Share your creations with #GreenBiteDelights",
    },
  ];

  return (
    <div className="W-5/6  max-w-7xl mx-auto ">
      <div className="mb-10">
        <img src={trademark} className="" alt="" />
      </div>

      <div className=' text-center lg:flex  justify-evenly items-center '>
        {items.map((e, index) => (
          <div key={index} className="p-10 lg:p-0">
            <h1 className="font-semibold  text-2xl mb-10  lg:text-3xl   ">
              {e.maintext}
            </h1>
            <div className=" lg:flex flex-col h-[200px] justify-evenly">
              <h1 className=" text-[#73BF78] mb-5 ">
                {e.secondtext}{" "}
              </h1>
              <h1 className=" text-[#73BF78]  mb-5  ">
                {e.thirdtext}
              </h1>
              <h1 className=" text-[#73BF78] mb-5   ">
                {e.fourthtext}
              </h1>
              <h1 className=" text-[#73BF78] mb-5   ">
                {e.lasttext}{" "}
              </h1>
            </div>
          </div>
        ))}
      </div>

           <div className='flex  justify-around'>
           <div className='mt-10 space-x-10'>
                <input type="text" name="" id="" className='lg:w-[600px] border-4 bg-gray-200 p-2 rounded-xl' placeholder='Subscribe to our newsletter for exclusive offers and updates!' />
                <button className='bg-[#F2CB57] p-3 rounded-xl text-white'>Subscribe</button>
            </div>

            <div className="flex space-x-4 text-2xl lg:text-3xl mt-10  items-center">
                <FaXTwitter />
                <FaGoogle />
                <FaInstagram />
                <FaFacebookF />
              </div>
            
           </div>
          

    </div>
  );
};

export default Footer;
