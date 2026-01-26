import React from "react";
import { useState } from "react";

import { Icon } from "@iconify/react";

import { Link } from "react-router-dom";

const ServiceProvider = () => {
  return (
    <div className="mt-40 flex gap-15 flex-col items-center  ">
      <h1 className="text-3xl">Provide a Service</h1>

      <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
        <div className="bg-black rounded w-80 mb-4 h-50 p-2 grid place-items-center text-white">
          <Icon icon="hugeicons:work" width="35"/>
          <h1 className="text-2xl">POST WORK DETAILS </h1>

          <p>Looking to hire? Describe</p>
          <p> your project</p>
          <Link
            className="bg-white w-50 text-black text-center m-1 p-1 rounded cursor-pointer"
            to="/Post-Work"
          >
            POST A JOB
          </Link>
        </div>
        <div className="bg-black rounded w-80 p-2 mb-4 h-50 grid place-items-center text-white">
          <Icon icon="healthicons:factory-worker-outline" width="36"/>
          <h1 className="text-2xl">POST WORKER DETAILS </h1>
          <p>Seeking oporunities? Create </p>
          <p>your Profile</p>
          <Link
            className="bg-white w-50 m-3 p-1 text-center text-black rounded cursor-pointer"
            to="/Post-Worker"
          >
            REGISTER AS WORKER
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceProvider;
