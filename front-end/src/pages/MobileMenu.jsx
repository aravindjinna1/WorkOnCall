import React from 'react'
import { Icon } from '@iconify/react';
import { useMenu } from './MenuContext'
import { Link } from 'react-router-dom';
const MobileMenu = () => {

    const { isMenuOpen, setIsMenuOpen } = useMenu();
  return (
    <div>
      
         {isMenuOpen &&(
         <div className="z-20 fixed absolute right-[10%] flex flex-col items-center justify-center  w-[300px] h-[300px]      bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-6 ">
        {/* <button className="text-white cursor-pointer text-3xl relative top-[-10%]" onClick={() => setIsMenuOpen(false)}>✖</button> */}

        <ul className="text-[12px] gap-4  flex-col flex gap-4">
          <Link to="/">
                     <li className="bg-white flex gap-1 items-center  p-1 rounded -[6%] cursor-pointer">
                       <Icon icon="streamline-flex:home-2" width="18" />
         
                       <p>Home</p>
                     </li>
                   </Link>
                   
                    <Link to="/works">
            <li className="bg-white flex gap-1 items-center   p-1 rounded -[6%] cursor-pointer">
              <Icon icon="ph:suitcase-duotone" width="22" />
              <p>Available Jobs</p>
            </li>
          </Link>

          <Link to="/Avail-workers">
            <li className="bg-white flex gap-1 items-center justify-center p-1 rounded -[6%] cursor-pointer">
              <Icon icon="icon-park-outline:peoples" width="20" />
              Available Workers
            </li>
          </Link>
          <Link to="/Provide-services">
            <li className="bg-white p-1 flex items-center gap-1 rounded -[6%] cursor-pointer">
              <Icon icon="ic:outline-local-post-office" width="20" />
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
              <Icon icon="stash:signin" width="20" /> Register
            </li>
          </Link>
        </ul>
      </div>
      )}
    </div>
  )
}

export default MobileMenu;
