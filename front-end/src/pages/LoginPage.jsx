import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Auths from "./Auth";
import AccountPage from "./Register";
import { Link } from "react-router-dom";

const login = () => {
  const navigate = useNavigate();

  const [valid, setValid] = useState(false);

  const [login, setlogin] = useState({
    fullname: "",
    password: "",
  });

  const [response, setResponce] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setlogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/authentication/login-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(login),
      });

      const data = await res.json(); //  IMPORTANT

      if(!data?.token){
        setValid(true);
      }

      if (data?.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userData", data.Info);


        // console.log("this is the lenghty userData", data.Info._id);
        // console.log("API response:", data);
        console.log("this was token", data.token);
        

        navigate("/Provide-services");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mt-55 md:mt-35 grid place-items-center mb-10 md:mb-15 mb-28">
      <h2>Login Hear</h2>

      <div className="flex flex-col md-w-100 w-90 gap-3 border rounded p-5 border shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
        <input
          className="border px-1 py-1"
          type="text"
          placeholder="Enter your full name"
          name="fullname"
          value={login.fullname}
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          className="border px-1 py-1"
          type="password"
          placeholder="Password"
          required
          name="password"
          value={login.password}
          onChange={(e) => handleChange(e)}
        />

        <button
          onClick={(e) => handleSubmit(e)}
          className=" cursor-pointer  bg-black text-white px-1 py-1 rounded-[5px] border"
        >
          login
        </button>

        {valid &&(
          <p className="text-red-400">Invalid Password or Username</p>
        )}


        <span>
          Don't have an Account? 
          <Link to="/register" className="text-blue-600 ml-1">Create</Link>
        </span>
        <Auths />

        {/* <p>{response}</p> */}
      </div>
    </div>
  );
};

export default login;
