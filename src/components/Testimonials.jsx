import TradeMark from "../assets/Herosection/trademark-bg.png";
import personOne from "../assets/Herosection/Testimonials/personOne.png";
import personTwo from "../assets/Herosection/Testimonials/personTwo.png";
import personThree from "../assets/Herosection/Testimonials/personThree.png";
import personFour from "../assets/Herosection/Testimonials/personFour.png";

import { IoIosStar } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

const Testimonials = () => {
  const persons = [
    {
      img: personOne,
      name: "Jessica",
      role: "Software Engineer",
      txt: "“GreenBite”has transformed my approach to healthy living! The freshness of the organic produce and the convenience of the meal kits have made cooking a joy",
    },
    {
      img: personTwo,
      name: "Akash kumaraguru",
      role: "Product Designer",
      txt: "Every bite is a burst of flavor, and I appreciate the commitment to sustainability. more than a service; it's a lifestyle upgrade!",
    },
    {
      img: personThree,
      name: "Naveen Chinnadurai",
      role: "FullStack-developer",
      txt: "As a passionate home chef, GreenBite is a game-changer. The meal kits are thoughtfully curated, and the quality of the ingredients is top-notch.",
    },
    {
      img: personFour,
      name: "Vectoria",
      role: "AI developer",
      txt: "As a passionate home chef, GreenBite is a game-changer. The meal kits are thoughtfully curated, and the quality of the ingredients is top-notch.",
    },
  ];

  return (
    <div className="w-5/6 lg:max-w-7xl mx-auto mt-10">
      <div className="mb-10">
        <img src={TradeMark} alt="" />
      </div>

      <div className="text-center">
        <h1 className="text-[#73BF78] font-bold  text-6xl">
          <span className="text-[#F2CB57]">"</span> Testimonials{" "}
          <span className="text-[#F2CB57]">"</span>
        </h1>
        <h1 className="font-semibold mt-2">What Our Customers Say About Us</h1>
      </div>

      <div className="flex  justify-evenly  flex-wrap">
        {persons.map((e, index) => (
          <div
            key={index}
            className="bg-[#73BF78] hover:scale-105 duration-300 p-5 mb-20 lg:h-[600px] lg:w-[30vw] mt-10 rounded-2xl"
          >
            <div className="">
              <img
                src={e.img}
                alt=""
                className="w-[200px]  mx-auto p-3 bg-white rounded-full"
              />
            </div>

            <div className="text-center mt-2 text-white">
              <h1 className="font-semibold text-4xl">{e.name}</h1>
              <h1>{e.role}</h1>
            </div>

            <div className="text-white  mt-10">
              <h1 className="text-center">{e.txt}</h1>
            </div>

            <div className="flex justify-between">
              <div className="flex space-x-4 mt-10 text-3xl text-yellow-300 items-center">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </div>

              <div className="flex space-x-4 text-3xl mt-10  items-center">
                <FaXTwitter />
                <FaGoogle />
                <FaInstagram />
                <FaFacebookF />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Testimonials;
