import React from "react";
import Template from "../components/template.jsx";

const Signup = ({setlogin}) => {
    return (
        <Template
        title="Sign Up"
        desc1="Welcome to StudyNotion"
        desc2="Please sign up to continue"
        image="https://cdn.pixabay.com/photo/2017/08/30/07/50/people-2696940_1280.jpg"
        formtype="signup"
        setlogin={setlogin}
        />
    );
    }

export default Signup;
