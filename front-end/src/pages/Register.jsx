import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Auths from "./Auth";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  // console.log("tttttttttttsgsdfgbfdhsnjwne4arTWN4ETR");

  const [res, setres] = useState();

  const navigate = useNavigate();
  const [status, setStatus] = useState(false);

   const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [data, setData] = useState({
    fullname: "",
    password: "",
    phonenumber: "",
  });

  useEffect(() => {
    if (status) {
      navigate("/login-page"); // Redirect when status becomes true
    }
  }, [status, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();    
    // console.log(data);

    const res = fetch("https://workoncall.onrender.com/api/authentication/register-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status <= 399) {
          setStatus(true);
        }
        return response.json();
      })
      .then((data) => {
        console.log("response from the post res", data);
      })
      .catch((error) => {
        console.error("error frpm fetch ", error);
      });
  };

  // const GoogleLogin = ()=>{
  //   window.location.href='http://localhost:3000/api/google';
  // }

  // const Facebooklogin = ()=>{
  //   window.location.href='http://localhost:3000/api/facebook';
  // }

  return (
    <div className="md:mt-35 mt-50">
      <div className="grid place-items-center  my-30 ">
        <h1>Welcome to register Page</h1>
        <form
          onSubmit={handleSubmit} 
          className=" border flex flex-col gap-4 p-6 md:w-96 w-90 shadow-[0_4px_20px_rgba(0,0,0,0.3)] rounded-lg"
        >
          <input
            className="px-4 py-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12   "
            name="fullname"
            type="text"
            placeholder="Enter your full name"
            onChange={handleChange}
            value={data.fullname}
            required
          />
          <div className="relative">
          <input
            className="px-4 py-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
           type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            maxLength={15}
            minLength={6}
            name="password"
            onChange={handleChange}
            value={data.password}
            required
          /> <button 
          type="button"
          onClick={togglePasswordVisibility}
          className="toggle-btn absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 p-1 focus:outline-none "
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>

        </div>
          <input
            className="px-4 py-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
            type="text"
            placeholder="Enter your mobile number"
            name="phonenumber"
            onChange={handleChange}
            value={data.phonenumber}
            maxLength={10}
            minLength={10}
            pattern="[0-9]{10}"
            required
          />
          <button
            type="submit"
            className=" px-3 py-2 border bg-black  text-white rounded-[5px] px-1 py-1 cursor-pointer"
          >
            Register
          </button>

          <span>
            Already Register
            <Link to="/login-page" className="text-blue-600">
              {" "}
              Login{" "}
            </Link>
            hear
          </span>

          <Auths />
        </form>
        {/* <button onClick={GoogleLogin}>Google</button>
          <button onClick={Facebooklogin}>Facebook</button> */}
      </div>
    </div>
  );
};

export default Register;
