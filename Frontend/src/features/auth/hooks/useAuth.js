import { use, useContext,useEffect } from "react";
import { AuthContext } from "../services/auth.context";
import { loginUser,registerUser,getMe,logoutUser } from "../services/auth.api";

//hooks use for  handling the state and the api 
export const useAuth = () => {

    const context = useContext(AuthContext);
    const { user, setUser, loading, setLoading } = context;


    const handleLogin = async ({email, password}) => {
        setLoading(true);
        try {
            const userData = await loginUser({email, password});
            setUser(userData);
        } catch (error) {
            console.error("Login failed", error);
        } finally {
            setLoading(false);
        }
    };

    const handleRegister = async ({username, email, password}) => {
        setLoading(true);
        try {
            const userData = await registerUser({username, email, password});
            setUser(userData);
        } catch (error) {
            console.error("Registration failed", error);
        } finally {
            setLoading(false);
        }   
    };

    const handleLogout = async () => {
        setLoading(true);
        try {
            await logoutUser();
            setUser(null);
        } catch (error) {
            console.error("Logout failed", error);
        } finally {
            setLoading(false);
        }
    };

     useEffect(() => {
            const getAndSetUser = async () => {
                setLoading(true);
                try {
                    const userData = await getMe();
                    setUser(userData);
                } catch (error) {
                    console.error("Error fetching user data:", error);
                } finally {
                    setLoading(false);
                }
            };
    
            getAndSetUser();
        }, []);
    

    return{ user, loading, handleLogin, handleRegister, handleLogout }

}
