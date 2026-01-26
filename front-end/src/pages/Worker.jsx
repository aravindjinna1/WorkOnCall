import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import imageCompression from "browser-image-compression";

const Worker = () => {
  const Navigate = useNavigate();

  const [workerData, setWorkerData] = useState({
    title: "",
    name: "",
    amount: "",
    workHours: "",
    description: "",
    address: "",
    mobileNo: "",
  });

  const handleWorkersData = (e) => {
    const { name, value } = e.target;

    setWorkerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const HandleImage = async (e) => {
    const file = e.target.files[0];

    const options = {
      maxSizeMB: 0.3, // ~300KB
      maxWidthOrHeight: 800, // resize
      useWebWorker: true,
    };
      const compressedFile = await imageCompression(file, options);

    setWorkerImage(compressedFile);
  };

  const token = localStorage.getItem("token");

  // const [workImage, setWorkImage] = useState(null);
  const [workerImage, setWorkerImage] = useState(null);

  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const HandleSubmitWorkers = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      Object.keys(workerData).forEach((key) => {
        formData.append(key, workerData[key]);
      });

      formData.append("image", workerImage);

      const response = await axios.post(
        "http://localhost:3000/api/WorkerDetails/post-worker",
        formData,
        { headers: { Authorization: `Bearer ${token}` } },
      );

      console.log(response.data);
      alert("Details posted successfully");
    } catch (error) {
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
        alert("You need to log in first!");
        // Optional: redirect to login page
        window.location.href = "/login-page";
      } else {
        console.error(error.message);
        alert("Error in posting Data");
      }
    }

    // finally {
    //   Navigate("/Avail-workers");
    // }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white flex justify-center items-center md:mt-40 mt-50 flex-col max-h-[500px] md:w-[400px] w-[350px] rounded-[10px] border shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
        <h1 className="text-center text-[30px] ">Post Worker Details</h1>
        <form
          onSubmit={HandleSubmitWorkers}
          className="flex flex-col gap-2 p-6 "
        >
          <input
            type="text"
            placeholder="Title: Ex:Plumber"
            name="title"
            required
            value={workerData.title}
            onChange={handleWorkersData}
            className="border rounded-[1px] px-1 py-1"
          />
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={workerData.name}
            onChange={handleWorkersData}
            className="border rounded-[1px] px-1 py-1"
          />
          <input
            type="text"
            name="amount"
            placeholder="Amount  Ex:400-600"
            value={workerData.amount}
            onChange={handleWorkersData}
            className="border rounded-[1px] px-1 py-1"
          />
          <input
            type="text"
            name="workHours"
            placeholder="Work Hours Ex:4-8"
            value={workerData.workHours}
            onChange={handleWorkersData}
            className="border rounded-[1px] px-1 py-1"
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={handleWorkersData}
            value={workerData.description}
            className="border rounded-[1px] px-1 py-1"
          />
          <input
            type="text"
            name="address"
            value={workerData.address}
            placeholder="Address"
            onChange={handleWorkersData}
            className="border rounded-[1px] px-1 py-1"
          />
          <input
            type="number"
            name="mobileNo"
            value={workerData.mobileNo}
            onChange={handleWorkersData}
            placeholder="Mobile No Ex:9898000000"
            className="border rounded-[1px] px-1 py-1"

            maxLength={10}
            minLength={10}
            pattern='[0-9]{10}'
          />

          <input
            type="file"
            accept="image/*"
            onChange={HandleImage}
          />

          <button
            type="submit"
            className="border cursor-pointer px-1 py-1 bg-black text-white rounded-[5px]"
            onClick={() => setLoading2(true)}
          >
            {loading2 ? "Posting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Worker;

// import React from 'react'
// import { useState } from 'react'

// const ServiceProvider=()=>{

//   return(

//     <div className='mt-40 flex gap-15 flex-col items-center  '>
//       <h1 className='text-3xl'>Provide a Service</h1>

//       <div className='flex flex-col md:flex-row gap-10 items-center justify-center'>

//       <div className='bg-black rounded w-70 h-40 grid place-items-center text-white'>
//         <h2>want to work details </h2>
//         <button className='bg-white rounded text-black cursor-pointer'>Provide</button>
//       </div>
//       <div className='bg-black rounded w-70 h-40 grid place-items-center text-white'>
//         <h2>want to post worker details </h2>

//         <button className='bg-white text-black rounded cursor-pointer'>Provide</button>

//       </div>
//       </div>
//     </div>
//   )
// }

// export default ServiceProvider
