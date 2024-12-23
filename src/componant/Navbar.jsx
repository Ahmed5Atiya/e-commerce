// import { navLinks } from "../constant";
// import { headerLogo } from "../assets/images";
// import { hamburger } from "../assets/icons";
// import { Link } from "react-router-dom";
// function Navbar() {
//   return (
//     <header className="padding-x py-5 z-10 w-full ">
//       <nav className="flex items-center justify-between max-container">
//         <a href="#">
//           <img src={headerLogo} alt="logo" />
//         </a>
//         <ul className="max-lg:hidden  flex   items-center gap-3">
//           {navLinks.map((item) => (
//             <li key={item.label} className="py-3 px-4  text-gray-400">
//               <Link
//                 to={`${item.href}`}
//                 className="text-lg leading-normal font-montserrat hover:text-blue-700"
//               >
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//         <Link
//           to={"/login"}
//           className="text-white py-2  px-8 max-lg:hidden bg-blue-600 text-[18px] rounded-full font-montserrat"
//         >
//           Sign in
//         </Link>
//         <div className="hidden max-lg:flex  ">
//           <img src={hamburger} alt="Icon" width={30} height={30} />
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;
import { useState } from 'react';
import { navLinks } from '../constant';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="padding-x py-5 z-10 w-full">
      <nav className="flex items-center justify-between max-container">
        <a href="#">
          <img src={headerLogo} alt="logo" />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-3">
          {navLinks.map((item) => (
            <li key={item.label} className="py-3 px-4 text-gray-400">
              <Link
                to={`${item.href}`}
                className="text-lg leading-normal font-montserrat hover:text-blue-700"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <ul className={`lg:hidden flex flex-col absolute top-16 left-0 bg-white w-full p-4 rounded-lg shadow-lg ${isOpen ? 'block' : 'hidden'}`}>
          {navLinks.map((item) => (
            <li key={item.label} className="py-3 px-4 text-gray-400">
              <Link
                to={`${item.href}`}
                className="text-lg leading-normal font-montserrat hover:text-blue-700"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to={"/login"}
          className="text-white py-2 px-8 max-lg:hidden bg-blue-600 text-[18px] rounded-full font-montserrat"
        >
          Sign in
        </Link>

        <div className="lg:hidden cursor-pointer" onClick={toggleNavbar}>
          <img src={hamburger} alt="Icon" width={30} height={30} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;


