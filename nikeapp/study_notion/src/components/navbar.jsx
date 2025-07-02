
import { Link } from "react-router-dom";
import logo from "../assets/react.svg"; 
import React from "react";
import { toast } from "react-hot-toast";


const Navbar = (props) => {

    let isLoggedin = props.isLoggedin;
    let setlogin = props.setlogin;

    return (

        <div className=" flex text-xl font-bold gap-3 justify-evenly mt-4">
            
            {
                <Link to ="/">
                    <img src={logo} alt="" />
              
                </Link>
            }

            <nav class="flex items-center justify-between flex-wrap bg-teal-300 p-3 rounded-md shadow-md ">

                <ul className="flex gap-3">
                    {
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                    }

                    <li>
                         <Link to="/">
                            About
                         </Link>
                    </li>

                    <li>
                         <Link to="/">
                            Contact Us 
                         </Link>
                    </li>
                    
                </ul>

            </nav>

            <div className=" flex gap-7 items-center">

                {!isLoggedin &&
                    <Link to="/signup">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Signup</button>
                    </Link>
                }

                {!isLoggedin &&
                    <Link to="/login">
                        <button setlogin={setlogin} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
                    </Link>
                }

                {isLoggedin &&
                    <Link to="/">
                        <button onClick={()=>{ 
                            setlogin(false);
                            toast.success("Logged out successfully");
                        }}
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Logout</button>
                    </Link>
                }

                {isLoggedin &&
                    <Link to="/dashboard">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Dashboard</button>
                    </Link>
                }

            </div>

            

        </div>
    )
}

export default Navbar;