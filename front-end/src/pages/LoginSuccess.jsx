import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useSearchParams } from 'react-router-dom';


const LoginSuccess = () => {
  const navigate = useNavigate();

  
useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token') || localStorage.getItem("token");
  console.log('Token from URL:', token);


  if (token) {
    localStorage.setItem('token', token);
    localStorage.setItem('token', token);
    setTimeout(() => navigate('/Provide-services'), 500);
  } else {
    navigate('/');
  }
}, [navigate]);

  return(
    <div>

<p>Logging you in...</p>;
<p>Logging you in...</p>;
<p>Logging you in...</p>;
<p>Logging you in...</p>;
<p>Logging you in...</p>;
<p>Logging you in...</p>;
    </div>
  ) 
};

export default LoginSuccess;



// import { useEffect } from "react";

// export default function LoginSuccess() {
//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const token = params.get('token');
//     if (token) {
//       localStorage.setItem('jwt', token);
//       alert('Login Successful!');
//     }
//   }, []);
//   return <h2>Login Successful</h2>;
// }
