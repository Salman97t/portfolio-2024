import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <div className="bg-black text-gray-400 max-w-[1200px] mx-auto flex justify-between items-center h-[100px]">
      <h1 className="text-3xl font-bold primary-color ml-4 ">Salman T.</h1>
      <ul>
        <li className="p-5">
          <a href="#about">About</a>
        </li>
        <li className="p-5">
          <a href="#work">Work</a>
        </li>
        <li className="p-5">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
    </div>
  );
};

export default Navbar;
