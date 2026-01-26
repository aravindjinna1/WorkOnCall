"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Profile = () => {
  const Navigate = useNavigate();

  const [userData, setUserData] = useState(null);
  const [workPost, setWorkPost] = useState([]);
  const [workersPost, setWorkersPost] = useState([]);

  const [notFound, setNotFound] = useState(false);

  const token = localStorage.getItem("token");

  

  if (!token ) {
    return (
      <div className="mt-40 text-center">
        <h1 className="text-2xl underline">Profile Section</h1>
        <p className="text-red-500 mt-4 mb-5">
          Please login to view your profile
        </p>
        <Link
          to="/login-page"
          className="rounded border p-2 hover:bg-green-400 "
        >
          Login Hear
        </Link>
      </div>
    );
  }

  useEffect(() => {

    // if (!token) return;

    async function fetchProfile() {
      try {
        const res = await fetch(
          "http://localhost:3000/api/Profile/get-profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

      if (res.status === 401) {
        localStorage.removeItem("token");
        // Navigate("/login-page");
        return;
      }


 

        const data = await res.json();

        const { userData, workPost, workersPost } = data;

        setUserData(userData);
        setWorkPost(workPost);
        setWorkersPost(workersPost);

        if (!userData) {
          setNotFound(true);
        }
        
      } catch (err) {
        console.error("Profile fetch error:", err);
        localStorage.removeItem("token");
        Navigate("/login-page");
      }
    }

    fetchProfile();
  }, []);

  // if (!userData) return <p className="mt-50">Loading...</p>;

  const DeleteJobPost = async (postID) => {
    await fetch(`http://localhost:3000/api/delete-post/job-post/${postID}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setWorkPost((prev) => prev.filter((p) => p._id !== postID));
  };

  const DeleteWorkerPost = async (postWid) => {
    await fetch(
      `http://localhost:3000/api/delete-post/worker-post/${postWid}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    setWorkersPost((prev) => prev.filter((p) => p._id !== postWid));
  };

  const Lagout = () => {
    localStorage.removeItem("token");
    Navigate("/login-page");
  };

 
console.log("TOKEN:", token);
console.log("USER DATA:", userData);

  // z-10 absolute top-40 flex flex-col items-center gap-8 justify-center w-full
  return (
    <div className="z-10   grid place-items-center grid-cols-1  gap-4 mt-40">
      <div className="flex">
        <h1 className="text-center text-black text-2xl underline">
          Profile Section
        </h1>
        {/* {notFound && <h2 className="m-100 text-red">User Not Found</h2>} */}
        <button
          className="hover:bg-red-500 w-15 cursor-pointer relative left-15 md:left-50 rounded border shadow-[0_4px_10px_rgba(0,0,0,0.3)]  "
          onClick={() => Lagout()}
        >
          Lagout
        </button>
      </div>
      
      <h1>YOUR POSTS</h1>
      <div className="flex md:flex-row flex-col gap-10 items-center md:items-start w-full h-full justify-center ">
        {/* USER INFO */}
        <div className=" max-w-80 max-h-40 p-5 rounded shadow-[0_4px_10px_rgba(0,0,0,0.3)] ">
          <h1 className="underline text-center">User Information</h1>
          <h3>
            <span className="text-blue-500">Name:</span>
            {userData?.fullname}
          </h3>
          {/* <p>{userData.email}</p> */}
          <p>
            <span className="text-blue-500">Mobile no:</span>{" "}
            {userData?.phonenumber}
          </p>

          <p>
            <span className="text-blue-500">Email:</span> {userData?.email}
          </p>
        </div>

        {/* WORK POSTS */}

        <div>
          {workPost?.map((w, i) => (
            <div
              key={w._id}
              className="  rounded  max-w-100 max-h-100 p-5 shadow-[0_4px_10px_rgba(0,0,0,0.3)]"
            >
              <h1 className="text-center underline">Your job post Details</h1>

              <h4>
                <span className="text-blue-500">Title:</span> {w.title}
              </h4>
              <p>
                <span className="text-blue-500">Description:</span>{" "}
                {w.description}
              </p>
              <p>
                <span className="text-blue-500">Address:</span> {w.address}
              </p>
              <p>
                <span className="text-blue-500">Mobile no:</span> {w.mobileNo}
              </p>
              <img
                className="rounded max-h-50 border max-w-50"
                src={w.imageUrl}
              />
              <button
                className="bg-black mt-3 hover:bg-red-500 p-1 text-white rounded cursor-pointer"
                onClick={() => DeleteJobPost(w._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {/* WORKERS POSTS */}
        <div>
          {workersPost?.map((wo, i) => (
            <div
              key={wo._id}
              className=" p-5 rounded max-w-100 max-h-100 shadow-[0_4px_10px_rgba(0,0,0,0.3)]"
            >
              <h1 className="text-center underline">Your Service Details</h1>
              <p>
                <span className="text-blue-500">Title:</span> {wo.title}
              </p>
              <p>
                <span className="text-blue-500">Description:</span>{" "}
                {wo.description}
              </p>
              <p>
                <span className="text-blue-500">Address:</span> {wo.address}
              </p>
              <h3>
                <span className="text-blue-500">Mobile No:</span> {wo.mobileNo}
              </h3>
              <img
                className="max-h-50 max-w-50 border rounded object-contain"
                src={wo.imageUrl}
              />
              <button
                className="bg-black p-1 mt-3 hover:bg-red-500 text-white rounded cursor-pointer"
                onClick={() => DeleteWorkerPost(wo._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
