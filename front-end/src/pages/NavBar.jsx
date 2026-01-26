import React, { useState } from "react";
import LogoImg from "../assets/newRemovedbg.png";
// import LogoImg from '../assets/WorkOnCallImg.png'
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { createContext, useContext } from "react";
import { useMenu } from "./MenuContext";
// import { useSearchInp } from './SearchContext'
import { useSearch } from "./SearchContext";
import Profile from "./Profile";
//  const SearchValue = createContext(null);

//   export const useSearchInp = () =>  useContext(SearchValue);

function NavBar() {
  const { setSearchText } = useSearch();

  // const [searchInp, setSearchInp] = useState();

  // const { setSearchInp } = useSearchInp();

  // const [isOpen, setIsOpen] = useState(false);

  const { isMenuOpen, setIsMenuOpen } = useMenu();

  // const handleSubmit=(e)=>{
  //      setSearchText(e.target.value)
  // }

  return (
    <div className="z-15 fixed w-full h-35 md:h-30 bg-black top-0 overflow-hidden flex flex-col items-center justfy-center">
      {/* fixed flex top-0 bg-black w-full h-50 overflow-hidden   */}

      <nav className="flex flex-row items-center h-24 md:h-40  justfy-center gap-10 md:relative md:bottom-10 mb-10">
        {/* flex flex-row items-center justify-center gap-2 md:gap-5 */}
        {/* <div className='md:w-[150px] w-full h-[150px] m-0 p-0'> */}

        <img
          src={LogoImg}
          className="block md:w-[280px] border-0 w-[300px] mt-2 mr[-15px]  p-0 align-middle h-[150px] object-cover "
        />

        <ul className="text-[12px] gap-4 hidden md:flex">
          <Link to="/">
            <li className="bg-white flex gap-1 items-center justify-center  p-1 rounded -[6%] cursor-pointer">
              <Icon icon="streamline-flex:home-2" width="18" />

              <p>Home</p>
            </li>
          </Link>

          <Link to="/works">
            <li className="bg-white flex gap-1 items-center justify-center  p-1 rounded -[6%] cursor-pointer">
              <Icon icon="ph:suitcase-duotone" width="18" />
              <p>Available Jobs</p>
            </li>
          </Link>

          <Link to="/Avail-workers">
            <li className="bg-white flex gap-1 items-center justify-center p-1 rounded -[6%] cursor-pointer">
              <Icon icon="icon-park-outline:peoples" width="18" />
              Available Workers
            </li>
          </Link>
          <Link to="/Provide-services">
            <li className="bg-white p-1 flex items-center gap-1 rounded -[6%] cursor-pointer">
              <Icon icon="ic:outline-local-post-office" width="18" />
              Post a Service
            </li>
          </Link>
          {/* <li className="bg-white p-1 rounded -[6%] cursor-pointer">My Jobs</li>
          <li className="bg-white p-1 rounded -[6%] cursor-pointer">
            My Hires{" "}
          </li>
          <li className="bg-white p-1 rounded -[6%] cursor-pointer">
            Notifications 🔔
          </li> */}
          <Link to="/register">
            <li className="bg-white flex gap-1 items-center p-1 rounded -[6%] cursor-pointer">
              <Icon icon="stash:signin" width="18" /> Register
            </li>
          </Link>
        </ul>

        <div className="md:hidden  block mr-1 text-white">
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
             </svg> */}
          {!isMenuOpen ? (
            <Icon
              className=""
              onClick={() => setIsMenuOpen(true)}
              icon="gg:menu-right"
              width="30"
            />
          ) : (
            <Icon
              onClick={() => setIsMenuOpen(false)}
              icon="fluent-emoji-high-contrast:cross-mark"
              width="22"
            />
          )}
        </div>
      </nav>

      <div className="flex absolute md:bottom-1   bottom-0 mb-3 md:mb-auto md:left-99 ">
        {/* absolute max-w-[200px] md:max-w-[100%] */}
        <input
          type="text"
          placeholder="Search..."
          // className="outline-none rounded-[20px] px-4 bg-white shadow-[1px_1px_5px_1px_black] max-w-full h-7 ring-2 ring-pink-500 focus:ring-blue-500 "
          // onFocus={() => setClick(true)}
          // onBlur={() => setClick(false)}
          onChange={(e) => setSearchText(e.target.value)}
          className="bg-white w-80 px-4 h-10  rounded shadow-[1px_1px_5px_1px_black] ring-2"
        />

        <div className="cursor-pointer w-13 h-8 grid  place-items-center  md:top-1 bottom-1 text-gray-700 absolute md:right-[2%] left-[70%] md:left-[66%] rounded bg-black">
          <Icon className="text-white" icon="meteor-icons:search" width="30" />
        </div>

          
          <li style={{listStyle:"none"}} className="grid place-item-center list-none text-black bg-white text-center rounded-[80%] h-10 w-10 ml-3 md:ml-10">
          <Link to="/Profile">
          <Icon icon="gg:profile" width="100%" >Profile</Icon>
          </Link>
         </li>
         
      </div>
        
    </div>
  );
}
export default NavBar;
