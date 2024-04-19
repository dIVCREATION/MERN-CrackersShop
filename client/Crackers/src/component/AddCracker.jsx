import React, { useContext, useState } from "react";
import { AppContext } from "../context/App_context";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


const AddCracker = () =>{
    const navigate = useNavigate();
    const {addCracker}  = useContext(AppContext);

    const [formData, setFormData] = useState({
        Pdname : "",
         price : 0,
          images : "",
           Stock :0
    });
    const onChangeHandler = (e) =>{
        const {name ,value} = e.target
        setFormData({...formData,[name]:value})
       }
    
       const onSubmitHandler = async (e) =>{
        e.preventDefault()
const { Pdname, price, images, Stock  } = formData;

const result = await addCracker(
    Pdname, price, images, Stock
);
console.log("add crac:",result)
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
    setTimeout(() => {
    navigate("/");
  }, 1500);
  }
  return (
    <>
      <ToastContainer />
      <div
        className="container my-5 p-5"
        style={{
          width: "500px",
          border: "2px solid yellow",
          borderRadius: "10px",
        }}
      >
        <h2 className="text-center">Add Cracker</h2>
        <form
          onSubmit={onSubmitHandler}
          style={{
            width: "400px",
            margin: "auto",
          }}
          className="my-3 p-3"
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail4" className="form-label">
              Pdname
            </label>
            <input
              value={formData.Pdname}
              onChange={onChangeHandler}
              name="Pdname"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              price
            </label>
            <input
              value={formData.price}
              onChange={onChangeHandler}
              name="price"
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail2" className="form-label">
              Stock
            </label>
            <input
              value={formData.Stock}
              onChange={onChangeHandler}
              name="Stock"
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail3" className="form-label">
              images
            </label>
            <input
              value={formData.images}
              onChange={onChangeHandler}
              name="images"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="container d-grid col-6">
            <button type="submit" className="btn btn-primary mt-3">
              Add Cracker
            </button>
          </div>

          </form>
</div>          </>
)}

export default AddCracker;
