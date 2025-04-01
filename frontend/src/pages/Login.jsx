import React from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { getTokenFromUrl, setAuthToken } from "../utils/api";

function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = getTokenFromUrl(); 
        if (token) {
            setAuthToken(token);
            navigate('/dashboard');
        }
    }, [navigate])

    return (
        <div>
            <h1>Login with Google</h1>
            <a href="http://localhost:5000/auth/google">Login with Google</a>
        </div>
    )
}

export default Login;
