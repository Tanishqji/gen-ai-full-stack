import { createBrowserRouter } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Home from "./features/interview/pages/Home";
import Protected from "./features/auth/components/Proctected";




export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Protected><Home /></Protected>
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
])
