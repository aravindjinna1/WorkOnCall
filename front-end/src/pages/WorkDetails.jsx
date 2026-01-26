
import React from "react";
import {useState} from 'react'
 import { useNavigate } from "react-router-dom";
import axios from 'axios'
import imageCompression from "browser-image-compression";


const Services = () => {

  const Navigate = useNavigate();

//  const [workerImage, setWorkerImage] = useState(null);
      const [workImage, setWorkImage] = useState(null);


  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const token = localStorage.getItem("token");

  const [workData, setWorkData] = useState({
    title: "",
    amount: "",
    workHours: "",
    description: "",
    address: "",
    mobileNo: "",
  });

const HandleWorkData = (e) => {
    const { name, value } = e.target;

    setWorkData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImage = async(e)=>{

     const file = e.target.files[0];
 
     const options = {
      maxSizeMB:0.3,    //size
      maxWidthOrHeight:800, //resizerr
      useWebWorker: true,

     }
     const compressed = await imageCompression(file, options);
     setWorkImage(compressed);
  }


// const [file, setFiles] = useState();

  const HandleSubmitWork = async (e) => {
    e.preventDefault();
     e.target.reset();

    try {
      const formData = new FormData();

      Object.keys(workData).forEach((key) => {
        formData.append(key, workData[key]);
      });

      formData.append("image", workImage);

      const response = await axios.post(
        "https://workoncall.onrender.com/api/WorkDetails/post-work",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response.data);
      alert("Details posted successfully");
      setLoading1(false)
      setWorkData('');
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
      }
    } 
    
    // finally {
    //   Navigate("/works");
    // }

    //  const formData = new FormDate();
    //    formData.append('image', file)

      //  await axios.post("http://localhost:3000/uploadImage", formData);
      //  alert('image uploaded Successfull')
  };


return(

      <div className='flex items-center justify-center'>
       <div className="bg-white flex justify-center items-center md:mt-40 mt-50 flex-col max-h-[500px] md:w-[400px] w-[350px] rounded-[10px] border shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
        <h1 className="text-center text-[30px]">Post A job</h1>
        <form onSubmit={HandleSubmitWork} className="flex flex-col gap-2 p-6">
          <input
            type="text"
            placeholder="Title  Ex:Plumber"
            name="title"
            value={workData.title}
            onChange={HandleWorkData}
            className="border rounded-[1px] px-1 py-1"
            required
          />
          <input
            type="text"
            name="amount"
            value={workData.amount}
            placeholder="Amount Ex:500-1000"
            onChange={HandleWorkData}
            className="border rounded-[1px] px-1 py-1"
            
          />
          <input
            type="text"
            name="workHours"
            value={workData.workHours}
            placeholder="Work Hours Ex: 4-5"
            onChange={HandleWorkData}
            className="border rounded-[1px] px-1 py-1"
          />
          <input
            type="text"
            name="description"
            value={workData.description}
            placeholder="Description"
            onChange={HandleWorkData}
            className="border rounded-[1px] px-1 py-1"
          />
          <input
            type="text"
            name="address"
            value={workData.address}
            placeholder="Address"
            onChange={HandleWorkData}
            className="border rounded-[1px] px-1 py-1"
            
          />
          <input
            type="text"
            name="mobileNo"
            value={workData.mobileNo}
            placeholder="Mobile No Ex:9898000000"
            required
            onChange={HandleWorkData}
            className="border rounded-[1px] px-1 py-1"

             maxLength={10}
            minLength={10}
            pattern="[0-9]{10}"
          />

         <input
            type="file"
            className=" cursor-pointer"
            accept="image/*"
            onChange={handleImage}
          />

          <button
            type="submit"
            className="border px-1 py-1 cursor-pointer bg-black text-white rounded"
            onClick={() => setLoading1(true)}
          >
            {" "}
            {loading1 ? "Posting..." : "Submit"}
          </button>
        </form>
      </div>
      </div>

)
}
export default Services