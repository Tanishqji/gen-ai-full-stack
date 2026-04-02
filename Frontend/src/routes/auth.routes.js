import Protected from "../features/auth/components/Proctected";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import { createBrowserRouter } from "react-router-dom";

export const authRouter = createBrowserRouter([
    {   
        path : "/login",
        element : <Login />
    },
    {
        path : "/register",
        element : <Register />
    },
    {
        path : "/",
        element : <Protected><h1>Home Page</h1></Protected>
    }
])