import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) =>{
        if(data.success){
            localStorage.setItem('accessToken', data.accessToken);
            navigate('/order')
        }
        console.log(data);
      });
  };
  return (
    <div>
      <h2 className="text-3xl"> Login</h2>
      <form onSubmit={handleLogin} >
        <input
          type="email"
          name="email"
          placeholder="email"
          class="input input-bordered w-full max-w-xs"
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="email"
          class="input input-bordered w-full max-w-xs"
        />
        <br />
        <br />
        <input type="submit" className="btn" value="Add User" />
      </form>
    </div>
  );
};

export default Login;
