import { authService } from "fbase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import Home from "./Home";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authRes, setAuthRes] = useState("로그인 필요");

    const onChange = (event) => {
        const { target: { name, value } } = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
        console.log(event.target.name);
    };

    const onSubmit = async (event) => {
        let data;
        event.preventDefault();
        try {
            data = await signInWithEmailAndPassword(authService, email, password);
            setAuthRes("로그인 성공");
        } catch (error) {
            setAuthRes("로그인 실패 " + error.message);
        }
    }

    return (
        <div>
            <h1>{authRes}</h1>
            <form onSubmit={onSubmit}>
                <input name="email" type="text" placeholder="email" required value={email} onChange={onChange} />
                <br />
                <input name="password" type="password" placeholder="password" required value={password} onChange={onChange} />
                <input type="submit" value="Log In" />
            </form>
        </div>
    );
}

export default Auth;