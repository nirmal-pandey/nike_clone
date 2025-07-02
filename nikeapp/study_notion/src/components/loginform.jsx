import React, { useState } from "react";
import Dashboard from "../pages/dashboard";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginForm = ({setlogin}) => {

    const [formdata , setformdata] = useState({

        email:"",
        password:"",

    })

    const navigate = useNavigate();

    function changeHandler(e) {
        setformdata((prevData) => (
            {
                ...prevData,
                [e.target.name]: e.target.value
            }
        ))
    }

    
    return (
        <div>


            <form onSubmit={(e) => {

                e.preventDefault();
                setlogin(true);
                toast.success("Login Successful");
                navigate("/dashboard");
                
                }}> 

                <div>


                        <label>

                            <p>Email Address <sup>*</sup> </p>
                            <input type="text"
                                    required 
                                    onChange={changeHandler}
                                    placeholder="Enter Your Email"
                                    value={formdata.email}
                                    name = "email"
                            />
                        </label>

                        <label>

                            <p>Create Password</p>
                            <input type= {("password")}
                                    required
                                    onChange={changeHandler}
                                    placeholder="Enter Your Password"
                                    value={formdata.password}
                                    name = "password"

                            />
                        </label>



                </div>
            
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">

                Sign In
            </button>


            </form>
        </div>
    );
}

export default LoginForm;