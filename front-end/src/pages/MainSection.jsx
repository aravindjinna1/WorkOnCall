

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
// import { useSearchInp } from "./SearchContext";
import PostSkeleton  from "./Loader";

import { useSearch } from "./SearchContext";

const ServicesList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { searchText } = useSearch();
  console.log(searchText);

// useEffect(()=>{
   
// }[searchText])
  // const {searchInp, setSearchInp} = useSearchInp();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const URL = searchText ? `https://workoncall.onrender.com/api/GetPosts/get-work?search=${searchText}`
                               :`https://workoncall.onrender.com/api/GetPosts/get-work`
        const res = await axios.get(URL);
        setData(res.data);
      } catch (err) {
        setError("Failed to load data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchText]);

  // if (loading) return <p className="text-black mt-80 text-3xl text-center" >Loading...</p>;

  // if(loading) return <DotsLoader />

  if (error) return <p>{error}</p>;

  return (
    <div>
             <h1 className="md:mt-35 mt-40 text-center text-3xl">Available Jobs & Works</h1>

{/* {loading && (
  <DotsLoader />
)} */}
{/* {loading &&( [...Array(3)].map((_, i) => (
  <DotsLoader key={i} />
)))} */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
  {loading && ([...Array(9)].map((_, i) => (
    <PostSkeleton key={i} />
  )))}
</div>


    <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 mx-5 ">
      {data.map((item) => (
        <div
          key={item._id}
          className=" shadow-[0_4px_10px_rgba(0,0,0,0.3)] p-4 rounded-[5px] overflow-hidden"
        >
          <div className="relative w-full h-40 overflow-hidden rounded-lg  group">
          {item.imageUrl && (
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-40 overflow-hidden object-cover cursor-pointer roounded transition-transform duration-300 ease-in-out group-hover:scale-105 "
            /> 
          )}
                     <div className="absolute cursor-pointer inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />

          </div>
          <h3 className="text-blue-400">Title:<span className="text-black">{item.title}</span></h3>
          {/* <h3 className="text-blue-400">Name:<span className="text-black">{item.name}</span></h3> */}
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
     </div>
  );

};


export default ServicesList;
