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
import { useState } from "react";
import { navLinks } from "../constant";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  function deleteCookie(name) {
    document.cookie = name + "=; Max-Age=-99999999;";
  }

  const email = getCookie("email");
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
        <ul
          className={`lg:hidden flex flex-col absolute top-16 left-0 bg-white w-full p-4 rounded-lg shadow-lg ${
            isOpen ? "block" : "hidden"
          }`}
        >
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
        {email === null ? (
          <Link
            to={"/login"}
            className="text-white py-2 px-8 max-lg:hidden bg-blue-600 text-[18px] rounded-full font-montserrat"
          >
            Sign in
          </Link>
        ) : (
          <button
            onClick={() => {
              deleteCookie("email");
              navigate("/login");
            }}
            className="text-white py-2 px-8 max-lg:hidden bg-blue-600 text-[18px] rounded-full font-montserrat"
          >
            logout
          </button>
        )}

        <div className="lg:hidden cursor-pointer" onClick={toggleNavbar}>
          <img src={hamburger} alt="Icon" width={30} height={30} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
