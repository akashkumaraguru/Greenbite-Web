import logo from "../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuClicked = () => {
    setOpen(!open);
  };

  return (
    <nav className="mt-5">
      <div className="  w-5/6 lg:max-w-7xl mx-auto  flex  justify-between items-center">
        <div>
          <img src={logo} alt="Logo" className="size-20" />
        </div>

        <div className="lg:hidden md:block">
          <button onClick={menuClicked}>
            {open ? (
              <IoClose className="text-4xl md:hidden" />
            ) : (
              <GiHamburgerMenu className="text-4xl md:hidden" />
            )}
          </button>

          {open && (
            <div className="fixed   w-5/6 my-5 text-right  bg-slate-100 md:hidden lg:hidden p-5 right-10 mx-automd:hidden lg:hidden ">
              <ul className="">
                <li className="mb-5  text-center   ">
                  <a href="">Home</a>
                </li>
                <li className="mb-5  text-center  ">
                  <a href="">Products</a>
                </li>
                <li className="mb-5 text-center ">
                  <a href="">Testimonials</a>
                </li>
                <li className="mb-5 text-center  ">
                  <a href="">About us</a>
                </li>
                <li className="mb-5 text-center   ">
                  <a href="">Contact</a>
                </li>
                <li className="px-4 py-2 rounded-full bg-yellow-500 text-white   mb-5 text-center  ">
                  <a href="">Login</a>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="hidden  md:block lg:flex ">
          <ul className="flex lg:space-x-8 ">
            <li className=" px-4 py-2 border-b-4 border-b-green-400 hover:rounded-full transoform ease-out duration-300 hover:bg-green-500 hover:text-white ">
              <a href="">Home</a>
            </li>
            <li className="px-4 py-2 rounded-full transoform ease-out duration-500 hover:bg-green-500 hover:text-white ">
              <a href="">Products</a>
            </li>
            <li className="px-4 py-2 rounded-full transoform ease-out duration-500 hover:bg-green-500 hover:text-white ">
              <a href="">Testimonials</a>
            </li>
            <li className="px-4 py-2 rounded-full transoform ease-out duration-500 hover:bg-green-500 hover:text-white ">
              <a href="">About us</a>
            </li>
            <li className="px-4 py-2 rounded-full transoform ease-out duration-500 hover:bg-green-500 hover:text-white ">
              <a href="">Contact</a>
            </li>
            <li className="px-4 py-2 rounded-full bg-yellow-500 text-white ">
              <a href="">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
