import react from 'react';
import SignupForm from './signupform';
import LoginForm from './loginform';
import { useState } from 'react';


const Template  = ({title ,desc1 , desc2 ,image , formtype , setlogin})=>{

    return(

        <div>

            <div>
                <h1>{title}</h1>
                <p> 
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                
                </p>

                {formtype === "signup" ? 
                (<SignupForm setlogin={setlogin}/>) :
                (<LoginForm setlogin={setlogin}/>)
                }

                <div>

                    <div></div>
                    OR
                    <div></div>

                </div>

                <button>
                    Sign In using Google
                </button>

            </div>

            <div>

                <img src={image} />

            </div>


        </div>
    )
}

export default Template;