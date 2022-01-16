import { authService } from "fbase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);

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
        event.preventDefault();
        console.log("onsubmit");
        let data;
        try {
            if (newAccount) {
                // data = await authService.createUserWithEmailAndPassword(email, password);
                data = await createUserWithEmailAndPassword(authService, email, password);
                setNewAccount(false);
            } else {
                data = await signInWithEmailAndPassword(authService, email, password);
                // data = await authService.signInWithEmailAndPassword(email, password);
            }
            console.log(data);
        } catch (error) {
            console.log("error" + error); 
        }
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name="email" type="text" placeholder="email" required value={email} onChange={onChange} />
                <input name="password" type="password" placeholder="password" required value={password} onChange={onChange} />
                <input type="submit" value="login" />
                <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
            </form>
            <div>
                <button>continue with google</button>
            </div>
        </div>
    );
}
export default Auth;