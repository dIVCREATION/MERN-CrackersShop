import React, { useContext, useState } from "react";
import { AppContext } from "../context/App_context";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
   const navigate = useNavigate()
  const {login} = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    const result = await login(email, password)
    console.log(result)

    toast.success(result.data.message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    console.log(result.data)
setTimeout(() => {
  navigate('/')
}, 1500);
};
  return (
    <>
        <ToastContainer />
      <div
        className="container my-5 p-5"
        style={{
          width: "500px",
          border: "3px solid  rgb(249, 128, 128)",
          borderRadius: "10px",
        }}
      >
        <h2 className="text-center">Login</h2>
        <form onSubmit={loginHandler}          
          style={{
            width: "420px",
            margin: "auto",
          }}
          className="my-3 p-3"
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
               value={email}
               onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>

          <div className="container d-grid col-6">
            <button type="submit" className="btn btn-primary my-3">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
