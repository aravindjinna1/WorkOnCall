
import React from "react";

import  {Icon} from '@iconify/react'

const Auths=()=>{

    const GoogleLogin = ()=>{
    window.location.href='http://localhost:3000/api/google'; //GooglAuth
  }

  return(
    <>

    <div className=" flex flex-col gap-2 items-center justify-center ">
     <p>----OR----</p>

    
        <div onClick={GoogleLogin} className=" flex flex-row  cursor-pointer bg-white text-black border py-1.5 px-4 gap-2 shadow-md rounded-[6px] ">
          <Icon icon="material-icon-theme:google" className="text-2xl text-blue-500" /> 
          <h1>Continue with Google</h1>
        </div>

     </div>



    </>
  )

}

export default Auths



