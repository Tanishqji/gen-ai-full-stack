import { useActionData } from "react-router-dom";
import React from "react";
import { Navigate } from "react-router-dom";

 const Protected = ({ children }) => {

    const { user,loading } = useAuth(); 
    const navigate = useNavigate();

    if(loading){
        return(<main> <h1>Loading...</h1> </main>)
    }

    if(!user){
        return <Navigate to="/login" />
       // navigate("/login");
       // return(<main> <h1>Unauthorized</h1> </main>)
    }

    return (
        <div>
            Protected
        </div>
    )
}

export default Protected