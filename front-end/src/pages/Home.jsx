import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Home = () => {
  return (
    <div>
      <div className="mt-45 flex-col items-center  md:grid place-items-center">
        <h1 className="text-3xl md:text-5xl">Find Local Work. Connect Instantly.</h1>
        <p className="text-xl mt-3 md:text-2xl">
          WorkOnCall connects job seekers with daily labor opportunities and
          helps{" "}
        </p>
        <p className="text-2xl">
          employers find skilled workers for immediate needs.
        </p>
      </div>
      <div className="flex md:flex-row  flex-col justify-center items-center gap-20 mt-7 mb-10">
        <div className="text-black  p-3  bg-white w-90 h-45 p-5 rounded shadow-[0px_0px_10px_1px_rgba(0,0,0,0.2)]">
          <span className="flex items-center gap-2    text-2xl">
            <Icon icon="vaadin:tools" width="20" />
          
            Need Workers?
          </span>

          <p>
            Post your work requirements and connect directly with available
            workers in your area.
          </p>
          <div className="flex justify-center items-center mt-5 gap-1">
            <Link
              to={"/Avail-workers"}
              className="bg-black text-center text-white cursor-pointer w-full p-1 rounded"
            >
              Check Availability 
              {/* Find Workers */}
            </Link>
              <Link
              to={"/Post-Work"}
              className="bg-black text-center text-white cursor-pointer w-full p-1 rounded"
            >
              Post Work Details
            </Link>
          </div>
        </div>

        <div className="text-white shadow-[0px_0px_10px_1px_rgba(0,0,0,0.2)] rounded shadow border-white bg-black w-90 p-5 h-45 ">
         
         <span className="flex items-center gap-2 text-2xl ">
              <Icon
              icon="clarity:tools-line"
              width="22"
            />
                      <h1 className=" text-2xl ">Looking for Work?</h1>

         </span>
         
          <p>
            Register as a worker and get notified about daily labor
            opportunities near you.
          </p>
          <div className="flex justify-center items-center mt-5 gap-1">
            <Link
              className="bg-white text-black cursor-pointer w-full p-1 text-center rounded "
              to={"/works"}
            >
              Check Availability
            </Link>
                <Link
              className="bg-white text-black cursor-pointer w-full p-1 text-center rounded "
              to={"/Post-Worker"}
            >
              Register as a worker
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
