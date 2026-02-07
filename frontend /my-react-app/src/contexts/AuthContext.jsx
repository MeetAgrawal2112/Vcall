import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

const client = axios.create({
    baseURL: "http://localhost:8000/api/v1/users",
    withCredentials: true,
});

export const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState();
    const router = useNavigate();

    const handleRegister = async (name, username, password) => {
        try {
            const request = await client.post("/register", {
                name,
                username,
                password
            });
            if (request.status === 201) {
                return request.data.message;
            }
        } catch (error) {
            throw error;
        }
    };

    const handleLogin = async (username, password) => {
        try {
            const request = await client.post("/login", {
                username,
                password
            });
            if (request.status === 200) {
                localStorage.setItem("token", request.data.token);
                return request.data;
            }
        } catch (error) {
            throw error;
        }
    };

    const data = {
        userData,
        setUserData,
        handleRegister,
        handleLogin,
        router
    };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};
