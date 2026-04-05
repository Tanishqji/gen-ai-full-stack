import { useNavigate } from "react-router-dom";
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

 const Protected = ({ children }) => {

    const { user, loading } = useAuth();

    if(loading){
        return(<main> <h1>Loading...</h1> </main>)
    }

    if(!user){
        return <Navigate to="/login" />
    }

    return children;
}

export default Protected