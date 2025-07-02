import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignupForm = ({setlogin}) => {


    const navigate = useNavigate();
    const [formdata , setformdata] = useState({

        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmpassword:""


    })

    function changeHandler(e) {
    setformdata((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
    }));
}

    
    return (
        <div>

            <div>
 
                <button>Student</button>
                <button>Instructor</button>
            </div>

            <form className="flex gap-4 flex-col p-4 bg-gray-100 rounded-lg shadow-md "
            
            onSubmit={(e)=>{
                e.preventDefault();
                if(formdata.password != formdata.confirmpassword) {
                    toast.error("Passwords do not match");
                    return;
                }
                toast.success("Account Created Successfully");
                setlogin(true);
                navigate("/dashboard");
            }}
            > 

                <div>


                        <label>

                            <p>First Name <sup>*</sup> </p>
                            <input type="text"
                                    required
                                    name="firstname"
                                    onChange={changeHandler}
                                    placeholder="Enter Your Name"
                                    value={formdata.firstname}
                            />
                        </label>

                        <label>

                            <p>Last Name</p>
                            <input type="text"
                                    required
                                    name="lastname"
                                    onChange={changeHandler}
                                    placeholder="Enter Your Last Name"
                                    value={formdata.lastname}
                            />
                        </label>



                </div>
 
                <label>

                    <p>Email</p>
                    <input type="email"
                        required
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Your Email"
                        value={formdata.email}
                    />

                </label>

                <div>

                    <label>

                            <p>Create Password</p>
                            <input type= {("password")}
                                    required
                                    name="password"
                                    onChange={changeHandler}
                                    placeholder="Enter Your Password"
                                    value={formdata.password}
                            />
                    </label>

                    <label>

                            <p>Confirm Password</p>
                            <input type= {("password")}
                                    required
                                    name="confirmpassword"
                                    onChange={changeHandler}
                                    placeholder="Confirm Password"
                                    value={formdata.confirmpassword}
                            />

                    </label>

                </div>
            
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-45">

                Create Account
            </button>


            </form>
        </div>
    );
}

export default SignupForm;