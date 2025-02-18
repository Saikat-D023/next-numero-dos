"use client"

import axios from "axios"
import { useState } from "react";

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="border p-2">
            <input type="text" placeholder="username" onChange ={ e => {
                setUsername(e.target.value);
            }}/>
            <input type="text" placeholder="password" onChange= { e  => {
                setPassword(e.target.value)
            }}/>

            <button onClick={() => {
                console.log(username);
                console.log(password);
                axios.post("http://localhost:3000/signup", {
                    username,
                    password
                })
            }}>Sign Up</button>
        </div>
    </div>
}