import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { Meeting } from "../models/meeting.model.js";
const register = async (req, res) => {
    console.log("Registering user:", req.body);
    try {
        if (!req.body) {
            return res.status(400).json({ message: "Request body is missing" });
        }
        const { name, username, password } = req.body;
        if (!name || !username || !password) {
            return res.status(400).json({ message: "All fields are required" })
        }
        const existUser = await User.findOne({ username })
        if (existUser) {
            return res.status(400).json({ message: "User exists" })
        }
        const hashedPass = await bcrypt.hash(password, 10);
        const user = await User.create({
            name: name,
            username: username,
            password: hashedPass
        })

        await user.save();

        return res.status(201).json({ message: "User created successfully" })
    } catch (error) {
        console.log("Registration error:", error);
        return res.status(500).json({ message: "Internal server error" })
    }
}

const login = async (req, res) => {
    console.log("Logging in user:", req.body);
    try {
        if (!req.body) {
            return res.status(400).json({ message: "Request body is missing" });
        }
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: "All fields are required" })
        }
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(400).json({ message: "User not found" })
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid password" })
        }
        const token = crypto.randomBytes(32).toString("hex");
        user.token = token;
        await user.save();
        return res.status(200).json({ token: token, message: "Login successful" })
    } catch (error) {
        console.log("Login error:", error);
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}


const getUserHistory = async (req, res) => {
    const {token}=req.query;
    try{
        const user=await User.findOne({token:token});
        const meetings=await Meeting.find({user_id:user.username});
        res.json(meetings)
    }
    catch(error){
        console.log("Error fetching user history:", error);
        return res.status(500).json({ message: "Internal server error" })
    }
}

const addToUserHistory=async(req,res)=>{
    const {token,meeting_code}=req.body;
    try{
        const user=await User.findOne({token:token});
        const newMeeting=new Meeting({
            user_id:user.username,
            meeting_code:meeting_code
        })
        await newMeeting.save();
        res.json({message:"Meeting added to history"})
    }
    catch(error){
        console.log("Error adding meeting to history:", error);
        return res.status(500).json({ message: "Internal server error" })
    }
}


export { register, login,addToUserHistory,getUserHistory }