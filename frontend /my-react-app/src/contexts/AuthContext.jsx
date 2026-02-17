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

    const getHistoryOfUser = async () => {
        try {
            let request = await client.get("/get_all_activity", {
                params: {
                    token: localStorage.getItem("token")
                }
            });
            return request.data
        } catch
         (err) {
            throw err;
        }
    }


     const addToUserHistory = async (meetingCode) => {
        try {
            let request = await client.post("/add_to_activity", {
                token: localStorage.getItem("token"),
                meeting_code: meetingCode
            });
            return request
        } catch (e) {
            throw e;
        }
    }

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
