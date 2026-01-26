import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useSearch } from "./SearchContext";

const WorkersDetails = () => {

  const {searchText} = useSearch();
  console.log(searchText);

  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const URl = searchText ? `https://workoncall.onrender.com/api/GetPosts/get-workers?search=${searchText}`
                               : `https://workoncall.onrender.com/api/GetPosts/get-workers`

           console.log(searchText);
                              
        const res = await axios.get(URl);

          if(!details){
          return <p className="text-red-500 mt-50">Loading...</p>
        }

        setDetails(res.data);

      } catch (error) {
        console.error(error);
        setError("failed to fetch Data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [searchText]); 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-40">
      {details.map((item) => (
        <div
          key={item._id}
          className=" p-4 rounded-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.3)] mx-2 my-2 "
        >
               <div className="relative w-full h-40 overflow-hidden rounded-lg  group">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full cursor-pointer object-contain transition-transform duration-300 group-hover:scale-110"
          />
           <div className="absolute cursor-pointer inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <h3 className="text-blue-400">Title:<span className="text-black">{item.title}</span></h3>
          <h3 className="text-blue-400">Name:<span className="text-black">{item.name}</span></h3>
          <h3 className="text-blue-400">Amount:<span className="text-black">₹{item.amount}</span></h3>
          <p className="text-blue-400">Description: <span className="text-black">{item.description}</span></p>
          <p className="text-blue-400">Work Hours: <span className="text-black">{item.workHours}</span> </p>
          <p className="text-blue-400">Address: <span className="text-black">{item.address}</span></p>
          <p className="text-blue-400">
            Mobile No: <a 
           className="text-black" href={`tel:${item.mobileNo}`}>{item.mobileNo}</a>
          </p>{" "}
        </div>
      ))}
    </div>
  );
};

export default WorkersDetails;
