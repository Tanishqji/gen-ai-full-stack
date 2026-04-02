import { useContext } from "react";
import React from "react";
import { useState,createContext } from "react";
  

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

   

    return(
        <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>   
            {children}
        </AuthContext.Provider>
    )
}
    
