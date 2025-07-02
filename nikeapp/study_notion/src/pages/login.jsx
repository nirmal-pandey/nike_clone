import React from 'react';
import Template from '../components/template.jsx';


const Login = ({setlogin}) => {
    return (
        <Template
        
            title="Login"
            desc1="Welcome back to StudyNotion"
            desc2="Please login to continue"  
            image="https://cdn.pixabay.com/photo/2017/08/30/07/50/people-2696940_1280.jpg"
            formtype="login"
            setlogin={setlogin} // Placeholder function, replace with actual login handler
            
        
        />
    );
}

export default Login;  